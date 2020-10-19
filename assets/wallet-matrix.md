# Wallet Credential Format Grid - October 2020
### DIF Interoperability [WG](https://github.com/decentralized-identity/interoperability/blob/master/agenda.md)

For entertainment purposes only, all claims self-attested and non-binding!

--- 
We are trying to get a ballpark notion of which types of credentials each "wallet" can HOLD (be issued) and PRESENT (use to generate VPs). Nits:
* By "wallet," we are including custodial wallets and agents, all software that can hold credentials under the control of their holder and present credentials on behalf of their holder
* For the purposes of *this* document, verifying and consuming these VCs but "translating" them or storing them in another format is out of scope (although that might be a valuable thing to look into later!).  
* Similarly, we are not looking too closely at how interoperable each wallet is with **which** issuers or how foreign/far-afield they are-- that's a nit to be picked another day! We can add more columns later if people find that useful.



### Instructions:

* If you have intimate knowledge of the roadmap/dev team of a wallet you feel qualified to speak about publically, 
    * please try to fill in each credential format's columns in your wallet's row using the following legend ONLY (no text)
    * if you would like to add text, please do it as a hackmd footnote like this[^footnote1].
* If you do not have such knowledge and authority, but you know someone who does, please forward this URL to them!

### LEGEND: 
Y = Our wallet currently can hold and present these cred formats in a way that we feel is 100% conformant 
S = Soon (already in development)
P = Partial support: 
* some specified features missing, and/or 
* specified features implemented in an off-spec way
* no decision yet on when/whether to address the above. if decided, use PR or PX.

PR = Partial support, the rest is on our roadmap
PX = Partial support, and no plans to implement the rest and/or conform to spec
R = Roadmapped but not currently in development
N = No decision
X = Planning NOT to support this format
! = None of your business, DIF!
? = No definitive information could yet be confirmed or denied from governing organization. If a cell contains another symbol and a ?, consider it an unconfirmed rumor!

### THE MAIN EVENT

|VC Creds: | LD-Proofs (i.e. VCs in conformant LD) | VC-JWTs | AnonCreds | BBS+ | 
|---|---|---|---|---|---|
| fine print: | VCs stored in conformant LD | VCs in Vanilla JSON | tooling for Indy-based Linked Secrets | LD-based ZKP presentation-enabled (independent of Indy support) | 
|Transmute            |Y |? |? |? |
|Veres Wallet         |Y |X |X |N |
|Affinity             |Y |? |? |? |
|Consensys D.A.F.     |? |Y |? |? |
|[uPort Serto](https://ecosystems.uport.me/)          |? |? |? |? |
|[Minerva](https://twitter.com/MinervaWallet)              |R |Y |X |N |
|MSFT Authenticator   |PR|Y |X?|N?|
|evan.network         |Y |? |? |? | 
|Jolocom              |Y |? |? |? | 
|Gataca               |Y |Y |N |R |
|JLinc/MyData Commons |? |? |? |? |
|ArcBlock             |Y |Y |X |P |
|[RANDA](https://randasolutions.com/the-wallet-by-randa/) |Y |Y |N |R |
|<your wallet here>   |? |? |? |? |
|[tykn.tech](https://tykn.tech/ana/)            |? |? |? |? |
|Credible             |S |? |? |S |
|Swisscom Blockchain  |? |? |? |R?|
|GlobalID             |? |? |Y |R |
|Mattr                |Y |? |? |Y |
|Trinsic              |R |? |Y |R |
|Kiva                 |? |? |? |? |
|Connect.me           |N?|N?|Y |R |
|Lissi                |N |N |Y |R |
|SeLF (esatus)        |? |? |Y |R |
|Aries Cloud Agent    |PR|N |Y |R |
|Spherity|Y[^footnotespherity] |Y|P|R|
|VIDchain             |Y|PR|R|R|
|[WayTo by Workday](http://mywayto.com/)|Y[^footnoteworkday]|N|N|N|
|DCC Wallet             |Y|N|N|R|

### Notes from discussion 10/7/20

Ideas for future columns or future charts
* Human versus non-human subjects/holders? 
* Agents versus wallets-- bracketable for now? 
* Nomenclature: stop calling it anoncreds2, Juan!
* 

### Footnotes
[^footnote1]: This is how footnotes work in hackMD. Each footnote has to have a unique name, but you can link to them in multiple places!
[^footnotespherity]: Somewhere between Y and PR! Our homegrown LD implementation is a little undertested but seems to work fine. Aligning with Mattr's linter and Transmute's Document-Loader is roadmapped!
[^footnoteworkday]: We do not use JSON-LD but use LD-style proofs. We use a plain JSON solution without JWTs.