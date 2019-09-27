const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const element = require("@transmute/element-lib");
const didWallet = require("@transmute/did-wallet");
const ES256K = require("@transmute/es256k-jws-ts");

const resolver = require("../../resolver");

const createVc = require("../../create-credential");
const createVp = require("../../create-presentation");

const mnemonicToDid = mnemonic => {
  const mks = new element.MnemonicKeySystem(mnemonic);
  const didUniqueSuffix = element.op.getDidUniqueSuffix({
    primaryKey: mks.getKeyForPurpose("primary", 0),
    recoveryPublicKey: mks.getKeyForPurpose("recovery", 0).publicKey
  });
  return "did:elem:" + didUniqueSuffix;
};

const submitOperation = async op => {
  const res = await fetch("https://element-did.com/api/v1/sidetree/requests", {
    headers: {
      Accept: "application/ld+json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(op),
    method: "post"
  }).then(data => data.json());

  return res;
};

module.exports = registerCommands = vorpal => {
  vorpal
    .command("elem:create <password>", "create an elem cli wallet and did")
    .action(async args => {
      const pathToWalletFile = path.resolve(
        process.cwd(),
        "./data/elem-wallet.txt"
      );

      if (fs.existsSync(pathToWalletFile)) {
        const encryptedWallet = fs.readFileSync(pathToWalletFile).toString();
        const wallet = didWallet.create(encryptedWallet);
        wallet.unlock(args.password);
        const mnemonic = Object.values(wallet.keys)[0].mnemonic;
        const did = mnemonicToDid(mnemonic);
        try {
          const ddo = await resolver.resolve(did);
          console.log(JSON.stringify(ddo, null, 2));
        } catch (e) {
          const mks = new element.MnemonicKeySystem(mnemonic);
          const createOp = element.op.create({
            primaryKey: mks.getKeyForPurpose("primary", 0),
            recoveryPublicKey: mks.getKeyForPurpose("recovery", 0).publicKey
          });
          await submitOperation(createOp);
          //   wait for did to be created.
          await vorpal.wait(1.5 * 60);
          const ddo = await resolver.resolve(did);
          console.log(JSON.stringify(ddo, null, 2));
        }
      } else {
        const mnemonic = element.MnemonicKeySystem.generateMnemonic();
        const did = mnemonicToDid(mnemonic);
        const wallet = didWallet.create({
          keys: [
            {
              encoding: "bip39",
              mnemonic: mnemonic,
              notes: "Interop Project Demo",
              tags: [did, "interop-demo"],
              type: "mnemonic"
            }
          ]
        });
        wallet.lock(args.password);
        fs.writeFileSync(pathToWalletFile, wallet.export());
        const mks = new element.MnemonicKeySystem(mnemonic);
        const createOp = element.op.create({
          primaryKey: mks.getKeyForPurpose("primary", 0),
          recoveryPublicKey: mks.getKeyForPurpose("recovery", 0).publicKey
        });
        await submitOperation(createOp);
        await vorpal.wait(1.5 * 60);
        const ddo = await resolver.resolve(did);
        console.log(JSON.stringify(ddo, null, 2));
      }
      return vorpal.wait(1);
    });

  vorpal
    .command(
      "elem:add-jwk <password>",
      "add a jwk for use with vc to an element did."
    )
    .action(async args => {
      const pathToWalletFile = path.resolve(
        process.cwd(),
        "./data/elem-wallet.txt"
      );

      const encryptedWallet = fs.readFileSync(pathToWalletFile).toString();
      const wallet = didWallet.create(encryptedWallet);
      wallet.unlock(args.password);
      const mnemonic = Object.values(wallet.keys)[0].mnemonic;
      const mks = new element.MnemonicKeySystem(mnemonic);
      const did = mnemonicToDid(mnemonic);
      let ddo = await resolver.resolve(did);

      const primaryKeypair = mks.getKeyForPurpose("primary", 0);

      const didUniqueSuffix = did.split(":").pop();

      const publicKeyJwk = await ES256K.keyUtils.publicJWKFromPublicKeyHex(
        primaryKeypair.publicKey
      );

      const isAddedAlready = ddo.publicKey.find(key => {
        return key.id === did + "#key-" + publicKeyJwk.kid;
      });

      if (isAddedAlready) {
        console.log("Key already added");
        return;
      }

      const updateOp = element.op.update({
        didUniqueSuffix: didUniqueSuffix,
        previousOperationHash: didUniqueSuffix,
        patch: [
          {
            op: "replace",
            path: `/publicKey/${ddo.publicKey.length}`,
            value: {
              id: did + "#key-" + publicKeyJwk.kid,
              type: "Secp256k1VerificationKey2018",
              controller: did,
              publicKeyJwk: publicKeyJwk
            }
          },
          // optional service endoint update
          {
            op: "replace",
            path: "/service",
            value: [
              {
                id: "#dif.interop",
                type: "DIF.InteropDemo",
                serviceEndpoint:
                  "https://github.com/decentralized-identity/interoperability"
              }
            ]
          }
        ],
        primaryPrivateKey: mks.getKeyForPurpose("primary", 0).privateKey
      });

      await submitOperation(updateOp);
      await vorpal.wait(1.5 * 60);
      ddo = await resolver.resolve(did);
      console.log(JSON.stringify(ddo, null, 2));

      return vorpal.wait(1);
    });

  vorpal
    .command(
      "elem:create-credential <password> <subjectDid> <outputPath>",
      "create a VC"
    )
    .action(async args => {
      const pathToWalletFile = path.resolve(
        process.cwd(),
        "./data/elem-wallet.txt"
      );

      const encryptedWallet = fs.readFileSync(pathToWalletFile).toString();
      const wallet = didWallet.create(encryptedWallet);
      wallet.unlock(args.password);
      const mnemonic = Object.values(wallet.keys)[0].mnemonic;
      const mks = new element.MnemonicKeySystem(mnemonic);
      const did = mnemonicToDid(mnemonic);
      const primaryKeypair = mks.getKeyForPurpose("primary", 0);

      const privateKeyJwk = await ES256K.keyUtils.privateJWKFromPrivateKeyHex(
        primaryKeypair.privateKey
      );

      const vc = await createVc(did, args.subjectDid, privateKeyJwk);

      fs.writeFileSync(args.outputPath, vc);

      // eslint-disable-next-line
      console.log(
        JSON.stringify(
          {
            vc
          },
          null,
          2
        )
      );

      return vorpal.wait(1);
    });

  vorpal
    .command(
      "elem:create-presentation <password> <aud> <pathToVc> <outputPath>",
      "Create a W3C Verifiable Presentation"
    )
    .action(async args => {
      const pathToWalletFile = path.resolve(
        process.cwd(),
        "./data/elem-wallet.txt"
      );
      const pathToVc = path.resolve(process.cwd(), args.pathToVc);

      const vcJws = fs.readFileSync(pathToVc).toString();

      const encryptedWallet = fs.readFileSync(pathToWalletFile).toString();
      const wallet = didWallet.create(encryptedWallet);
      wallet.unlock(args.password);
      const mnemonic = Object.values(wallet.keys)[0].mnemonic;
      const mks = new element.MnemonicKeySystem(mnemonic);
      const did = mnemonicToDid(mnemonic);
      const primaryKeypair = mks.getKeyForPurpose("primary", 0);

      const privateKeyJwk = await ES256K.keyUtils.privateJWKFromPrivateKeyHex(
        primaryKeypair.privateKey
      );

      const vp = await createVp(vcJws, did, args.aud, privateKeyJwk);

      fs.writeFileSync(args.outputPath, vp);

      // eslint-disable-next-line
      console.log(
        JSON.stringify(
          {
            vp
          },
          null,
          2
        )
      );

      // return vorpal.wait(1);
    });
};
