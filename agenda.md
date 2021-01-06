# Interoperability WG Rolling Agenda & Minutes 

[![hackmd-github-sync-badge](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw/badge)](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw)


[Zoom link](https://bit.ly/wg-interop-zoomlink) | [DIF Website ](https://identity.foundation/interoperability/) | [**Repo & Issues**](https://github.com/decentralized-identity/interoperability/issues) | [Mailing List](https://dif.groups.io/g/interop-wg) | [Reference Shelf](https://www.notion.so/dif/be6763341a014d248f655aea187d7890?v=c9ac48a07f3d411c9a1bea32b55f7e76) | [Meeting recordings](https://docs.google.com/spreadsheets/d/1wgccmMvIImx30qVE9GhRKWWv3vmL2ZyUauuKx3IfRmA/edit#gid=2146749098)

_For this call, you are encouraged to turn your video on. This is a good way to build rapport given we are a large, disparate group experiencing a lot of churn._

_This document is live-edited DURING each call, and stable/authoritative copies live on our github repo under /agenda.md . Please note that we might not notice a pullrequest in time, but you are free to propose agenda items for future meetings via hackmd ._

### "Parking lot" for future/recurring agenda items

<details>
<summary>Topics List</summary>

Meta-topics and Potential quarter-wide or year-long goals:
3. Venn diagram of interop goals, and scopes/definitions of interop (contextual)
    * Don't lose focus on the map model! [link](https://github.com/decentralized-identity/decentralized-identity.github.io/blob/master/assets/crosscommunity-architecture-survey-oct-2020.pdf)
    * Parallelize (and promote) interop work on totally different scopes
    * Proposed Work Item: **Architectural guidelines**: "if your role in the ecosystem includes X, looks at ABC specs and make sure you speak D and F to maximize interoperability (and/or future-compatibility)"
1. Human-centric interop as roadmap and business strategy (+ UX?)
2. Further afield usecases (VC-free, DID-free, human-free, LEI, etc) 
    * Non-human decentralized identity?
6. Interop test suites and harness infrastructure (after March when SVIP/CCG interop sprint ends)
4. Notary models and adoption hacks? (governance?)
5. 

* VCs versus VPs - is habituating individuals to exchanging strong credentials a dark pattern per se? how to keep VPs ephermal and useless to traffic analysis?
    * Revocable anonymity? Court orders?        
    * Adrian's question: do too many VC mental models and specs *assume* VCs going straight from issuer to holder, never issuer to verifier on direct behalf of holder?
* Periodic checkins on the multi-ledger (and possible multi-method!?) Indyverse
* --- **BBS+ FIESTA 2020** --- [**proposed**]
    * December 2nd or 9th?
    * Aries and non-Aries people making a pact to work together
    * C &and; C Work item?
* --- **TEST SUITEAPALOOZA 2020** --- [**F2F? align with SVIP and/or ESSIF?**]
    * Later in December?
    * Status update on SVIP's past and future suite maintenance
    * Aries and/or BCGov test suites
    * Can someone from Danube or IBM show the smoke tests run against driver updates to the universal resolver?
    * Any volunteers have internal compliance/smoke tests they want to show? (A quick video recording would also be great if timezones are brutal!)
* Educational presentations
    * Oliver - [DAF update](https://medium.com/uport/trusted-p2p-messaging-with-dids-didcomm-and-vcs-398f4c3f3cda) ? (VC-focused edition)
    
    * VC Auth versus ZCap-LD (CCG), ACDC TF (& some day spec?) ToIP - 
    * Justin Richer: GNAP 
    * x509 worldwide - Finema, Spherity, Discipl, ...?
    * eIDAS roundtable - Nacho Alamillo, Gataca, Peter Wagner, Erik van Zuuren...?
    * KERI and Certificate Transparency - Dmitry? Sam Smith? Sam Huseby?
    
    * EDV Use Cases v2 - Manu?
    * Cloud Wars and Gaia-X - ...?
    
    * What's the BlueSky of LinkedIn? EuroPass, Affinidi, LER...
    * The Best way to do JWTs - Gabe Cohen?
    
    * MSFT's DID-SIOP (DIDAuth-focused edition) - Tim Cappali? Pam? Daniel Buchner?
    
    
</details>

### Agenda - 27 Jan 2020 - US/APAC time (1400PT) - ID2020 + Josh Mandell & [HealthCards](https://github.com/smart-on-fhir/health-cards) ?

### Agenda - 20 Jan 2020 - US/EU time (0600 PT) - MR?
- [Possibly sans la Kaliya]

### Agenda - 13 Jan 2020 - US/APAC time (1400PT) - ID2020 + CCI?

### [Recording](https://us02web.zoom.us/rec/share/FZyFAm8hfHBtj9CowYYoo1_0F4wf_ThaCJDbDXj12FBiX-0fExehTZLxneQfqIW0.lOBwTUjnbUUvmbuB) - 6 Jan 2020 - US/EU time (0600 PT) - 2020 Year in Review & Roadmapping session; DB?

Agenda/Minutes
* Introductions
    * Adrian Field - PSD2/open banking and SSI interop
* Year in Review
    * Report-out
    * Goals & Roadmap
* Topic Parking Lot Review (See above)
    * Meta-topics/Multi-meeting Topics list added
* Adrian: Human-Centric Protocols and Zero-Trust Architecture
    * Role definitions borrowed from GNAP pre-spec documents
    * [Slides](https://docs.google.com/presentation/d/1ksKal62ZiApX09Nejm4RSqHzHJbgwpu_l2Ho64_ePKU/edit#slide=id.p) & Context from the [CCG mailing list](https://lists.w3.org/Archives/Public/public-did-wg/2021Jan/0005.html)
        * zero-trust terminology taken from [NIST august report](https://csrc.nist.gov/publications/detail/sp/800-207/final)
    * Proposal to the group: 5 roles from GNAP thinking might be useful? Slippage between assumptions baked into terms used to define roles
        * GNAP - breaking changes from OAuth2/OIDC, roles have very different assumptions

### Agenda - 30 Dec 2020 - Happy Holidays everybody!

### Agenda - 23 Dec 2020 - Happy Holidays everybody!

### [Recording](https://us02web.zoom.us/rec/share/UhIV-vk98lnyeVLaHuGq_o_f8NiuQ2uKA3GM1vMtcg6z8T04y9ugnS6vRzbZkuYe.gy0oWuxjwibGyfXM) - 16 Dec 2020 - US/APAC time (1400 PT) - VC deep dive series: A VC-focused Tour of the Authenticator architecture with Tim Capalli (MSFT)

<details>
<summary>Notes</summary>
Intros
- Eric Kuhn (MSFT Id team)
- Tim Capalli (MSFT since March)

Intro
- Authenticator now contains: PW manager and cred wallet, OTP handler, etc
- screenshare and PPT slides (not yet live demo)
- swimlane
- Q&A
    * Nader: other did method roadmap?
    * Eric Kuhn: ION and only passive support for others for now (internal univ resolv)
    * Eric: Pres Exch asks for type by descriptor_map.id
    * Pam: Name all the specs? DID SIOP, VC and DID-core, PresExch, .well-known (being tested today); verification algo and curve? Secp256k1 for now; Wallet only holds JWT (secp);but Authenticator also verifies LD (ED25519)
    * Adrian: Wha't's SIOP adding here? Tim: If you were using a passport or authZ library, it usually has OIDC; this lets you drop SIOP in; Pam: If you're already supporting centralized stuff, this allows you to support VCs
    * Adrian: Consent roadmapped for later? Would you offer an open API, so that those of us that live in the intricate-consent landscape, would be able to use a plugin for more complex consent?
        - Tim: we were thinking more configuration API for setting defaults...
        - Adrian: Azure is all about a massive Configuration JSON object; the longterm goal is for VCs to course along pathways that have ; Eric: Not using CM yet (custom contract for now); once we move to CM, the inputs to the card would be mapped to available info; Adrian: I'm more con
        - Adrian: Should we build a catalog of customizations that can happen in each wallet? Linked secrets or pairwise a required feature of interop? 
            * Tim: Pairwise by default -- should we ever allow op-in?
            * Eric: Authenticator knows to call an API to get a new VC for each new RP
        - Adrian: if we're not going to phone home and we're going to make pairwise the default, how do we break the glass in case of emergencies? Can a court order de-anonymize or trace back a pairwise?
            * Kaliya: Old-school LD VCs, without ZKP, weren't as concerned with total anonymity...
            * Nader: Hey Adrian, the answer to your question of how does blinded subject authentication work in the context of JSON-LD BBS+ is explained in this slide, starting on slide 12
https://docs.google.com/presentation/d/12uZUgNfcMu4-14VocC6DpXbv88Qef1ap-NWdbjh8eM8/edit?usp=sharing

- Open to interop - reach out! working on documentation- reach out!
    

</details>

### [Recording](https://us02web.zoom.us/rec/share/YJSiutQrX4VvI-H9_JZmaXP5tyd7DtqOqoHkTIXIuofCNhb2IFekEZ2K4FHqNco.FvPxN0QFxhlp2mYG) - 9 Dec 2020 - US/EU time (0600 PT) - inteurop series - ESSIF & ESSIF-Lab interop deep dive - Daniel Du Seuil, Oskar van Deventer et al.

* more detailed tour of functional architecture for both projects
* Daniel Du Seuil - A high-level overview of the ESSIF project 
    * Timeline of specifications for different aspects of the project
    * Interop specifications discussion-- how to align with existing API standards?
* Oskar van Deventer - An interop-focused (and open-call-detailed!) status update from the ESSIF-LAB incubator - [SLIDES HERE](https://github.com/decentralized-identity/interoperability/raw/master/assets/guest-slides/20201209-van-Deventer%2C-Oskar__ESSIF-LAB%2BDIF-Interop.pdf)
    * Oskar: how we think about linking it up to ToIP (as an ecosystem, regarding governance, and terminology) - Is Dutch SSI ecosystem or eSSIF-Lab an “ecosystem”? Could eSSIF-Lab hand off their work as input documents to the Ecosystem Foundry?
    * Interop specifications discussion-- how to align with existing API standards?
* Open Q&A

<details>
<summary>Notes</summary>

* Intros
    * Adrian Gropper ([HIE of One](https://hieofone.com/)): Working on Privacy things. 
    * Dr. Susanne Guth-Oriowski, Chief Innovation & Solution Officer of [Spherity](https://www.spherity.com). 

* Daniel: ESSIF
    * Slides
    * *cough cough* millions of euros budgets for contracts for improvements on core services and infra
    * question what kind of ledger - some will be public permissioned. Hyperledger Bezu and Fabric are in use now. We will see other use-cases. EU looking at precommerical procurement and new protocols avaliable. 
    * Question what should the standards groups be doing to be helpful? What we currently do we don't have an official representation in those groups, we might do so going forward. They are active in different working groups (ISO mentioned)public sector we are very affraid to build someting non-standard. We support all these kinds of things we need to be interoperable. It is public sector and needs to serve everyone. A lot of things are being still being evolved, discussed, it is evolving very fast, what are the things that are stable. Next year will be an important year. Are they compatable with emerging systems. EBSI will be interacting transcontinental working with Canada and Australia - there the standards will be more involved. 
     * Question within ESSIF differnet frameworks and use - interoperability provided by the data registries on top. See GATCA doing some good work. EBSI won't be imposing the way we do it on other sectors. 
     * Markus suggest that we could add the ESIF resolver to the universal resolver .Agreed yes.

* Presentation by Oskar 
    * We are using the metaphor of form filling. 
    * We have a bunch of open calls. Business Open calls. 
    * HOw everything works together for interoperability.
    * They are having various companies open sourcing wallet solution (including evernym) In the first business oriented open call  - GATACA they are working on a generic verifier solution. They can use multiple SSI technologies. Generic SSI functionality offered on a commercial Basis. Open in March closes in May. Active in Area of deploma's Main requirements use SSI components. Everything tightly connected together. Scalabe interoperable. Here are a bunch of examples of things we are looking for. Counter measures vs. SSI coersion. It will be very easy to ask for access to your credentials. Looking for technical, legal business solution. Also looking at integration of different types of SSI tech - INdy/Aries is differet then ESIF. Surprise us! things that will be useful for SSI ecosystem. Third and may part - DIF interoperability working group - the whole purpose - we have these innovators building components and work together. Want thriving business SSI ecosystem. ESSIF lab providing funding and support for the commercial SSI implementations. Should work together components being developed within ESSIF-Lab we have some interop project - shouldn't that type of work happening in a broader arena such as DIF interop. Multiple groups ask to join - ESSIF party is small - DIF innterop is bigger. Once we develop these interoperabilty profiles we get to standardization. This is the architecture picture we are using. You probably recognized - focus on higher layers. 
    * Picture shows a universal agent - issuer holder and verifier functionality. We don't like about many wallet solutions they are holder oriented - client-server. When it should be semetrical - if two parties do interactions they want to do mutual verification - (parties going to a website needing to know it is really that company) 
    * Qualified data. 
    * Work in progress - is this picture something we should contribute to DIF/ToIP?  We have lots of sub-grantees. LInks show where to find
    * [DIF member] Evernym is open sourcing their verify.me platform.
    * DIF member] Validated=ID in EBSI/ESSIF will be driving interoperability with the eIDAS-Bridge.
    * Slide: List of busines oriented interope they are all over the map. 
        * How to manage so much...How make something complex like this with 50-60 subgranties - and make it work? 
    * Here is the DIF slide. 
        * We are doing a lot - there is an interoperability effort. 
        * Ecosystem foundry is at ToIP. WE don't have a standing organization and continuity - we want that. 
         * **We don't have a method for interoperability and home for code**. To find what of this work can be done in
* Questions: would you consider having a home in one of the organizations in the ecosystem. 
     
* Question asked about JSON-LD ZKP BBS+ - Daniel its far ahead of where the governments are.  
     
</details>


### [Recording](https://us02web.zoom.us/rec/share/d7YIh26pIJ2jhq2PqFpy0UeoYfJ3GWldVXj6IuXHEKS9gIkcrAlKyAl5fTohhyUb.0H-RADOMVxp94aM3) - 2 Dec 2020 - US/APAC time (1400 PT) - VC deep dive series: Spec map project and BBS+-in-Aries

* Introduction to [Spec Map](https://github.com/manicprogrammer/vc-spec-rel/) with researcher Michael Ruminer, talking about how to maintain it going forward
* BBS+ in Aries overview with Stephen Curran

<details>
<summary>Notes</summary>

* Michael Ruminer
    * Self-education motivation - testing the hypothesis that with the right overview, the VC universe can be grokkable
    * Release page on github repo (already in DIF repo!)
        * plug for .drawio - open-source diagramming tool
    * quick tour of the diagram
        * white boxes - external to decentralized identity community
        * CCG-centric by formation, but looking forward to add more DIF and Hyperledger RFCs
            * Left out SIOP to make it to v1, hehe 
    * Q & A 
        * Adrian: DIDs out of scope? 
            * I didn't 
        * Pamela: What did you miss the most going through this? What would've made your life easier?
            * W3C specs all had pretty good normative and informative sections - the ones that didn't took longer and I deferred some of those
        * Juan: What's next?
            * I drew it from bottom to top, so there's more gaps (intentional and accidental) near the top
        * Adrian: VCs presumed to go to holder in too many of these maps; 
        * Stephan: Kumu? Kaliya and I recommend it, it turns CSVs and excel spreadsheets into navigable graphs
            * it's XML underneath, so I'll have to play with Kumu and see how to best port it in!
        * Pamela: How useful were [our] intro videos? Michael: I just read spec by spec; I'll look at videos more when I add DIF specs!
* Stephen's presentation - Aries Great Transformation
    * Moving Indy's role to "DIDs only"; moving VC to BBS+ to keep all the ZKP features but also comply fully with VC spec
    * First-Step - full support for w3c LD-VCs (but no ZKP or revocation)
        * SICPA's --> LD-proof/sig support in Acapy (manual sign/verify, not using Aries libraries) - W3C compliant but no ZKP
        * AriesGo supports RFC 36/37 (or 453/454) - rebuilding for other agent framework in Py and .NET
        * Credential storage in Aries "Askar"? Searchable/discoverable proof request?
            * Indy has "wallet query language" which search against proof request; how to replace?
    * Second-Step - finish BBS+ enough to spec out and roadmap Aries work in multiple languages
    * Third Step - Presentation Exhange 
        * DIF's Pres Exch versus SVIP version (not yet thoroughly reviewed against featureset of Indy wallet req and/or BBS+)
            * DIF Pres Exch (allows multiple credentials into one VP, which helps BBS+ proof/verify style)
    * Other topics
        * Storage searching for credentials 
        * Support in wallets and other mobile apps
        * Can anoncreds and BBS+ be supported at same time? backwards compatibility and cross-verification?
    * Q & A
        * Pam: Discovery in the wallet not currently in-scope for PE-- would you put it in scope if you could?
            * Stephen: I don't mind it being out of scope, because that gets into wallet/storage design 
            * Stephen: Early days of Indy, searching was important in OrgBook's 7million VCs-- 
    * DID-Only Indy
        * Draft DID:Indy [spec](https://hackmd.io/@icZC4epNSnqBbYE0hJYseA/S1eUS2BQw) puts non-DID objects(schema, revocation registries, etc) into did docs and refers to them as URIs ; (BBS+ don't need the schema and credDef anyways); RevReg will stay on-ledger
        * Adrian: having trouble reconciling DIDs, BBS+, and confidential storage - it seems to me that adding stuff to the DID-core might be a bad idea? I like DIDs as control structures only :D; why not lean on some of the stuff being pushed in the confidential storage group ? Might the three (DID control structure, storage, and selective disclosure) be orthogonal by design?
            * Stephen: Using DID as indirection layer makes cross-ledger interactions much simpler and 

</details>



### [Recording](https://us02web.zoom.us/rec/share/n3jWlu5E2vkS5llHMWPIf4PRRhmur5s1eDwJ8oxp0GgVUkMr0-LGTqtW3AtvzWwz.s4KMZtub051SiE4P) - 25 Nov 2020 - US/EU time (0600 PT) - inteurop series - ESSIF-LAB and Odyssey Momentum

Report-out about Odyssey Momentum (30min) with Rieks Joosten ([TNO](https://www.tno.nl/en/focus-areas/information-communication-technology/roadmaps/data-sharing/ssi/))
* SSI track and other tracks (like Conscious Cities)
    * DIF members [Gimly](https://www.gimly.io/blog) won the KLM supply chain track with a [VC solution](https://www.linkedin.com/feed/update/urn:li:activity:6734757528330088448/) based on [Tangem NFC](https://gimly.io/tangem-by-gimly) cards !
* [SSI Infrastructure Gateway](https://github.com/OdysseyMomentum/ssi-service-backend) by [TNO](https://www.tno.nl/en/focus-areas/information-communication-technology/roadmaps/data-sharing/ssi/) (includes IRMA, Jolocom, eSatus) 
    * Source is open; live APIs running on essif-lab GRNet & at Odyssey Github & DigiCampus 
    * API where issuers can send their credential-payloads to, and where verifiers can request to obtain credentials containing such payloads
    * Currently supports: IRMA, Jolocom, eSatus
    * Soon to support: IDA (Rabobank ULA)
    * the 'SSI-gateway' as an SSI infrastructure adopter (story was developed at the Odyssey!)
* Rabobank - [Universal Ledger Agent](https://github.com/rabobank-blockchain/universal-ledger-agent) (outlined at [RWOT8](https://github.com/WebOfTrustInfo/rwot8-barcelona/blob/master/topics-and-advance-readings/universal-ledger-agent.md))

ESSIF-LAB (30min): 

* high-level overview of TNO/eSSIF-Lab overall SSI vision
    * Rieks: Work on Terminology and ["documentation interop"](https://essif-lab.pages.grnet.gr/framework/docs/terms/pattern-party-actor-action)
    * In particular, the "Local assurance communities" idea from CCI
    * Broader category of decentralized governance (the 'local assurance community'-concept as initiated with CCI → whitepaper with Drummond?)
    * ideas about non-tech interop topics (specifically what we have come to call 'documentation interop')
    * Quick tour of published conceptual materials 

<details>
<summary>Notes</summary>
* contact information for the speakers here!
    * rieks.joosten at   tno.nl
    * chris.lee at  mydata.org
    * Jacob.boersma   at dutchblockchaincoalition.org
    * caspar  at  gimly.io

</details>

### [Recording](https://us02web.zoom.us/rec/share/-Xk7R0pgZBHzNjfOMen30xnRZssW6WQppNvQH9KDNwgou8qoRhR8vsKf0uiopc4.e0HwFp387JmwS7M_) - 18 Nov 2020 - US/APAC time (1400 PT) 

#### LD/BBS+ Education: Walkthroughs and Mental Models/Reports from the Field

Tobias - "BBS+ 201"
- Tobias will be overviewing and answering questions about his IIW [presentation](https://www.youtube.com/watch?v=AVnCVzW0rkI)
- Additional recommended reading:
    - Tobias' colleague [Nader Helmy](https://medium.com/mattr-global/jwt-vs-linked-data-proofs-comparing-vc-assertion-formats-a2a4e6671d57): is BBS+ really a "credential format" or is it a combination of credential handling and presenting methods? Is it a security model? Does the "credential format" mental model underestimate or misframe the kinds of changes needed to fully "go BBS+"?
    - The [paper](https://github.com/WebOfTrustInfo/rwot9-prague/blob/master/final-documents/alice-attempts-abuse-verifiable-credential.md) on Sybil-proofing VC exchange referenced at minute 18.30 of Tobias' video from RWoT9, by WG co-chair Pam Dingle, Daniel Hardman, researcher Sven Hammon, et al.
- Discussion questions
    1. To what degree is this a VC "format", and to what degree is it a VP upgrade?
    1. What standards need to change/upgrade for these additional values ("proofValue", "subjectAuthenticationMethod", etc.) to be widespread? Consequences for core VC spec, LD-Proof spec, etc?
    1. How are domains and linked secrets related, in the Aries universe? Are systems outside of the Aries world using domain-based indirection?
    1. How big is the "lift" (or level of effort) for Aries systems post-[RFC 47](https://github.com/hyperledger/aries-rfcs/blob/master/concepts/0047-json-ld-compatibility/README.md)?  How big for non-Aries systems already using LD-VCs today?  How big for JWT-native systems? 
    1. [If time allows] Could we talk more about "Just-in-time Issuance" and "Trusted Witness" solutions?

### [Recording](https://us02web.zoom.us/rec/share/gK2c_j1egVfEcOLCLENZoocsp7R5K5Ph5MaEQBXjLz_DEYSUkUQW1awd_2LqU784.wvUY74TK_KfAZqbb) - 11 Nov 2020 - US/APAC time (0600 PST)

#### Side-bar: Human-Centric Approaches & Updates

Discussion
- Presentation: Domains of Identity and human-centric design/UX as corrective for market-driven interop
- Other ongoing/current events
    - Adrian: Update on Gold-Button Interop
    - Kaliya: Take-aways from DID-Core TPAC
    - "Now what?": Open discussion from last week's sessions (available on youtube for those who missed it)
    - Recap from last week: videos of Orie's presentation and Kim's are up!
    - Sneak preview of next week: homework! a [video](https://www.youtube.com/watch?v=AVnCVzW0rkI) and an [article](https://medium.com/mattr-global/jwt-vs-linked-data-proofs-comparing-vc-assertion-formats-a2a4e6671d57)

Links from the discussion today
- MyData Gold-Button demo/mockup [video](https://www.youtube.com/watch?v=DrFM9-fFiE0) by Chris Lee
- GNAP protocol mentioned by Adrian:
    - 119 page draft spec at [IETF](https://www.ietf.org/archive/id/draft-ietf-gnap-core-protocol-01.html)
    - Justin Richter's GNAP presentation from the [highly technical] SDS [working group regular meeting](https://lists.identity.foundation/g/sds-wg/wiki/24092)
    - His GNAP presentation at yesterday's meeting of [W3C-CCG](https://github.com/w3c-ccg/meetings) (transcript/rec not yet live on github i believe)

### [Recording](https://us02web.zoom.us/rec/share/KjUmnvS2rrfZ_WsPSggzxZP3s-OP36zq3IdbkoMndK0a96Kid81ucsIt-iRSnvME.sNDt6isH9BOJMmnI) - 4 Nov 2020 - US/APAC time (1400 PST) 

#### LD/BBS+ Education Pt. 1: Walkthroughs and Mental Models/Reports from the Field
- Guest Presenter #1: Orie Steele- [The What and Why of the DIF general-purpose Document-Loader](https://youtu.be/-yUbMDft5O0)
- Guest Presenter #2: Kim H Duffy - [W3C-CCG Edu Creds Task Force & Tooling/Sandbox Intro](https://youtu.be/AEb02JGCArM) (Overview of CCG LD tooling)

Minutes 
* Opening discussion
* Document-Loader introduction by Orie (Transmute)
    * Intro: What do DIDs and VCs do, ideally?
        * Definitions: "resolution" (in DID-core) and "representations" (LD versus vanilla-JSON versus...)
        * DID Doc versus OIDC federation of centralized IDs
        * Resolution mechanics vary significantly by representation; most methods have one "native" rep that skews its resolution mental model
        * In LD-land, document-loader is the norm (essential to all LD-centric methods' resolution mechanisms)
    * Document-Loader as recursive/general-purpose derefencer
        * JSON-LD core spec models/specs this
    * Sidebar q: novice-friendlier explanation of representations-- does it matter to privacy people? to security people?
        * Orie: Each representation is governed by a spec (JSON RFCs, for ex); it has limitations, allowances, features, assumptions, more or less built-in data types; 
        * DID-Core takes LD dereferencing and extends it to a whole identifier system; extending it to vanilla JSON, XML, CBOR, etc gets complicated and implies "LD problems," i.e. how to do resolution and resolving
        * [Mental note: return to Adrian's question about security and privacy issues inherent in resolution/dereferencing]
    * Document-loading - a particular way of resolving data; DID-core has its origins in this kind of resolution
        * many interoperability problems at the PKI layer and at the assertion-format layer arise from "gaps" between representations or between specs written with different assumptions in mind
        * codifying did-core dereferencing logic (going from string --> did doc) got written by uPort team and has been foundational for many non-LD systems; JWT proof formats similarly had to be built by equivalence;
        * more general d-l logic:
            * did resolution: string --> doc
            * schema.org
            * Azure IoT and other contexts that identify entities with strings --> also D-L 
* Kim: Overview of [VC-Edu group](w3c-ccg.github.io/vc-ed) at CCG
    * Major work items:
        * Modeling Ed Creds - usecase driven (ins and outs, design principles, lessons learned)
        * Credential Finder - LD-powered discovery engine
    * Not an SDO, but wide participation and experience: PESC IMS-Global and other international bodies (mostly EU)
        * "unblock and accelerate our pilots"
        * legal signature requirements (CAs, x509, regional/national specifics about eSigs)
        * XML and PDFs = 
    * DCC Credential [Playground](digitalcredentials.github.io/playground) - sandbox for LD VCs and 
        * /sign-and-verify/ tools = 
        * /credgen/ = template tool (generates LD VC templates using {{moustached pattern-matching}})
    * Other useful links
        * Mattr's BBS+ LD proofs [spec](https://github.com/w3c-ccg/ldp-bbs2020)
        * LD VCs standardized on LD-centric CCG [exch protocol](https://github.com/w3c-ccg/vc-http-api)
    * Q&A
        * Keith (Workday) - We're working on a pilot - is anyone else using the LER wrapper?
            * Kim: Interop test suites (orig. SVIP, now CCG) - conformance test suites 
        * Pam: What would you like this group to do?
            * Kim: context: ACE blockchain challenge and wallets; DIF would be a good location for practical ongoing discussion of logistics for those kinds of venues
* Future agenda topic - Power in the standards process - separation of concerns as a mantra for protecting against coupling of ontology and platform mechanics?

### [Recording](https://us02web.zoom.us/rec/share/bCUbntNNU3sMC6yzhANZSIitaE5znl00jrgzhOO1G0EcjeedS6aMzRb7WVcZtQg7.J3C0GXqJTy2pUowi) - 28 Oct 2020 - US/APAC time (600 PST) 

Agenda
* Last call for nits on Transcommunity map before it goes to the graphic design pros
* Crowd-sourcing an #IIW31 *Interop-relevant* Reading List (feel free to propose before or after the meeting via hackmd or github) - working draft [here](https://github.com/decentralized-identity/interoperability/blob/master/assets/iiw31guide.md) - feel free to propose additional rows async or on Wednesday's call

Minutes
* Announcements
    * SDS meeting this week will feature Justin Richer talking about GNAP (formerly OAuth.XYZ) for people researching cutting-edge authorization/authentication 
    * [infosphere.net](https://identosphere.net/#projects) (planet identity reboot) - digest of blogs and feeds relevant to this work
* Took notes at the bottom of this open hackmd [doc]([here](https://github.com/decentralized-identity/interoperability/blob/master/assets/iiw31guide.md))


### [Recording](https://us02web.zoom.us/rec/share/MwDSAOFT5zdylbrFOZZ_1af9wGjuZ4kAouVj6qIweupOOSww_aQFiV7T6QpuB8s6.lumWmYFiy9O7q2Li) - 21 Oct 2020 - US/APAC time (1400 PST) **MEETING CANCELED FOR IIW**


* Notes for IIW31
    * Link to madlib/questionnaire #2 posted in ADVANCE and announced IN OPENING CIRCLE (drop hackmd link!)
    * Possible other presentations or sessions:
    * DIF Interoperability WG read-out and requirements gathering??
        * Agenda:
            * readout, deliverable show-and-tell
            * educational demands and gaps
            * Interop targets discussion


* Link tree (moved to repo [readme](https://github.com/decentralized-identity/interoperability/))

### [Recording](https://us02web.zoom.us/rec/share/-Nl0lzhPZkhM6gd0DCvffS_J9DFXHWvyBG1ZdNWSZCN2KAhXgobWsLmOxupjxb5B.R9XLwt5dTpwO2U5i) - 14 Oct 2020 - US/APAC time (600 PST) 


* Crowd-edit First draft of the wallet grid? (10min)
* Interoperability **targets**: what would you like to be working towards? what would you work towards if enough other people are working towards as well? 
    * *Can we formulate a google form questionnaire for distribution at IIW?*
* Quick discussion: DID Controllers? 

<details><summary>Minutes:</summary>

Attendees:
* Juan Caballero (Co-chair)
* Pamela Dingle (Co-chair)
* Kaliya Young (Co-chair)
* Sam Curren
* Adrian Gropper
* Balazs Nemethi
* John Walker
* Adrian Field
* Kenroy
* Martin Riedel
* Philip Kaiser
* Sam Rookard
* Simone Ravaioli
* Tim Cappalli
* Harm Jam Arendshorst




* Introductions and Hellos
* Updates and Announcements
    * IIW - session is planned for the interoperability group, will let group know when time/breakout is assigned
    
* Interoperability targets
    * Education/target chicken and egg
    * Break down big targets like "BBS+" into smaller pieces, like "how to handle/verify LD VCs", "how to use the linter and the document-loader", "what else needs to be done before BBS+"
    * Adrian: "authorization" is big here
    * Adrian: wallet-centric assumption in VC centrality
    * BBS+ - informal poll showed support for learning more
    * For BBS+: What are the one-meeting topics? 
        1. Issuance and **data model** of a BBS+ VC (WHO LEADS THIS? Tobias? --note time zones--] ) Oct 28?
        2. How to initiate exchange (and how it relates to pres exch?) - 
        3. LD Pres Req - how is it diff, relying on LD **framing**?
        4. BBS+ Revocation - issuance and mgmt of revocation
    * Presentation Exchange (known as proof requests in Aries)   
    * GNAP and Scoped Authz 
 * Update on [Wallet Matrix](https://hackmd.io/t1cotiReTXCnkpDG8k2tVA)

</details>

### [Recording](https://us02web.zoom.us/rec/share/NHcELUXRMZHdF1c2b_GniKo-wW2e_NxiV1RkyhQowhjKp9v8MMpcodhbyok0im6X.RVZpVK6BiFgIirNu) - 7 Oct 2020 - US/APAC time (1400 PST) 

1. Updates and Announcements

* Please sign up for the [mailing list](mailto:interop-wg+subscribe@lists.identity.foundation) if you haven't already!

1. Rough-draft of Wallet Credential Format [Matrix](https://hackmd.io/@SBZlkBsMSQqomxsAiSgoNg/rkBnu3ELP/edit) - feel free to fill in YOUR OWN rows before the meeting!
3. Results of [questionnaire](https://forms.gle/suZpoM4TH11wNneD8) - Skillshare/technical matchmaking proposal
4. IIW planning?

<details><summary>Minutes:</summary>

Attendees:
* Juan Caballero (Co-chair)
* Pamela Dingle (Co-chair)
* Kaliya Young (Co-chair)
* Hakan Yildiz (TU Berlin)
* Adrian Gropper (HIE of One)
* Tim Capalli
* Carlos Rodrigues
* Sam Curren
* Stephen Curran
* Matt McKinney

* Introductions and Hellos
* Updates and Announcements

</details>
     
### [Recording](https://us02web.zoom.us/rec/share/slysribRqId5nAnV1SIUUhrp3dy6ROjGT7J2M059sYjjrOxEadl8rF13vciL8DL7.mhRGHB4ah4Lw7cdT) - 30 Sep 2020 - US/EU time (0600 PST)

1. Introductions and Hellos
1. Updates and Announcements

* Meeting on DHS SVIP UX contest during the DIF Product Manager's (also non-IPR, open) [meeting](https://lists.w3.org/Archives/Public/public-credentials/2020Sep/0088.html)

3. Final round of edits on [map](https://whimsical.com/CUhk3dT4RUZvGa4Lt7rNvD) (**5min**)
4. Chairs will present draft [questionnaire](https://forms.gle/suZpoM4TH11wNneD8) (**20-25min** to annotate, discuss, and fill out on the call; followup over email list for non-attendees and recording listeners)
5. Roadmapping - following on last week's discussion (see below), we'll hone in on wallet projects for the short term.  how to define wallet interop with issuers and verifiers? what's the low-hanging fruit that's helpful to the wallet alignment process (and "wars") on the horizon?


<details><summary>Minutes:</summary>

* intros and updates
* final tweaks on map (mostly renaming layers and splitting recovery/portability bucket into two buckets; also some tweaks around )
* filling out awareness survey & fine-tuning it for the rest of the hour

</details>

### [Recording](https://us02web.zoom.us/rec/share/rd85JFPkSpGy7XyXT6fRb_GVJ8RN7EGwNKkmDAoKZiFfr67V9adGvHGuYb_26wlM.qz-Q15k5i1shYEtd) - 23 Sep 2020 - US/APAC time (1400 PST)

1. Updates and Announcements
    
    * New publication: [major spec and adjacent org quick reference](https://github.com/decentralized-identity/decentralized-identity.github.io/raw/master/assets/map-of-adjacent-orgs-and-specs--sept-2020--one-sided.pdf) guide ("light" version of our mapping!)

3. Final round of edits on [map](https://whimsical.com/CUhk3dT4RUZvGa4Lt7rNvD) (**10min**) - punted to next week due to Zoom room chaos
4. Present draft [questionnaire](https://forms.gle/suZpoM4TH11wNneD8) (**10-15min** to draft or do? followup over email list for non-attendees and recording listeners)
5. Roadmapping - The chairs have suggestions but open to lobbying and dissent if the group has other ideas

  
 | Title | Explanation | Target Deliverable(s)|
 |--|--|--|
 | Test Suite Jamboree | Apples-to-apples comparison of available test suites and how we could leverage them here | If possible: matrix showing equivalent suite results across stacks |
 | Pres-Exch/Aries alignment| The DIF Presentation Exchange spec has flows and assumptions that are hard to reconcile with Aries flows and assumptions. | 1. minor pull requests against both specs 2. implementation guidance that would make Aries wallets easier to comply with Pres Exch and vice versa. 3. a great deep-dive blog post for the DIF Medium :D | 
 | Wallet Method Support |Wallet can resolve a DID *and* know how to verify the VCs it can sign? | * Matrix of methods per Wallet for generated and resolved DIDs * DID Resolution implementation guidelines for wallet designers/implementers? I.e., how do you get from a method spec to supporting those methods |
 | Wallet Credential Format Support | Which formats of credentials can wallets parse and validate? | Matrix of supported credential formats |
|Human-centric interoperability|See Adrian's MyData event on [Gold Button](https://docs.google.com/document/d/1kZ7_Skcn4zb3zOfEu7XZDrYAmLR1T_pbBoSk8AEfrSg/edit) and [https://github.com/w3c/did-use-cases/issues/101](https://github.com/w3c/did-use-cases/issues/101)|Profile? A map similar to the whimsical|
|Revocation comparison overview| Status Method Registry at W3C is a little under-updated | Guidance on updating <-- and tentative or pre-spec draft of cross-community revocation-check spec [*Note: ZKP revocation versus "herd privacy" solutions are not equivalent and such a spec might need to differentiate schools of privacy engineering or allow implementers to be opinionated about this distinction per use case!*] |
|DID Method / KeyType Matrix  (Dmitri's idea)| Make a survey of implemented DID Methods and list cryptographic key types that they support | A table in github or a spreadsheet/CSV file|
|| | |
|< your idea here >| | |


<details><summary>Minutes:</summary>

Attendees:
* Juan Caballero (Co-chair)
* Pamela Dingle (Co-chair)
* Kaliya Young (Co-chair)
* Adrian Gropper (HIE of One)
* Hakan Yildiz (TU Berlin)
* Marty Reed (RANDA)
* Matt McKinney (ArcBlock)
* John Walker (SemanticClarity)


1. Introductions and Hellos
1. Updates and Announcements
1. 

</details>
       
### [Recording](https://us02web.zoom.us/rec/share/5yz0MCbJczXzr33-6xeK5xRlXaDSef6zZfV2mfVIrA-SiSXiXU3Z5pD3cmhT_P3s.RLW8DtfYZYZ68Ono) - 16 Sep 2020 - US/EU time (0600 PST)

1. Updates and Announcements
2. Confirm Liaison list
4. Finish Whimsical (20min max, queued)

    * Martin's new version - intra-layer protocols
    * Rouven was right-- "20 min max" and "finish" should not both have been on this item!
    * Reconciling and bringing back next week
        * authn/z and recovery/portability issue

6. Questionnaire based on whimsical?
    * moved to next week

8. Roadmapping part 1; proposed *multiweek/long-term* work items (bring your own! add your own to the table following our precedent!)
    * Who knows the relevant test suites?
    * Chart of options moved to next week

Question was raised about meaning of the word wallet and the prior work by the [DIF Glossary group](https://medium.com/decentralized-identity/finding-the-bell-curve-of-meaning-61a1d22b7bdd) was linked to. 

<details><summary>Minutes:</summary>

Attendees:
* Juan Caballero (Co-chair)
* Pamela Dingle (Co-chair)
* Kaliya Young (Co-chair)
* Chris Lee (MyData Korea)
* Martin Riedel (ConsenSys)
* Hakan Yildiz (TU Berlin)
* Rouven Heck (ConsenSys)
* sankarshan (Dhiway)
* Matthew Hailstone (BYU)
* Scott Malley (Sphereon)
* Simone Ravaioli (Digitary)
* Adrian Gropper (HIE of One)
* Stephen Curran (Cloud Compass Computing Inc.)
* Sam Rookard (Accenture)
* Catherine Nabbala
* Denis Popov
* Kristina Yasuda
* Marnix
* Ralf Knobloch
* Sankarshan
* Scott Malley
* Simone Ravaioli
* Stas Demchuck
* Stephen Curran
* Matt McKinney


1. Introductions and Hellos
1. Updates and Announcements
1. Liaison list {from collective memory!}

    * **Solid Community - Dmitri?**
    * MyData - Chris Lee (MyData Korea)
    * **A New Governance - ??**
    * NIST Big Data Public WG -  
    * Specific IEEE Standards groups
        * CNCF Security SIG 
        * ILR project - Simone Ravaioli
    * Trust-over-IP Foundation - Ajay Jadhav (with support from Sankarshan Mukhopadhyay)
    * IETF - OAuth WG in partic
    * OIDF - Kristina Yasuda
    * INATBA - Joachim Lohkamp
    * T3 Innovation Network
        * *Note: (ongoing thread to sign a liaison agreement)*
    * Europass - (acting Liaison Simone Ravaioli, until further notice)
    * GLEIF - Juan will reach out this week
    * W3C - acting liaison Orie until further notice (?)
    * PKI/eIDAS orgs - Juan is reaching out this week :D
        * **EBSI/ESSIF - ?**
    * ISO - ?
        * *Note: ToIP has a relationship with the Blockchain group, might be worth asking if a direct or indirect contact would be of interest or at least an email address?*
    * Aries - Sam Curren

</details>

### [Recording](https://us02web.zoom.us/rec/share/I7wkWou9zNSDE6SjFIszQeWN5elHAmwU_hz3DLtlImEGIChyDOSST9XN-x9HNTKS.4WFt4LMRBOfQ-2QY) - 9 Sep 2020 - US/APAC time (1400 PST)

0. Introductions and Hellos
2. Updates and Announcements
    * IIW31 earlybird tickets end today!
    * Shout-out to Adrian's thread on the [mailinglist](https://dif.groups.io/g/interop-wg/topics) about human-centric interop and the UX work-- we promise we'll get back to this!  It's deferred (see "future topics" at top of this running agenda), but it's definitely not tabled. See also https://github.com/w3c/did-use-cases/issues/101
        * In the meantime, interested parties are welcome to join the DIF Product Managers' **non-IPR-protected** [community of practice](https://dif.groups.io/g/id-productmanagers), which is currently in a multi-week discussion of human-centric UX thinking around SSI onboarding processes.
    * Thread on DECO project out of Cornell on [CCG](https://lists.w3.org/Archives/Public/public-credentials/2020Sep/0005.html) - may be worth addressing or socializing in this group if there is interest/demand
    * Deputize queue-masters from the back seat: see something, say something!
1. Refactor mapping exercise into layers
    * optional homework: leave comments on the [whimsical](https://whimsical.com/VVRMbTi9bPsCqagmRVNGvm), or fork it and make your own variants to compare/contrast next week or OOB? Whimsical instructions [here](https://www.notion.so/dif/Procedural-Notes-github-etc-d31f543e8a94441ebeb1550e671ff195)
    * [Martin and Nader might present variants?]
    * Unqueued discussion to follow
    * Parking lot for assumptions different in other use cases?
        * Holder-not-subject
        * nonhuman subjects
        * etc etc
3. [IF time allows] Draft questionnaire based on map (proposed- pending group interest)?
4. anyone want to give a 5min overview of the Decentralization Rubric (early version [here](https://github.com/WebOfTrustInfo/rwot9-prague/blob/master/draft-documents/decentralized-did-rubric.md#15governance-openness), most recent version [here](https://docs.google.com/document/d/1rYdWiwawWmLOWtHRvT0GzYcdewW_OS9M2mAkENLFdtY/
))?
    
<details>
<summary>Minutes</summary>

Attendees
* Juan Caballero (Co-chair)
* Pamela Dingle (Co-chair)
* Kaliya Young (Co-chair)
* Sam Curren (DIDComm/Aries)
* Adrian Gropper
* Orie Steele
* Hakan Yildiz
* Brett McDowell (Hedera Hashgraph)
* Taylor Kendal 
* Carlos Rodrigues (Bloom Protocol)
* Marty Reed
* Delia AC
* John Walker
* Martin Riedel
* Wayne Chang
* Yang Lu
* Tom Danner

Minutes:
* Introductions and Hellos
   * Brett McDowell - Hedera Hashgraph
   * Taylor Kendal - Learning Economy Fndn
* Mapping Exercise  
    * Pam Dingle talking about the slices of the stack and naming 
    * there are exchange of verifiable credentials as one main use case and decentralized Applications "DApps" as another one and asking people to think about how this set of use-cases
    * From chat:
        * Brent would like Hedera's [method listed too](https://www.hedera.com/blog/hedera-hashgraph-joins-world-wide-web-consortium-w3c-new-did-method-published-by-w3c-credentials-community-group#:~:text=The%20Hedera%20DID%20Method%20leverages,to%20the%20Decentralized%20Identity%20model).
        * Orie suggested that the The algorithm bucket is lacking… better to link to
            * https://www.iana.org/assignments/jose/jose.xhtml#web-signature-encryption-algorithms
            * https://w3c-ccg.github.io/ld-cryptosuite-registry/ 
        * DIDComm = SOAP 2.0: I like soap, its a message format, that is transport agnostic, and supports routing, and other sub specs :) … sorta like did comm… but sadly soap is xml  focused…. didcomm is currently JSON + DID focused… did comm does a not of stuff, but its mostly about a message format that works with dids.
        * that's a pretty good summary.
        * Im sorry I know being compared to soap is triggering… but FWIW, I loved Visual Basic and SOAP and WSDL… some of the first coding I ever did. 
        * AuthN is very different from AuthZ.  But then again, I'm not sure what the goal of this inventory is.  Do we need to differentiate them?  What's the end game here?
        * Tom: D So if you look at this from the perspective of a resource server serving up health data about a patient, you can use did auth to prove the identity of an entity seeking patient data.  You use SIOP to communicate the fact that there’s a valid credential that AUTHORIZES that entity to access  the particular patient data, as example. 
        * Orie: Authorizations mostly go in the http header… mostly… 
        * Brett: After you are authenticated (AuthN), then you get authorized to access certain resources (AuthZ)
        *  Sam: not necessarily with OCAP ZCAP. you can have AuthZ with those, but no authentication. 
        *  Orie: Yep, capabilities sole existence is to avoid authN… https://en.wikipedia.org/wiki/Confused_deputy_problem 
        * Taylor: Curated Edu pilots list - https://lerhub.org/s/curators/specs-0/ZT3McEDpgKayCXyqc-0

</details>

### [Recording](https://us02web.zoom.us/rec/share/eVXH7VDDRD_gCgNmG77_HNbeggD6-QXUq7AHsar976yW67NCMo8IsiIiJPf5H3zk.EYEuZyrL5GLwBvIE) - 2 Sep 2020 - US/EU time (0600 PST)

0. Updates and Announcements
    * Indy Interop-a-thon rages on, and many video recordings are already live on the HL Aries Confluence [page](https://wiki.hyperledger.org/display/II/Agenda). Thanks to Linux Foundation for the storage and the infrastructure! Notes from each session are in the [qiqochat site](https://indy-interop.qiqochat.com/) for now, but will be moved to Aries Confluence soon.
   * [#IIW31](https://internetidentityworkshop.com/) earlybird tickets close soon - Oct 20-22 (Tu-Th)
4. Begin Mapping questionnaire discussion or ideation? Work item for chairs?
6. Continue Mapping review and discussion

<details>
<summary>Minutes</summary>
   * Self-Introductions
       * Martin Riedel (ConsenSys R&D Eng)
       * Denis Popov (Affinity, Eng Team) - here for same!
       * Stas Demchuk (Affinity, Eng Lead) - looking forward to scaling globally with the help of this group
    * Pam: could the questionnaire be a MadLibs-style fill-in-the-blank paragraph? 
        * Juan: Rename DID-Doc Storage? because DID-Docs are one-time/ephemeral, what's being stored is Resolution Metadata/data
        * Martin: layering might be a little easier to understand if it were protocol and app layer rather than DID and VC; **PRIMITIVES** off to one side (libraries or tools that appear throughout)
        * Adrian: Layers metaphor inherited from narrow waist (TCP/IP) theory and classic internet standards (link to KERI slide?); is narrow waist pertinent? worth keeping in mind?
            * KERI slide [deck](https://github.com/SmithSamuelM/Papers/blob/master/presentations/KERI2_Overview.web.pdf) slides 8-13ish
            * Juan: Debate as to which layer/bucket is the narrowest waist
            * Adrian: But if we knew that, we'd have a universal/shared understanding/definition of interop and big picture! 
        * Adrian: My opinion is that any waist is a human-readable/market-legible badge of standards-driven interoperability ; I call it a "gold button" to hide the DID/handshake nittygritty
            * Kaliya: let's not conflate technical and human-readable answers to the question!
        * Pamela: Are DIDs themselves one waist or interoperable layer?
            * Adrian: Authentication and Authorization functions of DIDs are a waist
        * Pam: I think VCs are a second waist/neck/whatever; We need a trust layer to perform trusted/verifiable operations, or else no one care about DIDs
            * Rouven: Standardization of a payload; Timothy Ruff's "container" [article](https://medium.com/@rufftimo/verifiable-credentials-arent-credentials-they-re-containers-fab5b3ae5c0) comes to mind
        * Adrian: I think we are quite far away from standardization at the DID layer-- Joe Andreiu, Sam Smith, and other core people are still debating VERY fundamental stuff at this late date in the [DID-core group](https://github.com/w3c/did-core/issues/)...
        * Rouven: Goals might be a helpful orthogonal or supplemental question: what usecases or features make all this worthwhile? What is the payoff motivating choices within buckets.
        * Scott Malley: Devil's advocate-- doesn't "why" risk going out of scope? Taken far enough, this is not an interop question (e.g. advising on choice of DID Methods, assessing did methods according to the rubric)

    4. Parking Lot
        *  Adrian: Have we failed if normal people have to know what a DID is?
        *  Rouven: What motivates design choices? Can these be linked to tradeoffs or decisions WITHIN this map? 
            *  **Maybe the madlib/questionnaire should have a `BECAUSE...` entry for each other entry?**
        *  Adrian: I'm bored, can we spend the same amount of time on a human-centric mapping? [**proposed work item**]

</details>

### [Recording](https://us02web.zoom.us/rec/share/1MhsM6OzrlNLY53GyG3ZV6MODKXHeaa81HAd8vcIzB3NP5fG7S_MWJmMEvSVNNtm) - 26 Aug 2020 - afternoon time (1400 PST)



* Announcements
    * Juan sends his regrets, he'll be on vacation!
    * MyData panels relevant to interop? [Form](https://online2020.mydata.org/cfp-form/)
    * Time set - 1400, revisit in 10 weeks?
    * Sovrin Interop-a-thon next week - Any messages or requests to send via liaisons? (5-10min) 
    * Full, live schedule [here](https://wiki.hyperledger.org/display/II/Agenda)
    * Anyone on the fence about signing up to lead a session that would like a less-Indy-native partner for it?
    * Does this group have any interop-furthering requests for the session, "**Other things we need in Indy**"?
* Stack-Mapping Exercise (rest of time?)


<details>
<summary>Minutes</summary>

Attendees
    * Pam Dingle
    * Kaliya Identity Women
    * Markus Sabadello
    * Adrian Gropper
    * Bart Cant
    * Brent Zundel
    * Jonathan holt ( TranSendX )
    * Carlos Rodrigues (Bloom)
    * H AC
    * John Walker
    * Marty Reed
    * Orie Steele
    * Sam Curren
    * Stephen Curran
    * Tim Cappalli
    * Yang Lu

Stack-Mapping Exercise (rest of time?)

    * No strong arguers for MyData panel representation
        * Adrian: in process of putting together a proposal for an interop "badge" 
        * Sustainable Self-Sovereign Agents program [proposal](https://docs.google.com/document/d/1kZ7_Skcn4zb3zOfEu7XZDrYAmLR1T_pbBoSk8AEfrSg/edit)
    * Alternation of meeting time:
        * Strong attendance, but nobody admitted to being from AsiaPac
    * Welcome to 
        * Marty from Randa solutions!
        * Jonathan Holt
        * John Walker
    * Indy Interop-a-thon
        * Everyone is welcome - but focus is on Indy topics
        * Actions: Find somebody to add this to the DIF calendar!
        * https://wiki.hyperledger.org/pages/viewpage.action?pageId=36734079
            * Recommended: 
            * Session on the test harness
            * KERI session will require homework - this is not an intro!
        * Good primer vid:  
    * New work at Center for Democracy - goal to create self-asserted privacy-related statements
        * Contact Adrian if interested https://www.ehidc.org/resources/draft-consumer-privacy-framework-health-data 

    *    Decentralized Mapping Exercise
            * Using a kanban format to make it easy to collect like concepts
            *  Comments welcome, board is here:  https://whimsical.com/VVRMbTi9bPsCqagmRVNGvm
        
Interesting links shared
- https://datatracker.ietf.org/doc/charter-ietf-gnap/
- https://youbroketheinternet.org/map 
- https://www.imsglobal.org/activity/comprehensive-learner-record
- https://openbadges.org/ 
- https://www.uschamberfoundation.org/t3-innovation-network/ilr-pilot-program 
- https://standards.ieee.org/project/1484_2.html
-https://wiki.trezor.io/Cryptocurrency_standards#BIP39_-_Mnemonic_code_for_generating_deterministic_keys 

</details>


### [Recording](https://us02web.zoom.us/rec/share/4_11PYjJqEZJR43L8l3nR6obIdrpX6a81CkXrqYPz0cq-jO2b-CIyqbkDplqEmkD) - 19 Aug 2020 - morning time (0600 PST)


Self-Introductions and Announcements (5min)  
* Stephen Curran - BCGov is looking for help with headless mobile testing! Anyone with experience and tool recommendations/suggestions please reach out!


#### Agenda.md / hackmd tour (10min)s
#### Documentation.md tour (5min)

<details> 
<summary> Orie - tour of explainer.md and other work to date/ongoing inheritance (30min - got lively)
</summary>

* Sam Curren: tests can be gamed and used as a hammer if they're imposed unilaterally
* Orie: gathering consensus and designing goals in a way that insures wide contribution
* Adrian: Registry as design tool for tests and projects: align workflow with the level of effort and format of the WG-- signup, link to other work, etc (//DID:Method [registry](https://w3c.github.io/did-spec-registries/#did-methods)?)
* Sankarshan: is there a vision that tests are going to be **continuous** as a design principle or more used as a test **battery** versioned to be run against specific components and stacks? In other words, how are inter-op breakage and failures flagged.
* Rouven: Broader definition of interoperability -- analogy to something as specific as Aries test harness breaks down because there aren't specs equivalent to the Aries RFCs that (in the best of cases) define test vectors precisely?
* Rouven + Orie: tests connected to specs > tests defined by broader, less technically-defined goals; DID-WG working on conformance tests that... work better than the prior ones (which SVIP had to rework to be more test-able)
* Sam: 2 camps of testing thought in Aries community - regression tests against user behavior (community-maintained testing scripts); telecom-style swap-testing (component-testing) - complementary, not competing approaches (either in isolation carries risks: maintenance, first-mover advantage, etc)
* Pam: Tooling in Aries? Sam: A little bifurcated along the above-mentioned lines; Stephan: major maintenance backlog/debt! Sam: One major contributor in each camp
* Kaliya: Sorry, which camp is which? Stephen: The BCGov harness is broader and includes unit tests (98.6% coverage!); the HL one comes more from the telco style of rack-testined. 
* Orie: but both are integration tests looking at inputs/outputs of each piece of software as a black box (agents under test) against RFCs that outline testable conditions and normative behaviors.  This is great!
* Orie: Harness approach // smoketest in CI/CD terms; 
* Stephen: Headless mobile testing expertise warmly requested for ongoing work in the Aries test harness! 

</details>

### Quick archive/issue-closing session (10min max)

* Deferred to next week pending first stab at repo-cleanup for deprecated/unsupported documentation (and updating documentation.md accordingly)

#### Ratify new time-slot for alternating weeks starting 26Aug. (Forgot to vote? you still [can](https://forms.gle/367khx8UvmZsjvyo9)!)

#### Pre-Mapping (15min) - live screenshare from the [notion.so for the group](https://www.notion.so/dif/Interoperability-WG-a42995c37e2a4511a10aea96cdbccc38)

<details>
<summary>Minutes:</summary>

Generative exercise: Categories to spitball and axes of comparison/divergence:
* DID & DID Formats
* DID Resolution & Negotiation
* Configuration/.Well-known
* Credential Transport
* ZKP methods
* Revocation Methods
* Storage mechanisms (Indy storage-driver mechanism)
* Cryptographic Suites/Agility
* Wallet and/or graph portability spec?

Attendees:
* Juan Caballero (Co-chair)
* Pamela Dingle (Co-chair)
* Kaliya Young (Co-chair)
* Adrian Gropper (HIE of One)
* Sam Curren (Aries/DIDComm)
* Simone Ravaioli (Digitary)
* Bart Cant (Rethink Ledgers)
* Rouven Heck (ConsenSys)
* Carlos Rodrigues (Bloom Protocol)
* Stephen Curran (Cloud Compass)
* Catherine Nabbala (Finema)
* Adrian Field
* Balazs Nemethi (DIF)
* Bernard Joly (One Span)
* James Dzierzanowski
* Kristina Yesuda (Microsoft)
* Sam Curren
* Sam Rookard
* Sankarshan
* Taylor Kendal
* Tim Cappalli
* Troy Ronda
* Hakan Yidiz
* Joachim (Jolocom)
* Orie (Transmute)
* please add yourself if you're reading this live in the meeting!

</details>
