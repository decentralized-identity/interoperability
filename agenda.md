# Interoperability WG Rolling Agenda & Minutes 

[![hackmd-github-sync-badge](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw/badge)](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw)

[early Zoom link - 0600PT](https://us02web.zoom.us/j/82475629186?pwd=a1RjenhHcEo0a0FKamdTdzVNaDNzUT09) | [late Zoom link - 1400PT](https://us02web.zoom.us/j/86023611186?pwd=WmVqWk9HOWRyK3l4TjhXaGgxa1VjUT09) | [DIF Website ](https://identity.foundation/interoperability/) | [**Repo & Issues**](https://github.com/decentralized-identity/interoperability/issues) | [Mailing List](https://dif.groups.io/g/interop-wg) | [Reference Shelf](https://www.notion.so/dif/be6763341a014d248f655aea187d7890?v=c9ac48a07f3d411c9a1bea32b55f7e76) | [Meeting recordings](https://docs.google.com/spreadsheets/d/1wgccmMvIImx30qVE9GhRKWWv3vmL2ZyUauuKx3IfRmA/edit#gid=2146749098)

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
    * Incorporate/consider [ToIP TIPs](https://github.com/trustoverip/technology-stack-wg/blob/master/TIP_LIFECYCLE_MANAGEMENT.md) and [OIX interop study](https://twitter.com/pamelarosiedee/status/1339223733303570432)
1. Human-centric interop as roadmap and business strategy (+ UX?)
2. Further afield usecases (VC-free, DID-free, human-free, LEI, etc) 
    * Non-human decentralized identity?
6. Interop test suites and harness infrastructure (after March when SVIP/CCG interop sprint ends)
4. Notary models and adoption hacks? (governance?)

* VCs versus VPs - is habituating individuals to exchanging strong credentials a dark pattern per se? how to keep VPs ephermal and useless to traffic analysis?
    * Revocable anonymity? Court orders?        
    * Adrian's question: do too many VC mental models and specs *assume* VCs going straight from issuer to holder, never issuer to verifier on direct behalf of holder?
* Periodic checkins on the multi-ledger (and possible multi-method!?) Indyverse
* --- **BBS+ FIESTA 2020** --- [**proposed**]
    * December 2nd or 9th?
    * Aries and non-Aries people making a pact to work together
    * C and C Work item?
* --- **TEST SUITEAPALOOZA 2020** --- [**F2F? align with SVIP and/or ESSIF?**]
    * Later in December?
    * Status update on SVIP's past and future suite maintenance
    * Aries and/or BCGov test suites
    * Can someone from Danube or IBM show the smoke tests run against driver updates to the universal resolver?
    * Any volunteers have internal compliance/smoke tests they want to show? (A quick video recording would also be great if timezones are brutal!)
* Educational presentations
    * Oliver - [DAF update](https://medium.com/uport/trusted-p2p-messaging-with-dids-didcomm-and-vcs-398f4c3f3cda) ? (VC-focused edition)
    * Disposable Identities (Adam Burns is on the hook)
        * Revocable Anonymity 
        * What the heck is a synthetic identity? (Michael Shea is up to date on fraud research)
    * Interop liabilities and new attack surfaces
    
    * VC Auth versus ZCap-LD (CCG), ACDC TF (& some day spec?) ToIP - 
    * Justin Richer: GNAP 
    * x509 worldwide - Finema, Spherity, Discipl, ...?
    * eIDAS roundtable - Nacho Alamillo, Gataca, Peter Wagner, Erik van Zuuren...?
    * KERI and Certificate Transparency - Dmitry? Sam Smith? Sam Huseby?
    
    * EDV Use Cases v2 - Manu?
    * Cloud Wars and Gaia-X - ...?
    
    * What's the BlueSky of LinkedIn? EuroPass, Affinidi, LER...
    * Whomst 
    * John Jordan - dominant design and metapatterns of adoption; civic technology; qR & paper credentials?
    
</details>

## Agenda - 16 June - US time - John Jordan - the ToIP vision and governance for decentralized identity


## Agenda - 9 Jun - EU time - X.509 Series Part 1, with David Chadwick (Verifiable Credentials Ltd., UK)

- Recommended Reading:
    - David's impressive bibliography, as overviewed by his [Google Scholar page](https://scholar.google.com/citations?hl=en&user=k1LL4dIAAAAJ&view_op=list_works&sortby=pubdate)
    - [VC Life Cycle](https://w3c-ccg.github.io/vc-lifecycle/) (W3C) and/or the VC Chapter of the Manning [Identity Book](https://livebook.manning.com/book/self-sovereign-identity/chapter-7/)
    - Recent [CCG Thread](https://lists.w3.org/Archives/Public/public-credentials/2021Jun/0023.html) on VCs with non-DID identifiers: a recurring issue in this group!
- Announcements
    - Good Health Pass [Report and Interop Profile](https://wiki.trustoverip.org/display/HOME/GHP+Blueprint+Public+Review+Process) out now-- draft requested before 17 Jun!!


## Agenda - 2 Jun - US time - BMWi Schaufenster, IDUnion, and new interop targets w/Hakan Yildiz
- [Recording](https://us02web.zoom.us/rec/share/oAD65bydP8qI5boJHgdjYnTsohs_a56d3gAOOd-M7LDiTbnOXYWFh9vfECLPwLA.y18yTo77OJmZCyPH) & [Slides](https://github.com/decentralized-identity/interoperability/files/6608206/Interop_Survey_export.pdf)
- Recommended pre-readings:
    - https://blog.identity.foundation/setting-interoperability-targets/
    - Keith Kowal (Workday)'s [presentation](https://us02web.zoom.us/rec/share/wnkcrIpwjA_fqUdTjSdi-AxquhjEpkRl_aYr4KOgnRGuyD4FfBraMRwBTk5SliPc.4NoaZNFIxICZfk2b) from earlier today on semantics and data shape-- how to consume PAYLOADS, not just envelopes
    - Adrian Doerk's [presentation](https://us02web.zoom.us/rec/share/jFfXpkigd_mSxtXEiMUcZMOpmIuQjvrx7qXpYegXaJBbLNy10XK5ybJn-Ld_4bvD.5AtQQuZ5Qv0WMkX4) on IDUnion at Finance and Banking SIG
    - Hakan's presentation for an IDUnion meeting a month ago

## Agenda - 26 May - EU time - Open Discussion
 * Internal vs External interoperability (summary by Adrian)
     * Internal - examples are vendor lock-in for example
     * External - protocol decided by holder not issue (ie treat delegation as a human right)
     * 


## Agenda - 19 May - US time - A quick tour of the WACI specification (recently donated to DIF) by Jace Hensley (Bloom) and a Q&A about the new WACI-PEx work item
- Recording of [whole session](https://us02webhttps://us02web.zoom.us/rec/share/1zq65CyDdsXzoIYoae-Ou1o-Y6hShrsnmdYb37cxQsw5LRrtUuHhx23GsR-qzZez.2YiKZqX0wRluSNRG) & of just the [WACI presentation](https://www.youtube.com/watch?v=KJLsnBzJ4eA) (on youtube)
- Jace will give a tour of the WACI [spec](https://github.com/decentralized-identity/wallet-and-credential-interactions) - what it does, what it specifies, what you can do with it
- Q&A about the v0.1 and v1 scopes for the WACI-PEx [work item/draft spec](https://github.com/decentralized-identity/waci-presentation-exchange), with world-class cat-herder Brent Zundel as respondent


## Agenda - 12 May - EU time - Aries-ToIP Interop with guests Lal and Jan from iGrant.io 
- [Recording](https://us02web.zoom.us/rec/share/fR6JUrZAgf51UNIrf5-koOccclZU4Keq2n--hKGQSDxe1PHDoG0U0ScgyDhg9vFp.4ayn1zpiov16w2Qo)
- iGrant will present on their Aries Interop Playground harness (for background, see [this recording](https://www.youtube.com/watch?v=cWPiJrVKj-U) of an earlier presentation and Q&A about the Playground at a ToIP call)
- Topics will also include ToIP [Interop Profiles](https://github.com/trustoverip/technology-stack-wg/blob/master/TIP_LIFECYCLE_MANAGEMENT.md) like [Saturn V](https://trustoverip.org/blog/2020/10/19/trust-over-ip-foundation-introduces-a-new-tool-for-interoperable-digital-trust/) and their work with Consent and Legal Agreements in the ToIP [Notice & Consent TF](https://wiki.trustoverip.org/display/HOME/Notice+and+Consent+Task+Force)
    - more info here: https://trustoverip.github.io/TIP0028-saturn-v/
    - Downloadable Data Wallet: https://igrant.io/datawallet.html
    - Mobile agent doc: https://docs.igrant.io/ssi/ssi-ama



Presentation
- 

## Agenda - 5 May - US time - IIW recap & Killer Whale Jello-Salad Update

- [Recording](https://us02web.zoom.us/rec/share/bD_SmCQIJAA8qlNXGT6P1YuzJuLygXhDDCpo0rn53qQamPvWKO9e4GNywVX5_wkt.lktwtQyh_sDytuCV)
- first half: all members are welcome to share and recommend their favorite sessions (let's gather the links in this document!). Some strong signals:
    - KERI <> TrustFrame/ADL: two kinds of DID-like but non-DID identifiers and how they can work with DIDs
    - Credential Exchange across stacks ASAP - the Jello-Salad issues
    - Lots of Covid talk, and governance talk, and legal talk, including some detailed guardianship, delegation, audit, and regulated-finance use cases!
- second half: 

<details><summary>Minutes</summary>
- IIW highlights?
    - all notes [here](https://iiw.idcommons.net/IIW_32_Session_Notes)
    - Adrian: 3 IIW panels:
        - Recommend people check the minutes/recording of AuthZ session
    - Polic Stuff
- WACI
    - Have the group codify technical components of WACI individually, so we can generated momentum now.
    - PROPOSAL (from daniel B): marshal DIF, HL, ToIP, and/or CCG to jointly designate components of WACI as THE common ground for VC exchange

- Interop Showing
    - DW: no implementations? PE has 1, BBS+ has 1...
        - PE is not minimal!
</details>

## Agenda - 28 Apr EU Time - How Trust Frameworks Compare and Develop (OIX)

- [Recording](https://us02web.zoom.us/rec/share/u-yNsIP0AWYXkFnw1IyEKyKkBTsurpRLM-Vh8Xo4mSJzOUCKXeyI1WScbiQKtoCM.G2KxoPFz_RI_kvzX)
- Nick Mothershaw (UK) from the Open Identity Exchange will talk about the [guide](https://openidentityexchange.org/guide-trust-frameworks-interoperability)  to defining, enforcing, and comparing trust frameworks that OIX released last July
- Pam Dingle (Microsoft US) will serve as respondent, drawing on her own experience mediating trust frameworks and working with OIX

## Agenda - 20-22 Apr IIW - cancelled

## Agenda - 14 Apr - EU time - FAQ crowd-editing sesh and IIW session ideas/matchmaking
- For the first portion of the hour, we'll be walking through and giving the group a chance to hack away at a simple public-facing, entry-level [FAQ](https://docs.google.com/document/d/1umHFLN-BbNF4YtDY5PdQMtdGHWKEKzcpLS8C-T4T8pQ/edit#) for basic SSI topics
- For the second, we'll gather thoughts about IIW panels and workshop scopes or invitees with the group. The best IIW sessions often have two or three conveners that don't work together or on the same tooling!

<details><summary>Minutes</summary>

- IIW session spitballing
    - Juan + Sam: Rebase - 
    - Adrian: GNAP AuthZ & SSI - Authorization-first versus Messaging-first (are we too data-model-centric/-forward?)
    - Sam: Medical Data and Credentials - what can a subject hold and what cannot? Data access vs protocol with concrete use-case examples (question-driven)
        - Adrian: Can we get Solid folks in there? Invite Dmitry Z?
        - Sam: Major overlaps with GNAP, EDVs, Hubs, and Solid equally!
        - Sam: Philosophical and legal limitations are not well known to many people working on these problems...
            - Adrian: Alice to Alice
            - Sam: US Law requires many things NOT to be self-held-- then we can map those to currently architectures and options
    - Adrian: Trustee + HIE of One semi-demo? (a self-sovereign agent for health records)
    - Neil Thompson (working iwth Paul at ToIP/HCF) - OCA session (also Health Data-friendly)
    - Stephen - DID:Indy method and resolving full did doc support in Indy - extract all ledger data in more w3c ways
    - Stephen - organizational wallets - legal registered entities
        - Moritz K (Bosch) - Org Agent - Indy + web frontend for spitting out did:web VCs
    - Kristina 
        - OIDF/SIOP group --> using VCs with OIDC: 3 options; 
            1. JWT claims to embed entire VC inside the ID Token;
            2. Having a dictionary - Aggregated and Distributed Claims syntax;
            3. a new artifact that includes only VP (aka VP token)
        - BBS+ with JOSE (Ping)
        - Credential Provider spec (Tobias and Adam L: issuance spec)
        - wallet invocation (SIOP chooser) - how to invoke one wallet of many
            - Adrian: Password managers and wallets?
            - Kristina: CHAPI-inspired & share-page --> how to servers ask for a wallet and get one back it can work with
            - WebAuthn has some hints
        - SIOP use-cases - what do you want to use an Identity Provider you control for?
        
</details>

## Agenda - 7 Apr - US time - VC-Status-List-2021

-  Manu Sporny of Digital Bazaar (US) will be discussing the new [VC Status List](https://github.com/w3c-ccg/vc-status-list-2021) spec at CCG and how it could relate to [VC Refresh](https://www.w3.org/TR/vc-data-model/#refreshing) and other next-generation flows.

## Agenda - 31 Mar 2021 - Trust Framework Talk

- [Recording](https://us02web.zoom.us/rec/share/6e1gM0TIz4zWDmrwqf-C4-aEuwqHAC4KNt_5ChnNmqH6CgguVA60Da_Ue-gubJp-.W3S-Xbqc1LFPnB4f)
- Recommended Readings:
    - OIX Trust Framework [guide](https://openidentityexchange.org/guide-trust-frameworks-interoperability) (2020)
    - NIST Trust Framework [report](https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8149.pdf) (2018)
    - Aries [RFC](https://github.com/hyperledger/aries-rfcs/blob/master/concepts/0430-machine-readable-governance-frameworks/README.md) about Machine-Readable TFs
- Postponed: Alastaire from UK DCMS discussing their Trust Framework
    - "Alpha" Draft for Review: [UK Identity and Attributes Trust Framework](https://www.gov.uk/government/publications/the-uk-digital-identity-and-attributes-trust-framework/the-uk-digital-identity-and-attributes-trust-framework)
    - [GovUK TF](https://www.linkedin.com/posts/sankarshan_the-uk-digital-identity-and-attributes-trust-activity-6771800727254900736-_goL) (and links to folks at ToIP and Sovrin Foundation writing responses)

<Details>
<summary>Minutes:</summary>

- Sankarshan: Update on UK Trust Framework 
    - it's "ALPHA", still collecting input for BETA to be released before made policy
- Sam Curren
    - Intro to concept (tour of [RFC 430](https://github.com/hyperledger/aries-rfcs/tree/master/concepts/0430-machine-readable-governance-frameworks))
    - First QandA
        - Adrian: How's this relate to a platform [app store](https://developer.apple.com/app-store/app-privacy-details/
), which is a machine-readable trust framework of sorts? App stores' opaque and arbitrary policies raise real problems for separation of concerns; does MRTF make possible a more transparent or openly-governed policies? I think so!
            - Scope is for VCs, though, not software
        - clear, simple example in [this PR](https://github.com/hyperledger/aries-rfcs/blob/f0794ed764d593103749554a8d9b53b27f338958/concepts/0535-email-access-governance-framework/README.md)
        

</Details>

## Agenda - 24 Mar 2021 - US/APAC time (1400PT) - SVIP Plugathon Report-out & Aries Interop Update
- [Recording](https://us02web.zoom.us/rec/share/1Vfk73rH3vZ5mfC6Gj9YHqTWndKX-QdAztieOfWOr0sZ3KgQ4PwDrmM_uE8XIii9.Aj9-GC41NJ7dNuF2) of the whole session; [Aries-only](https://youtu.be/dC0QgsGQjLY) and [SVIP-only](https://youtu.be/Q9vOoE7qiDs) recordings on youtube
- Stephen Curran from Aries and Anil John from SVIP will be speaking about recent developments in the landscape of interop profiles and test harnesses
- Advanced readings:
    - [Slides and demo/videos from SVIP event last week](https://docs.google.com/presentation/d/1MeeP7vDXb9CpSBfjTybYbo8qJfrrbrXCSJa0DklNe2k/edit?usp=sharing)
        - [VC-HTTP-API](https://github.com/w3c-ccg/vc-http-api) specification used in recent SVIP plugathon (more detailed documentation forthcoming)
        - [CHAPI test suite](https://github.com/w3c-ccg/chapi-interop-test-suite) recently updates as well
    - Recently-launched public website for tracking cross-agent testing in the [Aries test harness](http://aries-interop.info/)
    - [Guided tour](https://www.youtube.com/watch?v=cWPiJrVKj-U) of iGrant.io's Aries Testing Journey and their open-sourced [Aries Interop Playground](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw?edit)
    - [Interop Testing Survey](https://forms.gle/KTwPkfcJujZEKuzk8) in support of DIF Member Gataca's [Verifier Universal Interface](https://gataca-io.github.io/verifier-apis/) (done through the interop program of ESSIF-LAB)
- Announcements 

<details>
<summary>Minutes:</summary>

- Aries (Rapid-fire tour by Stephen!)
    - Aries harness inspired by [INH interop lab](https://www.iol.unh.edu/)
- Q and A
    - Andreas: Kudos on including attack vectors in Mallory! What's she get up to?
    - Andreas: All the AcaPy and harness all in Kubernetes; AcaPy now multi-tenant
- Anil: SVIP 
    - VC-HTTP-API should catch up to this presentation and user-friendliness!
    - BBS+ update
        + David: Predicate proofs? Stephen: not in the AIP2 community
        + Sidenote: [Evernym](https://www.evernym.com/blog/bbs-verifiable-credentials/) blog post about predicates and BBS+
    - DID:Web for issuers
    - Foundational piece on JSON-LD
- Q and A
    - Anil: Scoping plugathon to narrower profile?
        - Rouven: Cross-Industry plug-a-thon? Smaller than profiles, just one or two tiny things, like everyone can present a VC over DIDComm?
        - Keith: Crypto opinions & NIST/FIST/Fed? Ed25519? what else?
            - Anil: To blockchain or not to ledger is actually a red herring; public blockchains are kind of unlikely to get acceptible any time soon; FIPS-compliance is 
            - Anil: NIST has a great whitepaper on pairing-friendly curves; I pinged two of its authors specifically about BLS and BBS+, and we had to ask them to look into it;


</details>

## Agenda - 17 Mar 2021 - US/EU time (0600PT) - DIF ["Mini-"] Grant Program
- Advanced readings:
    - NGI [report](https://www.ngi.eu/news/2020/12/08/disposable-identities-and-digital-twins/) on Disposable Identities Salon/mini-conf
    - NGI [Disposable Identities portal](https://disposableidentities.eu/)
- Announcements
    - Proposed [Hospitality and Travel Special Interest Group](https://docs.google.com/document/d/1uYlz3oVBDz-HKEtyO5CsCM1g3uhPxryy/edit) has a use-case discussion meeting [tomorrow](https://us02web.zoom.us/j/82316101179?pwd=b2R0OVErY2IwVFEzVkpiSjJKcmNJZz09) (10am EST) for people interested in exploring use-cases in those industries!
    - Discussion of proposed [Bounty Program](https://docs.google.com/document/d/1MQllNfFvC3PiVi5jo_kT6OCq9w3_GoEGWjZb-0pwuys/edit#heading=h.x34yxq5gfpsi) during the second half of Bi-weekly at [11am EST today](https://us02web.zoom.us/j/81262437540?pwd=UW5ZZkxxTGZXc1RpbFVXTW5JNkdDUT09)



## Agenda - 10 Mar 2021 - US/APAC time (1400PT) - Justin Richter and Adrian Gropper on GNAP and Authorization for SSI

- Announcements
    - Tomorrow, DIF will host an open call about the [proposed Travel and Hospitality Special Interest Group](https://docs.google.com/document/d/1uYlz3oVBDz-HKEtyO5CsCM1g3uhPxryy/edit) (10am EST)
    - Friday there will be a discussion about an interop bounty designed by this group and judged by the DIF Technical Steering Committee at the weekly [#DIF-governance meeting](https://us02web.zoom.us/j/89027827408?pwd=ZUNzT3dZaFNLS1FwbnplWEU1TFNVdz09) at 11am EST

- Advanced Readings:
    - Newest [GNAP-core spec](https://www.ietf.org/archive/id/draft-ietf-gnap-core-protocol-04.html)
- Justin will give a quick presentation on recent developments in GNAP world, and applicability to AuthZ requirements of SSI-based systems
- Adrian will serve as respondent and structure a conversation with some [notes](https://hackmd.io/_x19VGvPQbOkbiU-4W-8rQ?both)
    - time allowing, Adrian might also give an update specifically on GNAP and [AuthZ discussions](https://hackmd.io/qClYLUPkQ7uf0r3_4O7BUQ?view) in the Confidential Storage working group, which is currently refining use-cases and re-scoping for v1

<details>
<summary> Minutes & Diagrams: </summary>
Presentation
- Next steps for GNAP group at IETF

![](https://i.imgur.com/EKEzFlu.png)

- GNAP and SSI

![](https://i.imgur.com/TLF9v73.png)

- Naïve vision of everyone being their own AS:

![](https://i.imgur.com/e9Nksjz.png)

- But GNAP envisions AS more as a token factory:

![](https://i.imgur.com/rYSQgw8.png)

- Fancier version: User isn't only human that can intervene/chip in (RO = Resource Owner)

![](https://i.imgur.com/S969FnG.png)

- Q n A 
    - Adrian: Isn't factory model leaking policy info to requestors?
        - Justin: No, token has very little baked into it
        - UMA versus [UMA2](https://justinsecurity.medium.com/uma-2-0-437c293c3283) - limited-trust environments prefigured today's zero-trust, user brings some data with them
    - Audit
        - ongoing request and nonrepudiability - "txn"
- How to get involved - no CLA or joining process, just jump in!
    - txauth@ietf.org https://datatracker.ietf.org/wg/gnap/about/

</details>

## Agenda - 3 Mar 2021 - US/EU time (0600PT) - Manu Sporny (Digital Bazaar) report-out on specifications incubated in W3C-CCG
- [Recording](https://us02web.zoom.us/rec/share/WOKrQyAymxpWRVKXkw3bEJQVDYApFikAdaBIPnlTT4GBEgEnXELGPZG1rRGO2fp4.QgPtTRgAc9g7BbEW?startTime=1614779841000)
- Advanced Readings:
    - [W3C-CCG website](https://w3c-ccg.github.io/)
    - Manu's [roadmap](https://lists.w3.org/Archives/Public/public-credentials/2021Feb/att-0130/VerifiableTrustStandards.png) of CCG spec
        - Compare to Maxim from Selfkey's LD-focused [mindmap](https://app.mindmup.com/map/_free/2021/02/4409cb1072bd11eb8caf1b169bf82168) and Michael Ruminer's [more spec/dependency-structured kumu map](https://github.com/decentralized-identity/vc-spec-map) of the SSI spec space
    - See also Manu's [proposal](https://lists.w3.org/Archives/Public/public-credentials/2021Feb/0134.html) for an independent group to standardize Linked Data Signatures beyond an SSI context, to drive adoption of LD Proofs as **LEGALLY BINDING** digital signatures at NIST, ETSI, etc.!

<details>
<summary>Details:</summary>

- Manu self-intro
    - retail finance and govt
- Roadmap of CCG specs
    - Overlap of communities
    - First question break
        - Oliver- PresExch vis-a-vis VP Request spec? 
            - Manu: Lots of VPReq work is driven by US and EU govt requests
            - SVIP not identifying VPReq spec as an interop target
                - demonstrable interop and working e2e systems are two directives to be balanced in the SVIP program
                - lots of "fast tech" decisions made to favor these directives in short-term
            - Manu: PresEx is more complex and full-featured, whereas VPReq is more MVP-like; i'd love for them to converge over time but I don't see a lot of 
            - Oliver: interop profiles/spec subset approach?
            - Charles Lehner (in chat): converge is possible if we [start now](https://github.com/w3c-ccg/vp-request-spec/issues/7)...
                - Manu: VPReq spec comes out of CHAPI 
            - Manu: Subset profile could be a good approach to get partial alignment along the way
        - Kristina: Where's VC 1.1 work happening? where's the draft spec?
            - Manu: VC WG Maintenance group is working [here](https://github.com/w3c/vc-data-model/) (on main branch) - "canary in the coal mine" of W3C maintenance processes - Wayne Chang (Spruce) and Brent Zundel (Evernym) chairs, Ivan Herman = contact
            - v1.1 = no new features, just bug fixes, errata, and documentation upgrades
            - v2 = Mattr chomping at the bit to add some display features :D
            - Breaking changes planned? Manu: NEVER! Deprecate features at most    
        - James: Tipping point for adoption and uptake? Manu: we're certainly closer to it than a decade ago, when W3C was bombarded with decentralization opposition
            - Manu: Fundamentally, we have to prove (and specify/make testable) how it's a better mousetrap, and we're all working on that
        - Rouven: Linked-Secret in scope for any of these specs?
            - Manu: At least in US govt-based work, there's been little interest in it, but BBS+ (which relies on pairing-friendly curves) is picking up steam (IETF-CFRG is now [doing formal review](https://datatracker.ietf.org/doc/draft-irtf-cfrg-pairing-friendly-curves/) into the underlying math BN and BLS-- govts won't touch anything without that kind of crypto analysis, and luckily many of them defer to IETF-CFRG)
                - Manu: I think the linked-secret math in its Sovrin/Indy form relied was a blocker for Indy adoption
                - Rouven: But can't BBS+ issue to a linked-secret instead of a DID? I was asking more about issuance to non-persistent identifiers...
                - Manu: Oh, fair, that's a separate question; there *is* interest in binding to non-permanent identifiers for the sake of ZKP and selective-disclosure; CFRG is interested and EU and US govt agencies as well
    - Back to tour of chart
        - green = general data formats
        - blue = data model
        - yellow = vocab
        - magenta = protocols
        - purple = crypto 
        - orange (at the end) = app-level specifications (agent-layer?)
    - Juan: How can DIF companies help? Urgencies caused by big-company resistance to "all this" (LD-centric plumbing?)
        - RDF Dataset Normalization
        - LDProofs
        - Cryptosuites (partic for Edwards and JOSE interop)
        - This is fairly specialized stuff, but providing review and implementations is huge, we needed it all years ago
    - Adrian: More detail on protocols plz? Manu: Wire/transport Protocols are the protocols we mostly work on- CHAP, VC-HTTP-API, and VP Request Spec -- there hasn't really been convergence, we all want it but no real plan yet
        - CHAPI can move VCs but also ZCaps, DIDComm, OIDC... you can run subprotocols over it
            - Browsers don't just use HTTP-- there's all kind of service workers and cross-tab posts and push and put and... CHAPI lives in that sub-HTTP world
            - Oliver: CHAPI + Native apps? Manu: But native apps mostly use DIDComm, so they don't *need* it so much. A few native apps have made that work, but it's not widespread enough to standardize - a company hasn't stepped forward to put weight behind that initiative
            - Oliver: But is that *in scope*  of CHAPI work? What would the API look like for a native app, and could the CCG spec specify it? Manu: It could work the way websites invoke native apps (google map link in browser leads to scheme/protocol handler, or via mime-type... callback URL); CHAPI is a failure if we can't do that
            - Adrian: Password managers, for example; Manu: But that gets into standardization and browser-plugin to avoid proprietary stuff; choice of wallets hard to protect from browser standard bias...
            - Adrian: Consent and credential handlers: healthcare use cases tend to need consent and KMS concern separation; how does that work in this vision of CHAPI?
                - 4-8 years of data gathering before browser-API standards can surface concerns and priorities; **for now**, it has to be wild wild west (and outside of browser control).
        - VP Req is basically a Vocab, not a protocol...
- Please for help/participation
    - 8 chartered WGs - 6 of these need to end in a global standard for this to work :D
        - we need specs, test suites, sample implementations... 
    
</details>

## Agenda - 24 Feb 2021 - US/APAC time (1400PT) - Revocation Mechanisms Pt. 2 - Mike Lodder and Revocable BBS+
- Intros and announcements
    - Wallet Security WG kickoff Monday
    - Mike is also working on a bearer-token/passwordless auth system as well?! coming soon to an interop near you...
- Mike will be talking about his proposal for "Revocable BBS+", an early-stage specification that may some day be a registered W3C status mechanism!

<details>
<summary>Minutes</summary>

![](https://i.imgur.com/nlkLsGR.png)

Non-Private Methods
- lists
- merkle trees (just more efficient lists)
- service check (i.e. status server)

Pseudonymous Methods
- privaty info retrieval (PIR)
    - download entire list, check for value
- forward revocation list
    - non-revocation proof, check every itemn for match - more computationally intense, but less leaky

Anonymous Methods
- Crypto circuits: SNARKS, STARKs, SNARGs, Bulletproofs
- Accumulators:
    - RSA
    - Hyperelliptic
    - Pair-based
    - Range-based

Indy Style
- Tightly coupled to CL :(
- tails file
- size can't be helped

Merkle trees w/circuit proofs
- various options
- only in production in one place: ZCash (they still have problems with it)
- more and more circuits, complex details about trusted/semitrusted setup...
    - "you need a PhD in math to even research the options"
- easier to understand storage - can be 1bit for boolean
- v complicated - huge 
    - 10 seconds to download, 3 seconds to compute, 3 seconds to verify...
    
Hyperelliptic curves - only 2~3 years old
- no trusted setup - i.e., no one has to hold a private key
- security not yet hardened 
- easier to verify
- 2k accumulator
- Eth Foundation was looking at this for huge merkle trees w/o trusted setup
    -went in another direction since?
    
RSA
- trusted or trustless setup (req. MPC)
- accumulators have a fixed size, regardless of size of set
    - add trustless, but delete needs a private key (unless it's computationally super expensive) - 60-70ms each

Bilinear Maps Accumulators 
- CKS
- Nguyen
- ATSM
    - deltas could be applied with a XOR - easy peasy
- Thakur
- Vitto-Birukov * my fav
    - tiny proofs (under 300bytes)
    - have to publish deltas if you make any changes (local witness needs process all these)
- pairing-based (not secp or ed25519; requires pairing curves)
- BBS+ cred exchange + any of these --> "revocation for free"
    - HOLDER has to fetch and apply deltas - 

Questions
- Martin: BBS+ revocation versus BBS+ in general 
    - does bundling revocation AND ZKP confused the issue? does BBS+ measure up well as a revocation mechanism and as a ZKP mechanism separately?
- Adrian: Single-use credential?
    - Mike: Don't use any of this stuff! [Privacy-Pass](https://privacypass.github.io/) - Single-use ZK token :D 
    
Revocation is just difficult mathematically to scale
- accumulators seems to win, every time, by 100X or more, against SNARKs, SNARGs, etc 
    - SNARKS, SNARGs, etc are great for ZKP... just not really great for this problem
- bilinear map scales the best
    - leak less privacy than lists

</details>

## Agenda - 17 Feb 2021 - US/EU time (0600 PT) - Updates on Layer 1 recent events
- [Recording](https://us02web.zoom.us/rec/share/h-2dmVYB509JdXKNTdWDKYNtCfD5wS26sooUpmxsbhdDMgkUKpWm56lEGwzhc8oY.NScoc3Y6l28fVvnD) and [Slides](https://github.com/decentralized-identity/interoperability/raw/master/assets/slides--2021-02-17--t_ronda_(SecureKey)-did-orb-spec-tour.pdf)

- Reading and links:
    - Step-by-step guide to registering a DID Method presented on I&D WG [8 Feb](https://github.com/decentralized-identity/identifiers-discovery/blob/main/agenda.md#meeting---08-feb-2021---1400-et-recording) - see item #6 and recording
- Updates from recently-registered DID methods: 
    - [DID:Orb](https://trustbloc.github.io/did-method-orb/#self-certifying-decentralized-identifiers)
        - Special guest: Troy Ronda (SecureKey) will be discussing some of the peculiarities of DID:Orb, including its use of the ActivityPub gossip protocol for propagation of records and its usage of self-certifying identifiers
    - [DID:Tezos](https://did-tezos-draft.spruceid.com/#background-on-tezos-addresses) & [DID:Doge](https://did-doge.spruceid.com/)
        - Special guests: Wayne Chang and Simon Bihel (Spruce)

* Announcements
    - Wallet Security WG refining its [charter](https://docs.google.com/document/d/18H2hVjHZEBjbnzod8tLogJIEzySdecbk9d-QBJaqHP0/edit) and looking for a co-chair to begin work soon! Get in touch via DIF Slack

<details>
<summary>Minutes</summary>
* Intros
    - Andrea from Dyne.org - [DECODE project](https://decodeproject.eu/) moving towards W3C compliance soon
    - Hakan - reintro - good to be back, ping me on Slack if you have any questions about the IDUnion Indy network now supported by the BWMi here in Germany!
    
![](https://i.imgur.com/4pXiZGg.png)
![](https://i.imgur.com/oAPJogy.png)
![](https://i.imgur.com/mxrIsKu.png)
![](https://i.imgur.com/VbENsrT.png)
![](https://i.imgur.com/sF4Av6M.png)
![](https://i.imgur.com/vdNOfvj.png)
![!!!](https://i.imgur.com/n4VKs8s.png)


* Troy - ORB Walkthrough
    - Intro to Sidetree in general
        - loose ordering/no ordering needed
        - each controller manages directly a portable, offchain hashchain for each identifier
    - Orb specific
        - "allow ledger usage as a monitorable log"
        - open federation based on loyal/total replication, not subset or second-order data model
        - minimize trust
        - web-based discover
        - "assigned timestamp + promised write" = "cert trans concepts" ("late publishing" in sidetree spec)
        - "observer" & "anchors" = Sidetree concepts
            - Anchor role encoded in a VC
            - "VCT" = VC transparency (//cert trans)
    - question-break
        - Martin: What's a ledger-node need to do to be a witness?
        - Adrian: Where are signing events in this? Can those also be logged (yes but at layer 2, not layer 1)
    - more details
    - github - reference implementation being built in Go on Fabric (variant of trustbloc)
    - More questions
        - Martin: how dynamic are the witnesses? can you change witnesses in the lifecycle of a did?
            - Troy: DID Controller picks an "origin" and that includes one or more witnesses, which are updated in the lifecycle/sidechain of each controller; new version writes that explicitly into the docs; canonical CIDs have to be rotated at each origin-move or recovery event (basically, old identifier still works but metadata includes a "redirect" to tell you about the change of canonical)
            - extra witnesses co-sign lots of things
        - Martin: conflict resolution built into late publishing, right? witnesses changed during the window of publishing? 
            - open federation risks witnesses disappearing; "non-canonical DIDs are treated as minimal graph point"
            - synonymous identifiers point to the same "original did"; 
        - Rouven: Will this be a work item in DIF some day? Troy: We want it into an appropriate working group, CCG or DIF
            - overlay - anchor credential format and overlays = not specified
        
</details>

## Agenda - 10 Feb 2021 - US/APAC time (1400PT) - Revocation method comparison
* [Recording](https://us02web.zoom.us/rec/share/1712JUpsSPmrvILDkSgVPErNyiqaSZ_vDPmGa9XFOXifkLMDXEguYM-uQLrLznyB.2b61Jg2ha_Q10ikZ) and amazing [Slides](https://docs.google.com/presentation/d/1xT8PZ4FYNAvH8AVdGmy_lqfDYqi0VNUMQuRrwU1gkIA/edit#slide=id.gbcc04079a5_0_1) - Thanks Martin!!!

Context and Recommended Advanced Readings:
* W3C-CCG VC Extensions registry section on credential [status](https://w3c-ccg.github.io/vc-extension-registry/#status-methods)
* [Slides](https://docs.google.com/presentation/d/10RBfGIyjyKdbmEDkKuM3O1pU5p-UpkiOHlUnZGi8cF4/edit#slide=id.p) and [transcript+audio recording](https://w3c-ccg.github.io/meetings/2020-04-27-vc-education/) of Mike Lodder's overview of past (CL) and future (BBS+?) accumulator schemes, April 2020
* [Slides](https://docs.google.com/presentation/d/1pUGAp6rvyQvVKHxGN2M83oaQwppowwzLrFyMjRXm9sU/edit#slide=id.p) and [sparse notes](https://docs.google.com/document/d/1jynxk8tIQnvVHeZPH0ATG0v8gswyn3Q0HnBoI5am2QI/edit) from Indy Interopathon (Sept2020)
* Digital Bazaar's LD-based [revocation-list-2020 spec](https://w3c-ccg.github.io/vc-status-rl-2020/)
* [API readme](https://github.com/hyperledger/ursa/blob/master/libursa/docs/anoncreds-design.md) for AnonCreds (from HL ursa repo)

* Announcements
    - Wallet Security WG refining its [charter](https://docs.google.com/document/d/18H2hVjHZEBjbnzod8tLogJIEzySdecbk9d-QBJaqHP0/edit) and looking for a co-chair to begin work soon! Get in touch via DIF Slack

## Agenda - 3 Feb 2021 - US/EU time (0600 PT) - Update on DID-Core and Enterprise Ethereum Alliance (D Burnett) and DID Interop Fundamentals (Markus Sabadello and guests)

- [Recording](https://us02web.zoom.us/rec/share/o5RP36QWFf0hW80cVW3UFgnAf-0tHkpl8KY4T1NY2sgf5F4Aza16ZhUhU9v9WuD9.XkJmx0ko1dSqyV6o) and Markus' [Presentation](https://github.com/decentralized-identity/interoperability/blob/master/assets/guest-slides/2021-02-030-Markus-Sabadello-Overview-of-Multi-proof%20VCs.pdf)

Announcements
* Wallet Security WG - come to biweekly later today!

Context & Recommended Advance Readings:
* Daniel Hardman's [Practical Interop blogpost](https://www.evernym.com/blog/getting-to-practical-interop-with-verifiable-credentials/)
* DID-core issues

<details>
<summary>Minutes</summary>

- DID-Core update from Daniel Burnett
    - self-bio - illustrious standards career (never knew the WebRTC piece!)
        - important update: Brent Zundel and Wayne Chang taking over VC maintenance group!
        - Consensys and Enterprise Ethereum Alliance!
    - 2 year charter period = standard for a recommendation-track spec
        - all other outputs are non-normative and non-rec track (usecases + reqs, implementation guide, rubric that came out of RWOT)
        - DID Resolutions spec is NOT a work item of the W3C DID-Core group - that's CCG!
            - industrial participants in the group lobbied against scope creep- resolution put out
            - not just resolution but ALL operations put out of scope of the DID spec itself (just the identifier, ma'am)
            - DID-Resolution *interface* defined in did-core, but only that
        - W3C not a fan of extensions - implementation reports (provided by implementers about the group's test suite), which are due **one month** after getting to "proposed recommendation" freeze 
            - Feb 9 - any issue without a PR gets put on ice for now
    - Problem Issues :D 
        - Informational appendices (some might be W3C notes)
        - DAG-CBOR editorial snafu and maturity issues (W3C Note might make more sense than an appendix?)
        - Let's not forget the extensions registry! It explicitly permits new representations (incl additional/future CBOR variants)
        - W3C - Objection process
        - Implementation reports - Orie is taking lead on this one
            - Open to non-members
- EEA - making Ethereum safer and easier for businesses to use
    - Public mainnet and consortium uses both in scope
    - Enterprise Ethereum (competitors to Fabric and Corda, exc with a mainnet)
        - {more devs than anybody, hehe}
        - Specs for enterprise
    - EthTrust working group - levels of security audits for smart contracts (auditing badges)
        - actual audits outsourced to security auditing firms 
    - New DeFi interest group - should be popular
    - Eth2 interest group coming soon
    - Portable ID check/eKYC for cryptocurrency onboarding - need to be more portable than conventional banks! 
- MultiProof VCs - [Presi](https://docs.google.com/presentation/d/14SQpmG8O1FHXk2a4iauo9aOxM_9zq9e9TEboQNJpjU0/edit#slide=id.gc6f80d1ff_0_0)
    - [LD Proofs](https://w3c-ccg.github.io/ld-proofs/) spec (independent spec) - includes possibility of multiple proofs!
        - Proof Sets (serial) versus Proof Chains (cumulative-- includes previous signatures)
        - Troy: Our Orb method does [this](https://trustbloc.github.io/did-method-orb/#example-9-orb-transaction)! 
        - examples in the wild: Essif v1 VerifiableID (secp with did:ebsi-eth:xxx#key-1 + eidasSeal2019 with cert)
            + Xavier: we're (Essif) are updating this now: AES is our assertionmethod: XADES, PADES, or now JAdES based on JWS (CR in ETSI)
            + Markus: one thing we discussed back then in the v1 days was just signing the VC with the DID but put the Eidas Seal in the DID Doc; 
    - verificationMethod type EidasCertificate2019 was just a proposal; JAdES vM **will** however be registered with W3C
        - security-vocab and [LD-crypto registry](https://w3c-ccg.github.io/ld-cryptosuite-registry/)
    - example #2 from USCIS PRC project
        - non-signature proofs! proof of work, hash of credential being registered on a blockchain (forgotten trend-- adds little security and adds correlation :D )
    - example #3
    - example #4 - Veres One uses some amount of POW when you register a DID... that might be another example of non-sig assertion method 
    - Troy in chat: The Orb setup is very much like certificate transparency … since we use VCs instead of X509s, we call it Verifiable Credential Transparency :). https://trustbloc.github.io/did-method-orb/#vct-v1

        
        

</details>
## Agenda - 27 Jan 2021 - US/APAC time (1400PT) - ~~Todd Gehrke (ID2020) + Josh Mandell(Microsoft Healthcards Project) ~~

Context:
* [HealthCards](https://github.com/smart-on-fhir/health-cards) 
* Mitre, Carin, and Common [press release](https://www.businesswire.com/news/home/20210114005294/en/Broad-Coalition-of-Health-and-Technology-Industry-Leaders-Announce-Vaccination-Credential-Initiative-to-Accelerate-Digital-Access-to-COVID-19-Vaccination-Records)

Impromptu agenda
- Adrian: separation of concerns where IETF does protocols and W3C does data models
    - authorization and messaging as yin and yang?
    - diversion through didcomm
- FHIR brownfield entrenching EHR platforms/concerns?


## Agenda - 20 Jan 2021 - US/EU time (0600 PT) - Tour of the OS Veramo Suite from Consensys Mesh/DAF team

[Recording](https://us02web.zoom.us/rec/share/a134lNnRootkzsl4EQEWozpIKFNBugdtwR5old__HJr1-AAllgOIrzRwdyLv9APP.hfc2l_l6zl_1EQPj)

Agenda
- introductions and announcements
    - [INATBA Roundtable](https://inatba.org/events-calendar/decentralised-identity-whats-at-stake/) happening tomorrow - come support DIF members Jolocom (Kai) and Transmute (Karyl) that are speaking on a panel with friends of the podcast Daniel du Seuil and Anil John!
- Presentation of Veramo
    - [Website](https://veramo.io) and [github repo](https://github.com/uport-project/veramo)

<details>
<summary>Minutes</summary>

- Intro - uPort history and relationship between Consensys, uPort, and Veramo
    - Veramo URL: http://veramo.io
    - backward compatibility with uPort, but more easily extensible and modular architecture
    - moving to a more messaging- and event-based structure
- Architecture tour - highlevel
    - SDR - temporary presentation request while we wait for a wider standard to harden (will replace later with Pres Manifest or such)
    - W3C Credential (JWT)

![](https://i.imgur.com/J4hJI77.png)

- Architecture tour - Plugins and modules
    - Agent Apps: Veramo CLI & Veramo Agent App (HTTP)
    - modular plugins that expose methods to each other via TypeScript API calls or via openAPI proper 

![](https://i.imgur.com/gy4jTOz.png)
- Roadmap
    - LD Proofs coming soon
    - Presentation Exchange / Cred Manifest
    - Aries & DIDComm v2 (will replace native Veramo messaging)
    - DID:Ion ?
    - Modular enough that other people can write plugins for any ZKP presentations and verifications people want, be our guest!

![](https://i.imgur.com/sOAPXHB.png)
![](https://i.imgur.com/bliguWh.png)



- Juan's questions
    - Data store (SQL?) versus EDV? Key manager versus KeyCloak or WebKMS?
    - REPLACE messaging with DIDComm? Backwards compat?
    
- Q and A
    - Adrian: This is great, feels like it 
    - Adrian: Is this an attempt to remake GNAP AS for SSI tools? Or is the future API fortresses? 
        - Future agenda item?
        - Oliver: I think the veramo plugin system with remote plugins would work with GNAP, depending how you divide labor between parties in your architecture; I can definitely imagine a plugin method using GNAP to convey privileges between remote plugins on diff exec environments; we see that as in scope;
        - Oliver: I'd be really interested to hear you speak about what GNAP's role would be? It's important, sure, but it's also specific to the architecture you're imagining
        - Sam Curren: This architecture can use its backend service an agent, but that agent isn't an AS, although it can work with one; client/server model is a weird fit to agent-to-agent architectures, so not incompatible; 
        - Sam: Pluggable authZ schemes depend on what role it plays (as agent) 
    - KMS versus other KMSs
        - Key Manager is not to replace, just an interface (webKMS could replace it, if someone made an interface for it; EDVs could replace the data store if someone figures out the custom API)
        - Rouven - could also be used as a testing framework with DID:Key - all you need is a few plugins
    - Pam: This presentation was very complete and professional-- OS, right? How would you sell this to a customer? How do you sell this? I would like to amplify this.
        - Rouven - enterprise plugins & legacy support plugins for hire :), not much 
    - Sam: Pushing messaging problems into resource framework? 
    
</details>

## Agenda - 19 Jan 2021 - DIF Face-to-Face - (800-830PT) - Report out of Interop since last F2F

[Recording](https://us02web.zoom.us/rec/share/zB6sajTZR1n1QX-_od7CDDHg-zgcT5fiSWJMnrm92IKIBxeEqVRQablnNDJ2NDvB.yR6-R3eQflN_dHGA)

Agenda
* What our deal is (5min tops)
    * Relationship to other groups
* Review Projects done (10min)
    * Invite people to speak up who were part of them
* Proposed Work Items? (5min)
* Past topics (5min)
* Future topics (5min)

## Agenda - 13 Jan 2021 - US/APAC time (1400PT) - Communications Problem: Explaining the VC Format wars to decision-makers

[Recording]((https://us02web.zoom.us/rec/share/zB6sajTZR1n1QX-_od7CDDHg-zgcT5fiSWJMnrm92IKIBxeEqVRQablnNDJ2NDvB.yR6-R3eQflN_dHGA))

* Optional homework: skim, read, or best of all, leave comments on the draft of Kaliya's LFPH/CCI [public-facing lightpaper](https://docs.google.com/document/d/1sipXx9f_hBC8D0S1qZNMAhehblRW8pab-B4TX7CF0lw/edit) on the subject 
* Walkthrough of paper (10min)
* Review
* Warmup discussion: How do you describe the VC format decision to decision-makers, clients, outsiders, etc? (10min)
* Crowd-edit and pile-on (30min)
* Closing discussion: where does this paper go and what else can be done to make this clearer (or obsolete)
    * Sidebar: Covid credentials

<details>
<summary>Minutes</summary>
* Walkthrough of paper (10min)
    * Scene by Scene
    * Scenes that need the most love: 8, 9, 10
* Review
    * Marty Reed: Partic in ed, we talk a lot about human-readable, 
    * Keith: I've had lots of these conversations with decision-makers, but... how do we cut through the complexity to them?
    * Keith: Can we phrase it as betting advice? Are you telling people to bet on one horse? The paper seems a little biased in favor of BBS+ IMHO...
        * Kaliya: We can't pretend these differences don't exist
    * Keith: I felt this paper glossed over the pairwise DID
        * Sidebar on which systems use pairwise (including JWT, ZKP-CL, and LD systems!) and others don't (in all the same categories)-- it's a cross-cutting (transversal?) category
    * Scene 9 BBS+ walkthru (Kyle dH)- issuer signs VC (which has a **signature** on it) and holder signs VP (which has a **proof** on it).
    * Scene 10 - 
    * Kyle: what's diff between ZKP and nonZKP - all nonZKPs have in common not wanting to reveal the DID or the signature-- ZKP lets you withhold both holderDID and holderDID-Signature in VPs
* Warmup discussion: How do you describe the VC format decision to decision-makers, clients, outsiders, etc? (10min)

* Crowd-edit and pile-on (30min)

* Closing discussion: where does this paper go and what else can be done to make this clearer (or obsolete)
    * Sidebar: Covid credentials
</details>

## Agenda - 6 Jan 2021 - US/EU time (0600 PT) - 2020 Year in Review & Periodic Roadmapping Re-up session

[Recording](https://us02web.zoom.us/rec/share/FZyFAm8hfHBtj9CowYYoo1_0F4wf_ThaCJDbDXj12FBiX-0fExehTZLxneQfqIW0.lOBwTUjnbUUvmbuB)

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


## Archive 

Older agendas and minutes moved to a separate file: [agenda2020.md](https://github.com/decentralized-identity/interoperab ility/agenda2020.md)