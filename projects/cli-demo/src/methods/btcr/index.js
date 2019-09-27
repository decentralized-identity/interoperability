const fs = require("fs");
const path = require("path");

const ES256K = require("@transmute/es256k-jws-ts");

const resolver = require("../../resolver");

const createVc = require("../../create-credential");
const createVp = require("../../create-presentation");

module.exports = registerCommands = vorpal => {
  vorpal
    .command("btcr:create <password>", "create a btcr wallet and did")
    .action(async args => {
      console.log(JSON.stringify({ error: "not implemented" }, null, 2));
      return vorpal.wait(1);
    });

  vorpal
    .command(
      "btcr:create-credential <issuerDid> <issuerPrivateKeyHex> <subjectDid> <outputPath>",
      "Create a W3C Verfiable Credential"
    )
    .action(async args => {
      const privateKeyJwk = await ES256K.keyUtils.privateJWKFromPrivateKeyHex(
        args.issuerPrivateKeyHex
      );

      const vc = await createVc(args.issuerDid, args.subjectDid, privateKeyJwk);

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
      "btcr:create-presentation <issuerDid> <issuerPrivateKeyHex> <aud> <pathToVc> <outputPath>",
      "Create a W3C Verfiable Presentation"
    )
    .action(async args => {
      const privateKeyJwk = await ES256K.keyUtils.privateJWKFromPrivateKeyHex(
        args.issuerPrivateKeyHex
      );

      const pathToVc = path.resolve(process.cwd(), args.pathToVc);

      const vcJws = fs.readFileSync(pathToVc).toString();

      const vp = await createVp(vcJws, args.issuerDid, args.aud, privateKeyJwk);

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
      return vorpal.wait(1);
    });
};
