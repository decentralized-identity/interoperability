# Discussion Items for next Chairs meeting
* We have source for demos and proofs of concepts, the most recent substantive change being Feb 2020 across all of them. 
  We are continuously getting security warnings from GitHub because of issues with these projects. 
  We should externalize code projects in our repo (and likely archive). DW is reaching out to authors to determine if they prefer another option (such as pointing to a maintained authoritative version, or investigate creating a work item for it underneath the Interop WG)
* Go over core documentation in our repo to remove things which are not a focus/not true anymore
* Replace main "notion" page for Interop WG with content either on the DIF page or Github main page
* Create a skeleton agenda for meetings, e.g.
  * Call to order
  * Current meeting topic and agenda
  * Announcement of future interoperability meetings and recap of previous week
  * (Call for) announcements of other interoperability-related topics
  * Main meeting agenda
* DW: Status on PoC of github infrastructure revisions

# "Parking lot" for future/recurring agenda items

## Fresh topics

* Kaliya: WACI what WACI how?
* IIW Discussion on what we want to do there and potentially cancelling the meeting that week, or merge into agenda at IIW.
* IIW interop AMA session, what can we do to make things better for the community
* DIDComm realease on IIW, do we want to play off of that?

## Educational presentations

* Disposable Identities (Adam Burns is on the hook)
  * Revocable Anonymity 
  * What the heck is a synthetic identity? (Michael Shea is up to date on fraud research) - Ping Identity might want to speak to it? or Jan Lindquist's privacy and risk WG in ToIP
* Interop liabilities and new attack surfaces
* VC Auth versus ZCap-LD (CCG), ACDC TF (& some day spec?) ToIP - 
* x509 worldwide - Finema, Spherity, Discipl, ...?
* eIDAS roundtable - Nacho Alamillo, Gataca, Peter Wagner, Erik van Zuuren...?
* EDV Use Cases v2 - Manu?
* Cloud Wars and [Gaia-X](https://www.gaia-x.eu/) - ...?
* What's the BlueSky of LinkedIn? EuroPass, Affinidi, LER...
* Ongoing interop efforts
    - `JWS test suite` - https://blog.identity.foundation/dif-grant-1-jws-test-suite/
    - `vc-jwt-interop` - https://github.com/w3c-ccg/community/issues/198
    - `VC-HTTP-API` - 
    - Aries-interop.info -

## Meta-topics, potential quarter-wide or year-long goals

* Venn diagram of interop goals, and scopes/definitions of interop (contextual)    
* Don't lose focus on the map model! [link](https://github.com/decentralized-identity/decentralized-identity.github.io/blob/master/assets/crosscommunity-architecture-survey-oct-2020.pdf)
    * Parallelize (and promote) interop work on totally different scopes
    * Proposed Work Item: **Architectural guidelines**: "if your role in the ecosystem includes X, looks at ABC specs and make sure you speak D and F to maximize interoperability (and/or future-compatibility)"
    * Incorporate/consider [ToIP TIPs](https://github.com/trustoverip/technology-stack-wg/blob/master/TIP_LIFECYCLE_MANAGEMENT.md) and [OIX interop study](https://twitter.com/pamelarosiedee/status/1339223733303570432)
* Human-centric interop as roadmap and business strategy (+ UX?)
* Further afield usecases (VC-free, DID-free, human-free, LEI, etc) 
    * Non-human decentralized identity?
* Interop test suites and harness infrastructure (after March when SVIP/CCG interop sprint ends)
* Notary models and adoption hacks? (governance?)

* VCs versus VPs - is habituating individuals to exchanging strong credentials a dark pattern per se? how to keep VPs ephermal and useless to traffic analysis?
    * Revocable anonymity? Court orders?        
    * Adrian's question: do too many VC mental models and specs *assume* VCs going straight from issuer to holder, never issuer to verifier on direct behalf of holder?
* Periodic checkins on the multi-ledger (and possible multi-method!?) Indyverse

* --- **TEST SUITEAPALOOZA 2020** --- [**F2F? align with SVIP and/or ESSIF?**]
    * Later in December?
    * Status update on SVIP's past and future suite maintenance
    * Aries and/or BCGov test suites
    * Can someone from Danube or IBM show the smoke tests run against driver updates to the universal resolver?
    * Any volunteers have internal compliance/smoke tests they want to show? (A quick video recording would also be great if timezones are brutal!)
