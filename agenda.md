# Interoperability WG Rolling Agenda & Minutes 

[![hackmd-github-sync-badge](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw/badge)](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw)

[DIF Website][dif] | 
[*GitHub repo & Issues*][repo] | 
[Mailing List][maillist] | 
[Reference Shelf][reference] | 
[Potential future topics][parking-lot]

## Attending
The Interoperability Working Group meets weekly via Zoom, alternating times to better accomodate live participation from different time zones:

[Join 0600PT Call *(EU-friendly)*][eu-zoom] | 
[Join 1400PT Call *(US-friendly)*][us-zoom] |
[Meeting recordings][recordings]
 
_For this call, you are encouraged to turn your video on. This is a good way to build rapport given we are a large, disparate group with constant new members._

_This document is live-edited DURING each call for minutes, while a stable copy lives on our [GitHub repo][repo]. Feel free to propose agenda items either via issues or by messaging on DIF Slack.

# Upcoming meetings

<!--
### Agenda - 3 Nov - US time
### Agenda - 27 Oct - EU time
 -->
## Agenda - 20 Oct - US time
Internet Identity Workshop Recap

## Agenda - 13 Oct - EU time
No call due to [Internet Identity Workshop][iiw]. Look at notes for potential sessions.

# Next meeting
## Agenda - 6 Oct - US time
### Items
* Library polooza followup meeting 
* 5 min for IIW dicsussions, anything we need to discuss prepp for IIW

### More info

#### Polooza

The second-part followup to the “Library interop-polooza” discussion two weeks prior, which had participation from Aries, MATTR, Spruce and Veramo.

Agenda working doc is here for history keepings: https://docs.google.com/document/d/1wWl442DQK0dHhtL8HHsbdtbpMxRL-_mjCPpb3RDQo3M/edit#

* Introductions
* Stack diagram, any missing layers relevant to interoperability? https://docs.google.com/spreadsheets/d/12_03m8QU1J0VaskBEnA97aUXz38kSTskvM7DwfSAPFg/edit#gid=0
* How invested are people in getting interoperability?
* What is the high level roadmap for interoperability?
* Where do we start testing on this?
* Can we carve out a small piece that everyone feel they have in place to start aligning interop?
* Structured credential data model https://github.com/w3c/vc-data-model/pull/788#issuecomment-896734277

![](https://i.imgur.com/XQpIBCr.png)


#### IIW
We should present the work going on and get more people to engange in this future work at IIW. So lets think about a session.

How do we make sure this work differentiates from the whimsical diagram, or atleast stays up to date? https://whimsical.com/decentralized-mapping-exercise-clustered-LJJ1rizUQcYcL7MUwqWbTn

# Previous meetings

## Agenda - 29 Sep - EU time
Authentic Data & KERI and Certificate Transparency - Dave Huseby organized by Kaliya

## Agenda - 22 Sep - US time

*Meeting postponed to a later date*

The second-part followup to the "Library interop-polooza" discussion two weeks prior, which had participation from Aries, MATTR, Spruce and Veramo.

follow up - Agenda worked on here. Will be posted when last comments are resolved: 
https://docs.google.com/document/d/1wWl442DQK0dHhtL8HHsbdtbpMxRL-_mjCPpb3RDQo3M/edit#

1. Introductions
2. Stack diagram, any missing layers relevant to interoperability?
   https://docs.google.com/spreadsheets/d/12_03m8QU1J0VaskBEnA97aUXz38kSTskvM7DwfSAPFg/edit#gid=0
3. Structured credential data model
   https://github.com/w3c/vc-data-model/pull/788#issuecomment-896734277
4. How invested are people in getting interoperability?
5. What is the high level roadmap for interoperability?
6. Where do we start testing on this?
7. Can we carve out a small piece that everyone feel they have in place to start aligning interop? 


## Agenda - 15 Sep - EU time

Mozilla objection we talk about what that is, what are potential ways forward and what the DID WG thinks about this
Brent Zundel comes and shares.

The objection can be seen here: https://lists.w3.org/Archives/Public/public-new-work/2021Sep/0000.html
```
Why public vs private objection: Mozilla pressed the wrong button.
Formal objections happen, and response should come from WG group chairs.
Not requiring specific DID method: out of scope in charter from start. Compare to HTML img tag - no specific image format required
Having DID document shows interoperability
Divergence: comparison with 300+ URI schemes, 78 URN schemes
But underlying common data format
About centralization: Cannot define misuse of the technology. But have rubric to facilitate subjective evaluations.
About multiple data formats (JSON, JSON-LD): potentially valid complaint, but inappropriate timing. We could have just picked one - the group had hours and hours of conversation about how to and whether or not to do it. Objectors could have raised this 8 months ago and we could have officially addressed it. Cannot do anything about it now except note the concern and apologize.
Proof-of-work (PoW) blockchains vs. ethical web principals (EWP). EWP is great but not recommendation / normative guidance - don't reflect consensus of W3C and not part of the process - are a set of what one group thought were good ideas. They are indeed good ideas, but there is no requirement that we adhere to them. Encouraging low energy consumption, attacking existence of DID methods requiring on PoW blockchains. Assume PoW is a horrendous waste of energy: begins with statement as though it is fact, but a lot of people don't agree with it.  Wanting the DID WG to make a formal position about all PoW blockchains and enforce that no PoW blockchains be allowed to support the back-end of a DID method... We can define the technology but not how people use it. That is assuming PoW is as bad as claimed. Complaint asks us to stick to a document that is not official. DID Spec does not require verifiable data registries, blockchains, distributed ledgers, Bitcoin, Proof of Work - not statements about these things. It's possible we could say you shouldn't do that - but the WG doesn't feel it would be appropriate to try to normatively define what a DID method is and isn't allowed to do - especially in light of the ongoing debate about PoW - if it is the only way to pay for the level of decentralization that some security stories call for. We would like to put something in out implementation guidance saying you should be aware of these concerns - but we may not be able to come to consensus on it. May be a red herring... some of the objectors in the past have publicly supported blockchains that use PoW.
The public statement by Mozilla names other groups. Microsoft did not formally object to the specification - they joined the WG and were relatively active in it. You can't assume what the other formal objections were based on the contents of this one. But they do echo those points. There were three formal objections, all of which made the same sort of set of points. Mozilla's was the only one that they pushed the wrong button on.
What to do: what DIF and ToIP have done: statement of support for decentralized identifiers. If people say "it's dead now", point out that it's not - has objections, ongoing debate. In our opinion, the objections don't have a leg to stand on. Combating the FUD. We'll just have to live in anxiety for a while.
Snoore: Are there any anxiety-removing elements that one can do?
Brent: not really. Process doc is explicit about there being no time limit on the director's deliberation. Call for Review for when we went to Proposed Recommendation ended. At that point, 3 formal objections had come in. Now we have this undefined period of time - takes s long as it needs to take - for the director to hear both sides, gather evidence, and learn about things. That process, unfortunately, takes a long time. We at the DID WG would really prefer if the director had gotten on the phone with us immmediately - and said, these objections are baseless and here are the reasons - we really would have liked that, and it would have been done. I hope in next few weeks, chairs of the WG will get to meet with the director. Then we'll find a time when we can all meet with the director, and hopefully get a decision. THis is probably going to take at least another month, and it's going to be uncomfortable. We can reflect on the fact that process-wise, we have done everything we were supposed to - and we can back that up with documents. Not much else we can do.
Snoore: Hours of talk on this point...?
Brent: The JSON-LD one. Our actually only official face-to-face (F2F) meeting was in Amsterdam. It was January 2020. The bulk of conversation was around how to deal with these two very similar but subtly different representations of a DID document. The conversations that we had while in Amsterdam were what gave birth to the "abstract data model" that we introduced in to the specification - which for a time gave birth to the idea of serializing into CBOR. Unfortunately, the CBOR serialization wasn't able to mature well enough to end up inside the spec - but it was there for months. Not a conversation we have had, but a conversation that if the objectors felt was really important to have, they could have jumped in and had it with us.
Snoore: Other questions?
Kaliya: You are responding with a lot of process points, which I agree with , but is there also responses about the technical - not just about the process - that are actually trying to rebut the technical things they are saying?
Brent: We do have some. With the requirement that we normatively define a number of DID methods, apart from being completely out of scope, the question is then, which 3, 2 - which set of DID methods would be most appropriate for the WWW to say, "these are the official ones". That conversation has kindof been going on in the background for a while. e.g. some people think we may be able to get agreement to define did:key, did:web. But then there is the irony that if you have did:web, you are probably relying on DNS - not really very decentralized. Beyond that, nearly every other DID methods relies on some particular distributed ledger or blockchain - and they all have different security characteristics, different requirements on how we resolve them. For the commmunity to come together and say "this is the one" that we all agree on well enough to define normatively - on a technical level, what they are requiring it may be impossible for a QG to come to consensus - not only the DID method specifications themselves, but on which ones to start with in the first place. The other rebuttal there is, are you actually going to participate this time around? How dare you suggest there is more work to be done and you go off and do it? That's not how process works, how specifications are written. That's "go find a rock" - "no that rock is too grey" - "no that rock is too small". If there are members that have opinions on what ought to go in a spec or not - or ought to be worked on by a group or not - then the appropriate course of action is for that member company to join the working group and participate. For them to complain we haven't done the work, and also not participate in the work in the future, really means that, because they haven't claimed that we are doing is harmful in any real way, they really can't back up the statements.
Like at DIF, if people want to create a work item, if someone outside the WG says, "hey C&C WG, you should really work on X, Y, Z" - C&C WG would say, "good to know, would you like to join us, submit a work item and get someone to work with you? 
W3C also recognizes it as an absurd notion - to say a WG should do something, and then disappear and not participate.
Chris Kelly: I get Kaliya’s angle… it seems youa re trying to circumvent the technical arguments with the process arguemnts… but it’s not the case… the charter has been fulfilled and delivered upon. If it shold have looked differently, that should have been clear from the start. It’s too late yo move the goal post…
Brent: It’s possible to disagree on technical solutions. “We think it should be JSON”, “We think it should be JSON-LD”… it’s harder to disagree on Process. The reason we are basing everything on a process argument… They can claim that we don’t have interoperability… But we can, according to the process, show that we have done everything we are supposed to do to show interoperability. We did what we said we would do in the charter… at least two implementations for each normative statement. They are saying “real interoperability requires more than that” - like Chris said, they are trying to move the goal posts.
Chris: Also important to remember that the standards track is a long and winding road, but not a definite endpoint. v1. Hopefully will mature… But having a clearly defined start point is important.
Brent: Couldn’t have said it better myself.
Kaliya: great.
Snoore: Has this objection shaken other groups’ reliance on DIDs?
Brent: At first yes, some groups not familiar with process. Thought “Oh, it’s dead”.
Back up… it’s not dead, not even dying.
Some things need to be addressed - or even how appropriate it is to bring up those things.
Then it goes to the director. We rely on process… pretty unlikely it will not be a rec. Possible it will be delayed. Very unlikely to disappear.
Snoore: So if back to draft… two more years?
Brent: It’s possible director will agree with concerns and say yes, need to
recharter for two more years. But conversation in advance of that decision will need to be, exactly what does the new charter look like - and are you going to participate. It’s one thing to say we have concerns and go back draft…
… We’d love to have Mozilla on board. We would like to engage with others.
… No valid reason we shouldn’t make it a recommendation and then move forward.
… If you want to participate in defining scope of work, you can do so.
Snoore: thanks for sharing. Core foundation for a lot of things. Good to know you guys have it under control. Interesting times.
Brent: For me the worst part of it is the waiting. I’m confident in what the resolution will be, and what the next steps for me to take will be - but there are steps othe rpeople need to take before I can take those - and I’m just sitting here waiting for the next step to have - and it’s oncomfruatebl. I appreciate the support from DIF and this group in particular.
Snoore: We appreciate your work.
Chris: I also want to thank Brent for taking us through this. This is the process. It’s important people refute statements about it being the end. We don’t need to be making big statements - but it’s important to remain positive, say good statements. Process is ongoing, we feel positive about it, believe in our work, watch this space.
```

## Agenda - 8 Sep - US time

Library interop polooza with Aries, Mattr, Spruce and Veramo

1. Aries presentation - aries protocols and test suite   
2. Veramo presentation - work done towards did com and potentially credential exchange   
3. Spruce presentation - unsure what would be different from veramo?   
4. Mattr presentation - Talk about how they tackle introp in SVIP and participation of VC http api   

### Announcements

Juan (Spruce) on new interoperability efforts:
- [JWS cross-conformance with JSON-LD](https://blog.identity.foundation/dif-grant-1-jws-test-suite/), work item within DIF under Claims & Credentials group
- [Proposed LD-JWT interop work](https://github.com/w3c-ccg/community/issues/198) item within W3C Credential CG

### Presentations

#### Aries by Stephen Curran

Aries: introduction, implementations, interoperability and test harness

https://docs.google.com/presentation/d/1QzE0wBSZyYSCcwbU6huEDfspRKqnokE2WEwi-RitHVc/edit?usp=sharing

Interop test suite information at https://aries-interop.info

- Biggest concerns w.r.t interoperability getting more implementations to participate in interoperability and publish results

#### Veramo by Oliver Terbu

#### Spruce by Juan Caballero

Web documentation at https://spruceid.dev/docs/didkit-packages/cli

* command-line and HTTP API tooling for various decentralized identity mechanisms
* focused on LD tooling first

#### MATTR

Update on DHS/SVIP plug-face

web-based documentation at https://learn.mattr.global/api-reference/v1.0.1

Goal is to enable primitives to exist to compose for use cases like interoperability testing

### Layers needing interoperability

Model from Oliver: 
* VP/VCs -> Data Model, Crypto (Which curves? Do we need to touch upon this now),  DID methods
* VP request protocols (aka present-proof etc) + Data Model (e.g. Presentation Exchange)
* VC issuance protocols (aka issue-creds etc.) + Data Model (e.g. Presentation Exchange)
* VC revocation

### Questions to ask ourselves during layer discussion

* What functionality have each library(company) implemented and tested and used?
* What part of this layer interop is DIDCom solving?
* What part of this layer interop is WACI PEX solving?
* What part of this layer interop is PE exchange solving
* What part of this layer interop is VC http api solving?
* What part of this layer interop is the Aries protocols solving, Aries Protocols in general, the set of protocols in AIP 1.0 and AIP 2.0 in particular?
* What part of this layer are the mentioned tools stepping on each others feet?
* What part of this layer are we not seeing or mentioning where interoperability is needed?
* Are we remembering that the same interop has to happen on a browser as well as a mobile phone? What layers need to be set in motion to have that ready?

### Diagram of various kinds of credentials
https://github.com/w3c/vc-data-model/pull/788#issuecomment-896734277

### Goal
Make sure that we are having the right efforts in place and we believe these efforts will move things forward in the right direction. Highlight where there might be missing efforts.

#### Appendix
Working doc: https://docs.google.com/document/d/1wWl442DQK0dHhtL8HHsbdtbpMxRL-_mjCPpb3RDQo3M/edit#



## Archive 

Older agendas and minutes moved to separate files: 
* [agenda2021.md](https://github.com/decentralized-identity/interoperability/agenda2021.md)
* [agenda2020.md](https://github.com/decentralized-identity/interoperability/agenda2020.md)

<!-- footnote links for prettier linking -->
[edit-minutes]: https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw
[eu-zoom]: https://us02web.zoom.us/j/86023611186?pwd=WmVqWk9HOWRyK3l4TjhXaGgxa1VjUT09
[us-zoom]: https://us02web.zoom.us/j/82475629186?pwd=a1RjenhHcEo0a0FKamdTdzVNaDNzUT09
[dif]: https://identity.foundation/interoperability/
[repo]: https://github.com/decentralized-identity/interoperability
[maillist]: https://dif.groups.io/g/interop-wg
[reference]: https://www.notion.so/dif/be6763341a014d248f655aea187d7890?v=c9ac48a07f3d411c9a1bea32b55f7e76
[recordings]: https://docs.google.com/spreadsheets/d/1wgccmMvIImx30qVE9GhRKWWv3vmL2ZyUauuKx3IfRmA/edit#gid=2146749098
[parking-lot]:
https://github.com/decentralized-identity/interoperability/blob/master/parking-lot.md
[iiw]: https://internetidentityworkshop.com