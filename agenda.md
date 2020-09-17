# Interoperability WG Rolling Agenda & Minutes 

[![hackmd-github-sync-badge](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw/badge)](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw)


[DIF Website ](https://identity.foundation/interoperability/) | [**Repo & Issues**](https://github.com/decentralized-identity/interoperability/issues) | [Meeting Recordings/Transcripts](https://dif.groups.io/g/interop-wg) | [Reference Shelf](https://www.notion.so/dif/be6763341a014d248f655aea187d7890?v=c9ac48a07f3d411c9a1bea32b55f7e76)

_For this call, you are encouraged to turn your video on. This is a good way to build rapport given we are a large, disparate group experiencing a lot of churn._

_This document is live-edited DURING each call, and stable/authoritative copies live on our github repo under /agenda.md . Please note that we might not notice a pullrequest in time, but you are free to propose agenda items for future meetings via hackmd ._

### "Parking lot" for future/recurring agenda items

<details>
<summary>Topics List</summary>

* Human-centric interop as roadmap and business strategy (+ UX?)
* Further afield usecases (VC-free, DID-free, human-free, LEI, etc) - venn diagram of interop goals?
* Notary models and adoption hacks?
* VCs versus VPs - is habituating individuals to exchanging strong credentials a dark pattern per se? how to keep VPs ephermal and useless to traffic analysis?
* Periodic checkins on the multi-ledger (and possible multi-method!?) Indyverse

</details>

### Agenda - 7 Oct 2020 - US/APAC time (1400 PST) 

1. Updates and Announcements

2.  --- **TEST SUITEAPALOOZA 2020** --- [**proposed**]
    * Status update on SVIP's past and future suite maintenance
    * Aries and/or BCGov test suites
    * Can someone from Danube or IBM show the smoke tests run against driver updates to the universal resolver?
    * Any volunteers have internal compliance/smoke tests they want to show? (A quick video recording would also be great if timezones are brutal!)
     
<details><summary>Minutes:</summary>

Attendees:
* Juan Caballero (Co-chair)
* Pamela Dingle (Co-chair)
* Kaliya Young (Co-chair)


* Introductions and Hellos
* Updates and Announcements

</details>
     
### Agenda - 30 Sep 2020 - US/EU time (0600 PST)


1. Updates and Announcements

<details><summary>Minutes:</summary>

Attendees:
* Juan Caballero (Co-chair)
* Pamela Dingle (Co-chair)
* Kaliya Young (Co-chair)

1. Introductions and Hellos
1. Updates and Announcements


</details>

### Agenda - 23 Sep 2020 - US/APAC time (1400 PST)

1. Updates and Announcements
1. Final round of edits on map (check back friday for the link) (10min)
1. Present draft questionnaire (10min plus **FIRST HOMEWORK ASSIGNMENT** over email)
1. Roadmapping - Lobby for your favorite and we will vote on the mailing list?

  
 | Title | Explanation | Target Deliverable(s)|
 |--|--|--|
 | Test Suite Jamboree | Apples-to-apples comparison of available test suites and how we could leverage them here | If possible: matrix showing equivalent suite results across stacks |
 | Pres-Exch/Aries alignment| The DIF Presentation Exchange spec has flows and assumptions that are hard to reconcile with Aries flows and assumptions. | 1. minor pull requests against both specs 2. implementation guidance that would make Aries wallets easier to comply with Pres Exch and vice versa. 3. a great blog post for the DIF Medium :D | 
 | Wallet Method Support |Wallet can resolve a DID *and* know how to verify the VCs it can sign? | * Matrix of methods per Wallet for generated and resolved DIDs * DID Resolution implementation guidelines for wallet designers/implementers? I.e., how do you get from a method spec to supporting those methods |
 | Wallet Credential Format Support | Which formats of credentials can wallets parse and validate? | Matrix of supported credential formats |
|Human-centric interoperability|See Adrian's MyData event on [Gold Button](https://docs.google.com/document/d/1kZ7_Skcn4zb3zOfEu7XZDrYAmLR1T_pbBoSk8AEfrSg/edit) and [https://github.com/w3c/did-use-cases/issues/101](https://)|Profile? A map similar to the whimsical|
|Revocation comparison overview| Status Method Registry at W3C is a little under-updated | Guidance on updating <-- and tentative or pre-spec draft of cross-community revocation-check spec [*Note: ZKP revocation versus "herd privacy" solutions are not equivalent and such a spec might need to differentiate schools of privacy engineering or allow implementers to be opinionated about this distinction per use case!*] |
|DID Method / KeyType Matrix  (Dmitri's idea)| Make a survey of implemented DID Methods and list cryptographic key types that they support | A table in github or a spreadsheet/CSV file|
|| | |
|< your idea here >| | |


<details><summary>Minutes:</summary>

Attendees:
* Juan Caballero (Co-chair)
* Pamela Dingle (Co-chair)
* Kaliya Young (Co-chair)

1. Introductions and Hellos
1. Updates and Announcements
1. 

</details>
       
### Agenda - 16 Sep 2020 - US/EU time (0600 PST)

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

### Agenda - 9 Sep 2020 - US/APAC time (1400 PST)

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

### Minutes - 2 Sep 2020 - US/EU time (0600 PST)

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

### Minutes - 26 Aug 2020 - afternoon time (1400 PST)



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


### Minutes - 19 Aug 2020 - morning time (0600 PST)


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