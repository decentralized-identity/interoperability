# Interoperability WG Rolling Agenda & Minutes 

[![hackmd-github-sync-badge](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw/badge)](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw)


[**Current Documentation Repo** (still deprecated/out of date) ](https://identity.foundation/inteorperability/) | [**Issues**](https://github.com/decentralized-identity/interoperability/issues) | [Meeting Recordings/Transcripts](https://dif.groups.io/g/interop-wg) | [Reference Shelf](https://www.notion.so/dif/be6763341a014d248f655aea187d7890?v=c9ac48a07f3d411c9a1bea32b55f7e76)

_For this call, you are encouraged to turn your video on. This is a good way to build rapport given we are a large, disparate group experiencing a lot of churn._

_This document is live-edited DURING each call, and stable/authoritative copies live on our github repo under /agenda.md ._

## Agenda - 2 Sep 2020 - morning time (0600 PST)

1. Tour of cleanedup/archived repo of WG prehistory (10min MAX)

## Agenda - 26 Aug 2020 - afternoon time (1?00 PST)

* TIME TO BE SET FRIDAY 21 -- if you haven't voted yet, please vote!
* Juan sends his regrets, he'll be on vacation!

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