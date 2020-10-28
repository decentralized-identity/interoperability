# DIF Interop WG's guide to IIW 

This is a deliverable of the DIF Interoperability [WG](https://github.com/decentralized-identity/interoperability/blob/master/agenda.md), and is intended for editing in HackMD and/or GitHub issues:
[![hackmd-github-sync-badge](https://hackmd.io/DGeGahiYQGeIGvl-DRDE6Q/badge)](https://hackmd.io/DGeGahiYQGeIGvl-DRDE6Q)
    

|Session Title|Convener|Recording & Notes|Topics Covered|Recommended for|
|---|---|---|---|---|
|Interop WG readout|Kaliya & Juan|Rec: [Youtube](https://www.youtube.com/watch?v=DaM0UtQTLCs) <br> Notes: not great <br> Day 1-4B|Deliverables, Q&A with participants about interop interests and projects|hardcore interop researchers|
|Condatis Interop Story (?)|Chris Eckl (Condatis)|Rec: ? <br> Notes: good|Microsoft Authenticator/Evernym Connect.me interop work undertaken by Condatis for NHS; authentication; MIME types and openid:// versus http[s]:// prefix|People working on QR systems for passing URLs|
|Not-so-smart wallets|Kim H Duffy, Darrell O'Donnell, Orie Steele|Rec: Day 3-22K <br> Notes: zero?|Universal Wallet Spec 2020, scope, use-cases for minimum viable wallet|Wallet and/or product designers|
|Minimum Viable Wallet|Eric Welton|Not recorded <br>Notes: Useful |Day 1-5B [temporary link](https://docs.google.com/document/d/1VwCx-NibNfxtmnLqI9e0XN9uL8XREuFhbpPvEv5En0A/edit)|Use case thinking around zero-trust hardware and smartphone-free VCs in civilian hands|People working on smartphone-free use cases|
|Browsers, Privacy & Federation (Cookies, WebID, CHAPI, etc)|Sam Goto (Google, W3C WICG) et al.|Not recorded, [notes](https://docs.google.com/document/d/1nNvIYO6KBSQWLAtL9MjQmCOxstg0pMZ3KTqlj5Wzchg/edit) (also notes + [slides](https://docs.google.com/presentation/d/1xKyrWYQsTtmKle3eHbxYno2KIyrZRLi2luAcLyHZ0Ws/edit#slide=id.p) from prior session) very useful|Proposed WebID tracking system, OIDC, legacy/endangered cookies, and the W3C CHAPI protocol (comparing different ways to enable SSI and/or privacy in-browser)|People working on browser authentication, browser-based protocols, and OIDC|
|SSI in Developing Countries: Product and Usability|Rachel Chang (Kiva) et al.|Day 1-6A <br> Rec: ?? <br> Notes: Very good - [temporary link](https://docs.google.com/document/d/1-SV_24AdKsPaJqwo07A6YfWdHgcHlbIFrtf93a5RxaU/edit)|Biometric authentication and "authorized verified" certification for Sierra Leone use case|[Thoughtful](https://thoughtfulbiometrics.org/
) Biometricists, national-scale/government identity proofing, eKYC researchers|

Trends
* "Low end" of UX - can't or won't use smart phones, shared phones, etc - Realistic groundwork for realworld adoption
    * Eric Welton - "Minimum Viable Device" session
    * Level 1 Support session by André Kudra & Mawaki Chango
    * Ken Ebert & Sam Curren - Custodial Agents - Day 2-12F
        * "Custodial" - Crypto space uses "custodial" for fiduciary/confidential key mgmt (but with export capability)
        * Chris Buchanan (Mitre) - Hardware-based (YubiKey, say) that plugs into a "terminal" that provides UX but with external key mgmt
        * "Custodial" situations (guardianship situations - real-world human-to-human custodianship)
        * Possible terminological solution: "issuer-hosted" custodial agent **IHCA**
        * Kaliya: Jeff Aristy points out *legal* usage of "guardianship" is very specific (fairly international)
            * Kaliya: this happened with "signature" in the 90s!
            * Internet Bar Association - hosting [conference](https://www.techforjustice.org/ibo-summit/) on "justice layer" for internet 
        * Biometric angle? Upcoming [conference](https://thoughtfulbiometrics.org/)
            * Kiva in Sierra Leone - Kiva-hosted custodial wallet has API into national biometric authority DB - people without devices can be authenticated against govt biometrics to open Kiva-hosted wallet on hardware
                * Sam: Fingerprint can only be enrolled at authorized terminal - certifying hardware; authorized verifiers have to be authorized before they can open a kiva wallet (or ping national db)
                * Kaliya: CCI [use case](https://docs.google.com/document/d/1dbWvs1m8uziTsbhUQv_nPofTXAyDSkxI5CZtoo1SlRY/edit?ts=5e85430a#heading=h.l3l52qc46clk) and TNO position [paper](https://fpf.org/wp-content/uploads/2020/10/8-TNO-Bloqzone-We-need-countermeasures-against-SSI-coercion-v3.pdf) to authorize verifiers for Covid against scope creep
                * Sam: Machine-readable governance framework work going this direction as well
* Drop-in attendance - high total numbers but lots of sporadic attendance
    * Gardens underattended
    * too many sessions when through breaks?
    * Zoom literacy rising, too many/long presentations - stronger recommendations next time? too much powerpoint fatigue adding to the zoom fatigue
* qR and interop targets emerging from various spaces
    * Me: qR code/condatis session and 
        * Sam: DIDComm v1 has some QR opinions, and DIDComm v2 has learned some lessons and has some plans for DIDComm v2
    * Stephen Curran: BCGov is bullish on BBS+ for ZKP - We are going to do what we can to direct funds and bounties to making BBS+ uptake faster
        * cryptography is only part of the problem
        * input requested on how to structure 
        * Kaliya: Set a date to discuss in this group?
            * Sam: Yes! inviting a few people 
            * John Walker: +1
            * Stephen: Everyone assumes someone is doing it, and we'd all like to find a way to chip in and speed things up
* Sam: Cross-ledger revocation research
    * One that touches many ongoing DID-Core debates - interop might have a role there
    * There are only a few marginally functional revocation systems - maybe having one huge one in common would be great
    * Stephen: BBS+ might have better uptake if it's got a revocation system attached/built in (that's why Indy was so successful!)
    * Stephen: Proof request/Pres-Exch/Cred-Mani problem space also could be a multiplier - if ZKP for multi-cred presentations is thrown in, BBS+ looks a lot more worthwhile as an upgrade :D
    * 
        

Additional notes
