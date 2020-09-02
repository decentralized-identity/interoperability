# Interoperability WG Rolling Agenda & Minutes 

[![hackmd-github-sync-badge](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw/badge)](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw)


[DIF Website ](https://identity.foundation/inteorperability/) | [**Repo & Issues**](https://github.com/decentralized-identity/interoperability/issues) | [Meeting Recordings/Transcripts](https://dif.groups.io/g/interop-wg) | [Reference Shelf](https://www.notion.so/dif/be6763341a014d248f655aea187d7890?v=c9ac48a07f3d411c9a1bea32b55f7e76)

_For this call, you are encouraged to turn your video on. This is a good way to build rapport given we are a large, disparate group experiencing a lot of churn._

_This document is live-edited DURING each call, and stable/authoritative copies live on our github repo under /agenda.md . Please note that we might not notice a pullrequest in time, but you are free to propose agenda items for future meetings via hackmd ._
#### Agenda - 23 Sep 2020 - US/APAC time (1400 PST)

<details>
<summary>Attendees:</summary>

* Juan Caballero (Co-chair)
* Pamela Dingle (Co-chair)
* Kaliya Young (Co-chair)
</details>

1. Updates and Announcements

    <details>
    <summary>Notes</summary>

    * ahem
       </details>
       
#### Agenda - 16 Sep 2020 - US/EU time (0600 PST)

<details>
<summary>Attendees:</summary>

* Juan Caballero (Co-chair)
* Pamela Dingle (Co-chair)
* Kaliya Young (Co-chair)
</details>

1. Updates and Announcements

    <details>
    <summary>Notes</summary>

    * ahem
       </details>

#### Agenda - 9 Sep 2020 - US/APAC time (1400 PST)


<details>
<summary>Attendees:</summary>

* Juan Caballero (Co-chair)
* Pamela Dingle (Co-chair)
* Kaliya Young (Co-chair)
</details>

1. Updates and Announcements

    <details>
    <summary>Notes</summary>

    * ahem
       </details>

1. Continue mapping exercise
    
    * optional homework: leave comments on the [whimsical](https://whimsical.com/VVRMbTi9bPsCqagmRVNGvm), or fork it and make your own variants to compare/contrast next week or OOB? Whimsical instructions [here](https://www.notion.so/dif/Procedural-Notes-github-etc-d31f543e8a94441ebeb1550e671ff195)
3. Draft questionnaire based on map (proposed- pending group interest)?
4. anyone want to give a 5min overview of the Decentralization Rubric (early version [here](https://github.com/WebOfTrustInfo/rwot9-prague/blob/master/draft-documents/decentralized-did-rubric.md#15governance-openness), most recent version [here](https://docs.google.com/document/d/1rYdWiwawWmLOWtHRvT0GzYcdewW_OS9M2mAkENLFdtY/
))?

## Agenda - 2 Sep 2020 - US/EU time (0600 PST)

<details>
<summary>Attendees:</summary>

* Bernard Joly
* Adrian Field
* Juan Caballero
* Pam Dingle
* Balazs Nemethi
* Rouven Heck
* Adrian Field
* Adrian Gropper
* Bernard Joly
* Catherine (Finema)
* Denis Popov
* Hakan Yildiz
* James Dzierzanowski
* Joachim Lohkamp
* John Walker
* Kristina Yasuda
* Martin Riedel
* Sam Rookard
* Sankarshan
* Scott Malley
* Simone Ravaioli
* Stas Demchuck
</details>

1. Updates and Announcements

    <details>
    <summary>Notes</summary>

    * Indy Interop-a-thon rages on, and many video recordings are already live on the HL Aries Confluence [page](https://wiki.hyperledger.org/display/II/Agenda). Thanks to Linux Foundation for the storage and the infrastructure! Notes from each session are in the [qiqochat site](https://indy-interop.qiqochat.com/) for now, but will be moved to Aries Confluence soon.
   * [#IIW31](https://internetidentityworkshop.com/) earlybird tickets close soon - Oct 20-22 (Tu-Th)
   * Self-Introductions
       * Martin Riedel (ConsenSys R&D Eng)
       * Denis Popov (Affinity, Eng Team) - here for same!
       * Stas Demchuk (Affinity, Eng Lead) - looking forward to scaling globally with the help of this group
       </details>

4. Begin Mapping questionnaire discussion or ideation? Work item for chairs?
6. Continue Mapping review and discussion

    <details>
    <summary>Notes</summary>
    
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

## Agenda - 26 Aug 2020 - afternoon time (1400 PST)



* Announcements

    <details>
    <summary>Notes</summary>
    
    * Juan sends his regrets, he'll be on vacation!
    * MyData panels relevant to interop? [Form](https://online2020.mydata.org/cfp-form/)
    * Time set - 1400, revisit in 10 weeks?
    * Sovrin Interop-a-thon next week - Any messages or requests to send via liaisons? (5-10min) 
    * Full, live schedule [here](https://wiki.hyperledger.org/display/II/Agenda)
    * Anyone on the fence about signing up to lead a session that would like a less-Indy-native partner for it?
    * Does this group have any interop-furthering requests for the session, "**Other things we need in Indy**"?
* Stack-Mapping Exercise (rest of time?)
    </details>

<details>
<summary>* Attending</summary>

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
    </details>
    
* Notes
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


## Agenda - 19 Aug 2020 - morning time (0600 PST)


#### Self-Introductions and Announcements (5min)  
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

#### Quick archive/issue-closing session (10min max)

* Deferred to next week pending first stab at repo-cleanup for deprecated/unsupported documentation (and updating documentation.md accordingly)

#### Ratify new time-slot for alternating weeks starting 26Aug. (Forgot to vote? you still [can](https://forms.gle/367khx8UvmZsjvyo9)!)

#### Pre-Mapping (15min) - live screenshare from the [notion.so for the group](https://www.notion.so/dif/Interoperability-WG-a42995c37e2a4511a10aea96cdbccc38)

<details>
<summary>Generative exercise: Categories to spitball and axes of comparison/divergence:</summary>
* DID & DID Formats
* DID Resolution & Negotiation
* Configuration/.Well-known
* Credential Transport
* ZKP methods
* Revocation Methods
* Storage mechanisms (Indy storage-driver mechanism)
* Cryptographic Suites/Agility
* Wallet and/or graph portability spec?
</details>

#### Attendees:
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
* 