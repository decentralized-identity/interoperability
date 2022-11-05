# Interoperability WG Rolling Agenda & Minutes 

[![hackmd-github-sync-badge](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw/badge)](https://hackmd.io/K5BWQ_rvSTKJ-BxeWINYfw)

[DIF Website][dif] | 
[*GitHub repo & Issues*][repo] | 
[Mailing list][maillist] | 
[Reference shelf][reference] | 
[Potential future topics][parking-lot]

## Join the call!
The Interoperability Working Group meets every 2 weeks via Zoom:
 
[Join 0800PDT/1700CET/2200ICT call][eu-zoom] | 
[Visualization of timezones](https://www.timeanddate.com/worldclock/converter.html?iso=20210802T150000&p1=37&p2=224&p3=179&p4=220&p5=56&p6=44&p7=28&p8=240&p9=22)

[Meeting recordings][recordings]
 
_For this call, you are encouraged to turn your video on. This is a good way to build rapport given we are a large, disparate group with constant new members._

_This document is live-edited DURING each call for minutes, while a stable copy lives on our [GitHub repo][repo]. Feel free to propose agenda items either via issues or by messaging on DIF Slack._

## November 2, 2022

### Announcements

- We now meet every other week
- No meeting in two weeks (Nov. 16) due to IIW

### Introductions

### Agenda

- Peter Langenkamp presenting about a cluster of interoperabilty centered on TNO EASSI.
    - https://eassi.ssi-lab.nl/
    - https://eassi.ssi-lab.nl/docs/about

Transcript:

[Introductions]

Kaliya Identity Woman: Hello, sorry to be slightly late. Welcome Peter.

Peter Lagenkamp: Thanks

Kaliya Identity Woman: To have you here and we've got a good group so far. Hi Rueben.

Reuben Bailon: Hey Kaliya, how are you?

Kaliya Identity Woman: Good to see you.

Reuben Bailon: Good to see you too.

Kaliya Identity Woman: Um,so,we're recording already? Great.Um, and Brent is here.

Brent Shambaugh: [inaudible]

Kaliya Identity Woman: Daniel is off because it is his wife's birthday. Um, so um, we haven't met for awhile or at least, I haven't been on a call for awhile. I think we had a call to go over the results of the [hand guesture] the survey we did
and actually this call and Peter's presentation are a result of the survey because we asked about clusters of interoperability, uh, and we found one, we didn'tm I didn't really know about and we asked the the one of the folks that was [inaudible]...part for leading
that cluster at TNO to come and present. That's out main, um, activity today. But I also just because we are trying, um, working on being inclusive good communities, um, wanted to open the floor up if there was somebody who is new the call who wanted to introduce 
themselves and just say hi to other folks, do that first before Peter presented.

Frank Hinek: Yeah, I'll say hi. Uhm, Frank Hinek and uh, I've just recently joined the team at TBD to work on the product and platform strategy. working closely with Daneil Buchner who I think some of you guys know

Kaliya Identity Woman: Great.

Frank Hinek: And, uh, looking forward to the content today.

Kaliya Identity Woman: Yep. 

Jorge Flores: I'll jump in. Good morning everyone. I'm Jorge Flores, cofounder of Entidad. We're a benefits coorportation working in the non-profit space, uh, specifically working on a farmworker ecosystem use case. I presented a couple of days ago, at the uh,
open wallet foundation architecture task force and look forward to,uh, being a little more involved in this community.

Kaliya Identity Woman: Great, thanks so much Jorge. Anyone else? Um, everyone else I know, so, okay Peter love to have you share about what you guys have been doing about your interoperability

Peter Lagenkamp:
Okay well. First of all, thank you for the invite. I am Peter Lagenkamp, I work at TNO. For those unfamiliar, TNO is the Netherlands organization for applied scientific reasearch. It's an organization of about three thousand employees active in all kinds of 
different fields. But, we've got a unit ICT, and within that department that also concerns themselves with self-soverign identity, and that is a topic that I work on. The other topic being secure multi-party computation.
One of the things that we have worked on at TNO, is something that we like to call an SSI Wallet Gateway. I will explain what it is over the course of this short presentation. I met Kaliya at IIW, I may have seen some of you there as well.
For those who were there, I also had a session at IIW about this topic [1]. So let's see if I can't share my screen. Okay, You should be able to see my screen now.

Kaliya Identity Woman: Yep.
Limari Navarrete (DIF): Yep.

Peter Lagenkamp:
TNO EASSI - An SSI Wallet Gateway. SSI as a service. What is this all about? I can skip over a couple of the first slides probably because you are all working in this field. SSI is a different way of sharing data compared to the normal way of sharing data, where the
person is in the central position, so organizations don't communicate about that person, but via that person. Information is exchanged via the person's wallet, on their phone for example. And as you all know SSI is still a work in progress, a lot of standardization
efforts going on with the DIF, W3C, and other efforts. Focus on different layers of the stack, from wallets on the bottom all the way to issuing and verifying at the top. With Indentifiers, credential types, credential formats, proofs, APIs & Communication Protocols
in between. So, if we focus on the bottom of this stack, the wallets, we can see that there are quite a few different types of siloes available to us. So if you go to the app store and search for IRMA, there is also Jolocom, uPort, Evernym, and many many more.
And as you all probably know, if you go to a conference related to SSI, you're very likely to encounter a new wallet that you've never heard of before. This can lead to problems. So, in this picture on the left it's Albert Heijn, a supermarket in the netherlands.

Suppose the want to hire a new employee. They need some information about the employee from the municipality, that the person lives in. And in this case, the municipality of Groningen. Groningen has issued some information to the IRMA wallet of that person, and 
Albert Heijn can request that information from the IRMA wallet of the future employee, to check the information. Wonderful, very easy, but now suppose there is another employee, and that employee lives in the municipality of the Hague, and Hague has decided to use
Hyperledger Indy based wallet. Now Albert Heijn would also have to support that type of wallet ... and there are many different protocols of course. So how will this work in the future? Will we have all of these parallel options available, or will we get one
single standard to rule them all? So will we get the equivalent of VHS, or will we have all sorts of similar solutions like document formats? Well, we saw this as a potential problem, cause there is no such standard yet, and we decided to take some inspiration
for the payment service provider model. So if you have a web shop, and you want your customers to be able to pay, you don't care if they use Paypal, if they use a credit card, a ban transfer, as long as the money gets your way of course. You also don't want to
deal with the hastle of having to implementing a credit card payment yourself and figuring out how to communicate with the PayPal API, and all of the different methods available there.

Instead you can go to one of the payment service providers, will take care of all that work for you. So you can simply redirect your customer to a payment portal, and the customer can select the payment method of their choice. So what we want to do is build equivalent,
but for SSI. 

So in this picture we have the supermarket on the left, the municipality on the right, the customers, the holders on the bottom, and they have different wallets available to them. And then there is the gateway, which we dubbed EASSI.

So our solution, SSI Gateway, with the aim of making it easier for verifiers and issuers to support a wide variety of wallets, and also taking care of any potential breaking updates that may occur. So if one wallet is updated, then not every issuer of verifier
will have to go through the trouble of figuring out how to make this work. It is just the SSI service provider that will have to figure out how to make this work. And everything else should stay the same for the issuer and the verifier. The holder should have the 
benefit of being able to use their perferred wallet, as long as the wallet meets certain criteria from the issuer and the verifier then the holder should otherwise be free to make their own choice based on maybe the user interface or some other quality of life
differences between wallets. And, well here at the bottom you can see an image of a demo that we built for the flex industry. It's , what's the English term..companies that send employees to other companies to help out.

Kaliya Identity Woman: A temporary worker.

Peter Lagenkamp:
Thank you. Yes. And if they want to register a new employee there, they migh need to check the identity of the person first. They can click the check indentity button, and they will be redirected to a portal where they can select the wallet that they perfer to use.
And once they select their preferred option, they will from that point onward have to deal with the standard flow for that specific wallet.

To make this work we have this schematic. The top there is the business layer, so that is the web shop equivalent. They have different credential types, credential schemas between them, that they might want to issue or verify. At the bottom there is the different
wallets that exist. In the orange block that is the SSI Wallet Gateway where we try to offer an easy to use as possible API to the business. And there is some generic stuff happening of course, and there's connectors to those different protocols that exist.
Our service is completely agnostic to the ways that the different wallets might work. Everything specific about those wallets is implemented in the connector layer. And as long as it is possible for someone to handle the, write the code for issuing or verifying from and to
and to that wallet themselves they should in principle should also be able to build a connector for this service.

Of course we cannot just connect to, build connections for specific wallets. You could also envision connectors for presentation exchange and similar solutions.

I think an e-mail was sent to all of you in preparation of this meeting with a link included on this slide [2], but I also will be sharing these slides after the meeting. This is our main page (https://eassi.ssi-lab.nl) explaining what out main idea is all about.
It has links to documentation of the service, a demo instance of the service, and all of the code is available open source on GitHub (https://github.com/tno-ssi-lab) where we've used docker and docker compose to make it as easy as possible to run your own instance
of this service should you want to do so.

Once you have this service up and running, or if you decide to use the demo service hosted by us, there is four different steps One is registration, two is definition of specific credential definitions, and then there is the credential mapping, So the wallet specific
credential defintion could be a password credential for Trinsic specifically, a password credential specifically for Jolocom. Then the credential mapping is basically telling the service if we're talking about a password credential we need either a password
credential for Trinsic or this password credential for Jolocom. Once this mapping is done, then you can start issueing and verifying credentials through this service.

And finally there is two links here. One to the demo service (https://service.ssi-lab.nl/utils) and one to the bare bones demonstator for issueing and verifying of a name credential (https://namecredential.demos.ssi-lab.nl/) Currently my name, but I am planning an
update so anyone can issue their own name.

Kaliya Identity Woman: That's great. Uh. Cool. So a couple questions. I'll open it up to anyone who wants to ask questions please raise your hand. So this set of tools you built. Is it, um, it's open source?

Peter Lagenkamp: Yes it is.

Kaliya Identity Woman: That's excellent. And then it is really designed so that a grocery store or a potential employer. They can leverage SSI but they don't have to get into a wallet war, if the wallet that the people that they are interacting with is in the
code base. Like if the connector is in the code base.

Peter Lagenkamp: Exactly, that's the basic idea. We want to ensure that having to pick a wallet won't be an issue, a um, something preventing someone from getting into the game of using SSI. So we, when talking to different companies that had heard about SSI we
often got questions, which wallet should we use.

Kaliya Identity Woman: Right

Peter Lagenkamp: Should we be using, and that shouldn't be the main concern for many of those companies. Certainly not yet, and maybe not ever. We really want them to get started using SSI. Whether they are using Trinsic. Whether they are using Estaus. Well,
there are many different possibilties. We don't want that to be prohibiting.

Kaliya Identity Woman: So how much uptake have you seen. Is this being provided as a com ... like it's one thing to have open source code. It's another thing to run it in production. Are there folks commercializing this running in production?

Peter Lagenkamp: No. No. No. No, we're not at stage of production yet. That also has something to do with the nature of TNO. So I breifly, uh, mentioned that we are involved in lots of different fields but I forgot to mention that TNO is a very specific position
here, and that's TNO was founded by Dutch law about 90 years ago..basically to bridge the gap between academia and business. So once something becomes too applied for academia but still too theoretical for business that's where TNO was supposed to step in..
to help innovation.

Kaliya Identity Woman: Yeah.

Peter Lagenkamp: And that means that TNO does not usually go beyond the proof of concept in building something. Then we hope that some other company will continue this work, or sometimes we do these projects directly for a company. In the case of TNO EASSI,
we've gone a bit beyond what we normally do and we are currently also looking into finding other, yeah, parties interested in developing this further.

Kaliya Identity Woman: Cool, so it is sort of in that phase now. You've done your job. You're hoping..

Peter Lagenkamp: Yeah, that's mostly it but since we're still in the game of SSI we with some regularity use our own service for different projects where we just want to issue or verify using a wallet and having this service has saved out buts on a couple of occasions.
because, with SSI still being relatively new it can be that a specific wallet you're relying on doesn't work at the exact time you're giving a demonstration and then we are able to simply switch to using a different wallet.

Kaliya Identity Woman: Got it. All right. Okay. Are there other, other questions for Peter?

Jorge Flores: Hi Peter. You can just clarify, I'm (inaudable) Is the choice here that is being offered from the perspective of the issuer and the verifier organization and not necessarily, the uh, the end user?

Peter Lagenkamp: Yes. Exactly. Yeah, so, some people who have heard me talk about this are reminded of a different effort that seems a bit similar and that is polyfill CHAPI, I don't know if you've heard about that.

Kaliya Identity Woman: Yeah.

Peter Lagenkamp: Polyfill allows a user, once they want to issue a verifiable credential to select the wallet that they want to use. But the caveat is the issuer and the verifier still have to do all of the implementations in order to support the different
wallets that the user might select. And, we're basically on the other end, so um, maybe a cooperation between what we've build and what polyfill CHAPI is working on would be interesting.

Kaliya Identity Woman: You know, I think. Have you spoken to Manu?

Peter Lagenkamp: Yes I have. I have a meeting with the people from CHAPI a couple of weeks ago.

Kaliya Identity Woman: Okay, great. Yay, that's what I love to hear. Keith.

Keith Kowal: Thanks for the presentation Peter. I think what strikes me is you're kind of acting. You're literally acting as a middle man service between wallets and issuers and verifiers, and that would seem to...I mean I'm just trying to go through my mind
how that would work with a lot of different trust architectures, right? Because I am not trusting that I am talking to the issuer or verifier. I'm trusting that I am talking to you as the middle man. Because, you're the one doing, you know, checking of revocation
status, checking signatures, I'm guessing by default because there are such huge differences and other prot... other standards that you probably have to do all of that heavy lifting. So how can I trust that maybe you have fake verifier pretending to be somebody.
You know, so much of the trust architecture is that I as the holder am directly communicating with the verifier, and how do you see that working when you have a middle man service like yourself?

Peter Lagenkamp: Uh, well as I, as I mentioned.We do have the service running and you can try to use it for yourself, but it is also possible for anyone. Any issuer or verifier to run their own instance of the service. So you don't have this problem of the middle man.
That's made possible by all of the code being open source. Um, it would also, what we also want to look into further into whether it is possible to have a service run by a middle man but in such a way that middle man does not have any access to the data being 
exchanged.

Keith Kowal: Okay.

Kaliya Identity Woman: And then Daniel. 

Daniel Bachenheimer: True, this is really cool. Yeah, so I was thinking some more, but then when you said it was all open source. Okay, so the idea is then to, you know for, um, for a solution provider to use your open source code as kind of middle ware so that
um, it's not necessarily interoperable but it's middle ware so that then you could deal with a uPort or a Jolocom, uh, wallet. So I get that, but um the, and I'm thinking of okay, what about, um, Zero Knowledge Proofs, and all of these, um, bits that we want to use SSI
for, selective disclosure, and how is that um, portrayed to the individual, and I think the answer is, that is that you would pick one wallet over the other based on it's capabilities. Right?

Peter Lagenkamp: Right, but usually it would be the um, the verifier in this case, making that choice right? And so, in these credential mappings that I mentioned, um, the issuer and the verifier are free to include, uh, the wallets that they want to include.
So if we only want to offer, um, um, certain wallets as an option to the user we can, and ideally the choice is simply based on the actual features supported by that wallet and not just, uh, us liking particular people working at a specific wallet organization of course.
But if you go to one of the demos that we have here [flexSSI prototype slide] The top link allows us to register using out passport, and we have a check identity button, and now we see all five options that we currently support. Jolocom, IRMA, Esatus, Datakeeper,
and Trinsic. But, if we go back and we have a different workflow. Here we wanted to show the use of selective disclosure, and wanted to share some skills. Let's see here. For this demo the verifier had opted to only, uh, accept credentials from Estatus and Trinsic, cause
those were the only two wallets at the time that supported the features required.

Daniel Bachenheimer: Interesting, Okay. Then we here with the European Digital Identity Wallet, um, uh, it wants, um, to support, let's say traditional SSI but also mDL. Have you looked at, um, doing anything, uh, with the ISO mDL?

Peter Lagenkamp: Un, no I haven't. Let me take a note. Have a look later now. I haven't at the moment. Well I did mention our project is agnostic to the ways that wallets,uh, work. In principle, A wallet does not have to be based on SSI. Uh, in principle you could 
[inaudible] use the service to exchange json formatted data, just plain JSON formatted payloads. So, not not to, I don't know much about the mDL specifically, but I imagine it would be possible to support that as well.

Daniel Bachenheimer: Right. Interesting. Okay. And then the other things that the European Digital Identity Wallet specifies, at least in its draft. Because it's like, Um, high level of assurance [inaudable] high to authenticate to the wallet itself. So before I could even exchange.
I know that you are a middle tier layer so it's probably outside of you, the scope of this project but you know when they, the Europeans contemplated wallet it's more than what an Aries wallet is. You know they're talking about some user interface. Some um, uh, means to 
authenticate to the wallet things like that. But that's out of scope for your current thinking I would presume, right?

Peter Lagenkamp: Um, I think it is, but um, but not entirely. Sure.

Daniel Bachenheimer: Okay, Sam is saying that that's not necessarily out of scope for an Aries Wallet, but [inaudible] 

Sam Curren: No, it's definately part of it. The, um, the, something that is not really approached in scope at all is like payment coordination stuff that is being contemplated by the Open Wallet Foundation. So, that really hasn't been in scope at all. But as far
as presenting credentials, connecting, authenticating, that's all, that's all within scope.

Daniel Bachenheimer: Okay cool yeah. Maybe we'll talk, have a chance to talk about that more at IIW. Especially the different levels of assurance associated with authentication. Cause that's going to be key, yeah to various business use cases.

Sam Curren: Totally, and I suspect that the presence of the open wallet foundation and the community will have lots of conversations at IIW about wallets generally speaking. So, it's going to be {inaudabile}.

Daniel Bachenheimer: Yeah, Good. Good.

Kaliya Identity Woman: Geat, um. Keith, but is this a new question?

Keith Kowal:  Yes.

Kaliya Identity Woman: Great. [laughing] Sometimes people don't put their hands down. Go ahead.

Keith Kowal: This is more of an open question for the group. I guess.I mean, I think it is really interesting your approach. Because when I think about, I do want an ecosystem where there's lots of wallets, but I kind of think of it as in the web3 context. There's
Ethereum, and I can download a plethora of wallets to manage my Ethereum account, right. And they all kind of work on a similar standard. I guess my view has always been that at country levels, and at regional levels, yes, we do hope to see a plethora of wallets,
but those wallets are going to support pretty unified SSI standard, whatever that is. Like, maybe that's AnonCreds, Maybe that's JSON-LD with BBS+. Doesn't matter. I think this vision is saying, er, I know we are in early days., but I think wht you are suggesting is
cause it is not just a plethora of wallets because each wallet supports a unique tech stack underneath it. Sometimes interoperable. Sometimes extremely custom, um, or botique. So, um, I. If we take a country like the Netherlands Peter, like what's your vision of how
SSI will develop in the Netherlands? Do you think there will be a plethora of wallets, each supported their own standards. This issuer in the Netherlands is issuing out in this format. this issuer in the Netherlands is issuing in this format, or do you think over time
in the Netherlands they'll be like a unified standard, but yet a plethora of wallets?

Peter Lagenkamp: Well it's hard to say for certain of course, but um, the Netherlands isn't typically, uh, in a position to force other countries to adhere to standards the we would prefer. Uh, We're very much dependent on trade with other countries for example. Um and
even if it is the case within the Netherlands that we would chose to use a specific wallet for interactions with, um, with businesses and government within the Netherlands. As soon as we would want to interact with a country outside the Netherlands, be it a country
close by like Germany or a country further away like the U.S. or China we also want to be able to interact with those wallets of course.

Keith Kowal: Yes, I agree. I think that's where this type of service would be very useful is when you go... I mean again we're in a future world, who knows. But Like when you get into troughs outside of regional standards when you want to interact. Then I this will,
I mean this kind of stuff would be definately needed.

Peter Lagenkamp:And also, uh, with the European rules, that they're currently working on. Every country will be mandated have, tsupport at least one wallet, uh, but there is no guarantee that all those European wallets will be based on the same technolgy stack.
On the other hand, bank, uh, will have to accept wallets from any of those European countries.

Kaliya Identity Woman: Got it. Interesting. So, um, do you have any companies that are, well maybe you can't tell us this, or maybe you don't even know cause it's open source code. Like are their companies trying to productize this?

Peter Lagenkamp: Um, uh, we have spoken to companies that might be interested, uh, none that I am aware of that have gone so far to actually act upon this further than, uh, inquiry and looking it. Uh, we have worked together with a couple of companies, that have, uh,
used the service for proof of concept, proof of value within their company.

Kaliya Identity Woman: Cool. That's great. Okay cool. Um, is there, in terms of, I'm just curious, in terms of developing this code did TNO do it or did you define, um, what you wanted and hire someone to do it? It's just kind of a curiousity about how these things
get done cause Open Wallet is trying to figure out how it gets stuff done, and so..

Peter Lagenkamp: No, I think this was done in house, um, some of the connectors, um, were built in context with the company behind that wallet. Uh, so for Jolocom, for Jolocom for example, we uh, were in touch with Jolocom on a fairly regular basis. Also was a bit
of pressure on getting that finished because of a hackathon we were involved in. Um, but uh, others, others were, uh, yeah, built solely based on the documentation provided by that [inaudible].

Kaliya Identity Woman: Right. Um. And then. It sounds. I mean it's interesting. It seems a little bit like you are a compliment to the universal resolver. Like you were universal get it in the wallet and get it out of the wallet tool. Right.

Peter Lagenkamp: Mm hmm.

Kaliya Identity Woman: Do you see the potential for this experience [inaudible] to define like a common VC-API out of it. Like are there a lot of similarities between how all of the different projects do it and there is an opportunity for alignment or is it they do
things quite differently?

Peter Lagenkamp: Yeah, so, uh, of course, uh, there's many similarities, uh, between these wallets. Because, they all want achieve a very similar, uh, goal, and, uh, they are all aware of the verifiable credential standard, So there's many, many similarities. Uh, we did come 
we did come across a couple of, um, I would call it striking differences as well in how some of the details were implemented, But uh, overall I would say there is many more similarities than differences I would say.

Kaliya Identity Woman: Okay great. Um. Are you or someone from your team. Oh, Keith has a question, go ahead.

Keith Kowal: Yeah, On the technical differences like how did you deal with ...I am always very curious ... so if you have a wallet let's say that has no concept of pairwise DIDs  and then you want to communicate with an issuer or verifier that is AnonCreds and it needs a pair
wise DID...like to me those kind of differences always stood out as kind of being a technical challenge, because the wallet itself doesn't know what a pair-wise DID is, can't persist it, and yet you need that for the [inaudible] issuer or verifier [inaudible]. So It seems like you would 
almost have to persist the pair-wise DID in your service. I am just using this as an example of where, that's where things can get complicated where you have wallets that don't understand the fundamental thing that is needed by the issuer or verifier, but I wondered
if you ran into that.

Peter Lagenkamp: Uh. Well, not, not really. But um. Yeah, In principle we can at least support the functionality offered by a different wallet if we want to extend that functionality beyond what that wallet by itself offers, we might run into those issues and in
worst case scenario we can simply say certain use cases you can't use this specific wallet ...because the technology isn't up to par.

Kaliya Identity Woman: Interesting.

Peter Lagenkamp: And I think, ah okay. 

Kaliya Identity Woman: Yeah, Um. Any other questions for Peter? Um, I'm looking on the chat. Okay. Great, Are you going to be at IIW Peter? 

Peter Lagenkamp: No, unfortunately not. Not for a second time this year.

Kaliya Identity Woman: Okay, great well. Is someone coming from TNO?

Peter Lagenkamp: No, I'm afraid not. We've um pretty much used all of our uh confrence ...

Kaliya Identity Woman: [laughing..inaudible]

Peter Lagenkamp: for this year

Kaliya Identity Woman: Well in happy news. I don't know, I'm coming..I'm going to be in Brussels for the N..NGI, um, sort of presentation set of things so maybe I will see you there. And thanks everybody for joining us today and we have our next call
on November 30th with Paul Knowles presenting about the Overlay Capture Architecture. And we are, um, looking for our...you know you can always ping us if you have ideas or suggestions um so, let us know. Thanks everybody.

Peter Lagenkamp: [inaudible] Thanks for your attention everyone.

Kaliya Identity Woman: Alright.

Limari Navarrete (DIF): Thank you. bye.

Peter Lagenkamp: Bye.

## Upcoming meetings

- November 16, 2022 - NO MEETING (IIW)
- November 30, 2022 - OCA with Paul Knowles (Human Colossus Foundation)
    - https://bit.ly/3FhT38G

---

## Past Meetings

### October 19, 2022

#### Announcements

- We now meet every other week
- [Human Colossus Foundation releases OCA v1.0 specification](https://humancolossus.foundation/blog/oca-v1-launch)

#### Introductions

#### Agenda

- Hello from the New Chairs! Brent Shambaugh & Daniel Bluhm
- Review Survey on Interop so far
    - [Slide Deck](https://docs.google.com/presentation/d/1lRxa49ZJjrSiWx-4ldLAwWvin5wukenEIXjK5Rj9l24/edit?usp=sharing)
- Get Community Input on what the Interop group should do this "year" (the one that aligns with the school year)

Survey Feedback:

- Insights into who participated would be interesting. (We've since added a field for leaving an email).

Rough minutes from the Discussion and other Suggestions:

- Find the pockets of interop
    - Which companies interop with what other companies; build bridges between the pockets
- Interop testing
    - Don't boil the ocean. Start with small targets. Let the question "what are we trying to accomplish with interop?" guide the targets.
    - Interested in a public assessment framework.
    - Bonnie Yau of IDLab mentioned they're working on a framework, starting from (or modelled after) the Aries Agent Test Harness.
- Approaches to Localization
    - BC Gov gave a demo of a localized wallet app with credential localization using OCA. (Link to demo pending)
    - Other approaches?
- What does "interoperable" mean to different communities?
    - Often gets thrown around in marketing jargon but what are some real metrics for defining whether something is "interoperable?"
- Wallet UX
    - There might be some other working groups focused on UX already. There might be some overlap with interop.


### 5th of October 2022 - EU Time

- Announcements
    - Interop Survey: https://forms.gle/4YqrjFcB5Fnbcrgz8
- Decoupling AnonCreds from Hyperledger Indy and creating extensible resources on-ledger with DID URLs by Ankur Banerjee
    - Wanted to support primatives of both AnonCreds and other credential format.
    - Found that this was relevant not only for AnonCreds primatives but other resources as well.
        - Centralized services (like schema.org) are a single point of failure.
        - "Linkrot" breaks links on the web all the time.
        - Decentralized resources are tamper-evident and censorship resistant.
    - Types of resources that benefit from being on-ledger
        - Schemas
        - Overlay Capture Architecture
        - Revocation Registries (whether W3C revocation lists or AnonCreds)
        - Logos and other brand elements
    - How do we solve the problem?
        - DID Spec allows for paths
        - DID URLs to resources stored on ledger
        - Resources signed by DID
    - Demo of Animo + Cheqd using AnonCreds resources: https://www.youtube.com/watch?v=QILE98VMwZw
    - CLI Demo: https://www.youtube.com/watch?v=PkAJe2ayaJU
    - Blog post: https://cheqd.io/blog/anoncreds-indy-pendence-1
    - DID URLs discussion on TOIP wiki: https://wiki.trustoverip.org/display/HOME/DID+URLs+for+Digital+Resources+Specification
    - More info on Cheqd: https://learn.cheqd.io/overview/cheqd-101

### 15th of June 2022 - EU Time
Andrew Hughes comes for a round two, EU friendly time and talks about MDL and the work he is doing for that standard. He was very active during IIW April 2022 and had some great sessions on MDL then. Lets hope we can discuss much of the outcome of those sessions

https://lists.identity.foundation/g/interop-wg/message/148

#### Notes
Notes doc: https://docs.google.com/document/d/1vWZrxDVYeXMjZEevgcll5KUA-R-sCJ_NusTY3WXSEIk/edit#bookmark=id.ooi00xbr9col

### 8th of June 2022 - US Time
Andrew Hughes comes and talks about MDL and the work he is doing for that standard. He was very active during IIW April 2022 and had some great sessions on MDL then. Lets hope we can discuss much of the outcome of those sessions

Note docs: https://docs.google.com/document/d/1vWZrxDVYeXMjZEevgcll5KUA-R-sCJ_NusTY3WXSEIk/edit#bookmark=id.mm2zhc120mad

### 1st of June 2022 - EU Time
[Validated ID](https://www.validatedid.com/) comes and presents to us what it means to be EBSI conformant. We discuss how this is aiding interoperability
https://ec.europa.eu/digital-building-blocks/wikis/display/EBSI/Become+conformant#

### 25th of May 2022 - US Time
Cancelled
### 18th of May 2022 - EU Time
Cancelled
### 11th of May 2022 - US Time
Cancelled

### 4th of May 2022 - EU Time
IIW recap on interoperability, roundtable style to review what everyone joined in on

We need to socialize the new meeting format for DID Com Usergroup happening on Discord. Invite: https://discord.gg/eNN4Wns6Jb
Format: https://hackmd.io/@dhh1128/Sk5_Gb2J9
Mailing list: https://lists.identity.foundation/g/didcomm-usergroup

### 27th of April 2022 - EU Time
Cancelled due to IIW focus

### 20th of April 2022 - EU Time (NOTICE EU TIME)
Cancelled due to issues with time changes


### 13th of April 2022 - EU Time
CCG Roadmap discussion part 2

### 6th of April 2022 - US Time
CCG Roadmap discussion - https://docs.google.com/spreadsheets/d/1wgccmMvIImx30qVE9GhRKWWv3vmL2ZyUauuKx3IfRmA/edit#gid=2146749098&range=B99
### 30th of March 2022 - EU Time
Missunderstanding of responsibilities and time frames, this meeting was cancelled


### 23rd of March 2022 - US Time
Trust Alliance New Zealand - https://trustalliance.co.nz/
Who are they, how do they support the ecosystem in a good way and what are their view on interoperability

### 16th of March 2022 - EU Time
Timezone issues created a bunch of confusion, so we rescheduled

### 9th of March 2022 - US Time
CANCELLED

### 23rd of Feburary 2022 - US Time
CANCELLED, join the DIF F2F Meeting  -https://www.eventbrite.com/e/difcon-f2f-virtual-3-tickets-162786327287
### 16th of Feburary 2022 - EU Time
CANCELLED
### 9th of Feburary 2022 - US Time
Bob Blakely is coming to share with us an reflection of the SAML interop work. So we can learn from history
### 2nd of February 2022 - EU Time
QR Code part 2, see agenda 8th of december for context
### 26th of January 2022 - US Time

### 19th of January 2022 - EU Time
We will have a new year kickstart discussion. Revolving recent interop movements happening the last couple of months.

Preparing us for real interop for IIW 34 - April 26th-28th

Our perspective on potential interop targets:
We believe that it could be possible to have interop testing around JSON-LD ZKP with BBS+.  
We are also interested in interop around exchange protocols and seee WACI-PEX as haveing a lot of potential as the exchange protocol as it was designed to bridge between the Aries world and SVIP world.   
***Lets discuss both these proposisions.***
    

We believe test suites should be built, how?    

What is needed to get to JSON-LD ZKP with BBS+ interop? Where are they bottle necks? What are the key groups that are or will be working on key parts. 

What is needed to get to WACI-PEX interop?Where are they bottle necks? What are the key groups that are or will be working on key parts.

### Scope
* WACIPex
* JSON-LD 
* ZKP with BBS+

#### Summary
Profile of interoperability, it has been used alot of before to land something acknowledgeble.
Profile are useful to drive interoperability to a flexible spec that can drive things forward.
WACIPex is a profile

What other profiles to others have?
German community says it is a bit complex question. Issues with BBS+ signatures as of today.

AIP Interoperability Testing: https://aries-interop.info/
AIP profile v1.0: https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile#aries-interop-profile-version-10
AIP profile v1.0: https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile#aries-interop-profile-version-20

See recording and chat for further intro



### NEW YEAR BREAK - 12th of January 2022
### CHRISTMAS BREAK - 5th of January 2022
### CHRISTMAS BREAK - 29th of December
### CHRISTMAS BREAK - 22th of December

### Agenda - 15 Dec - US time
Transmute and Karyl comes and talks about what are the interop views they are selling to investors to 
We are inviting Transmute with Karyl to talk about their last funding round to discuss how investors are triggering on their case and what level of interop is sold to the investors.
They will join and sharing that journey with us in the scope of how interop is valuable, it would be great!

### Agenda - 8 Dec - EU time
Slides: https://docs.google.com/presentation/d/1ki2VMtW1yZnWlomyeoYCIfrkLhb2Qb7Kb5sNQOiLYnY/edit#slide=id.p

Dmitri Zagidulin will come and start discussion a common QR-code initiation. See where that shall go and how it can work

QR code limitations are starting to drop of. Thanks to certain events we recently had and technology improvements.

Size limitation is still there

4 ways to share a credential VP, depending on if it is offline or online. Is it an either or, or can we switch between them.

Microsoft introduces some new potential ways of looking at sharing, and will be shared after meeting. WebShareAPI, Microsoft Cable project - https://docs.google.com/presentation/d/1ki2VMtW1yZnWlomyeoYCIfrkLhb2Qb7Kb5sNQOiLYnY/edit#slide=id.gf8d555be24_0_23

#### Deeplinking
Universal App linkes or custom protocol schema. We have two deeplinkg actors, iOS & Android.

But there are multiple fallacies here, that comes down to the user on boarding. And how to make sure that we are protecting the user at the start, versus keeping it sleek.

#### Option to consider


### Agenda - 1 Dec - US time
Cancelled

### Agenda - 24 Nov - EU time
Recording: https://us02web.zoom.us/rec/share/T56nah0ObZFk7J5eck4bu9A_qzJDvmGW7Ze9bgjsG_A8OJ2rnyedjkJqQAfXOUlB.yo0_Kyo0lUQ3e2Z4

* We want to be able to be nimble but still showcase that this group provides value. The success criterias are great!
* Review "charter" and make it lean to reflect a more agile form. In the sense that we cannot predefine what we are doing now. Because the ecosystem is everchanging and new players come in. 
* Showcase current action points and direction to go and get some discussions and thumbs up.

##### Summary
Do we want to define an interop profile for the community? How do we attack this task?
We want need a clearer map 

We have drafted a shorter cleaner version: https://docs.google.com/document/d/11EKZZ0sSqOrXmdtDEtts4OrIVtQRSLB8mA3VxFLFgEw/edit inspiration from the older one https://docs.google.com/document/d/1a01GQVtZB7tDVcm9avS8zuYPHQzEEDtTOEh4Bqu-8Bs/edit

We will announce and get feedback from the mailing list and slack!

### Agenda - 17 Nov - US time
EU meeting recap and action points from the outcom of that meeting 

### Agenda - 10 Nov - EU time
This week we are getting a visit from the German community and hear how they have gone about interop. This conversation started during IIW and has been pulled through to have a introduction in DIF interop, and see what we learn and take from their approach. This meeting is on Wednesday, 10th of November, Europe time 3PM.
Have a look how that looks for your timezone here: https://www.timeanddate.com/worldclock/converter.html?iso=20211104T140000&p1=137&p2=179&p3=187&p4=44&p5=28&p6=22
Or just add the DIF whole DIF calender to your  calender: https://bit.ly/dif-calendar
Look forward to seeing you there, I believe it is going to be a great introduction!

Presentation from Hakan, Andreas and Eugene

### Questions
More questsions was asked in the recording, have a look at that: https://docs.google.com/spreadsheets/d/1wgccmMvIImx30qVE9GhRKWWv3vmL2ZyUauuKx3IfRmA/edit#gid=2146749098&range=C82   

**Tests? How have you guys gone about it?**   
Not yet, but it is one of our next priorties. Taking inspiration from the Aries test harness and how that should and could work.

    
**What is the core connector for interoperability?**    
One profile that works acrosss the consortias would help to begin with. Instead of multiple profiles that did not work together.

**How does this work with EU initatives? Meaning all countries should deliver a wallet that is interoperable**   
Not afraid not exctied, very netural on what will happen. Look forward to see what is going to be in the toolbox.

**The interoperability matrix they are working on**   
https://docs.google.com/spreadsheets/d/1R0Y4ec1KVYErkcEgC3Qww7VR4CsCY2Lv2Bt-gfryEdw/edit#gid=1316375328


### Agenda - 3 Nov - US time
Rechartering, take inspiration from this: https://www.notion.so/dif/HOSPITALITY-TRAVEL-SIG-242105321e1747f8bce776bf634a55b3. Pr [this older PDF](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eb432fe8-da02-469e-aeb6-9affd920d646/DIF_HandT_SIG_overview.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211101T141153Z&X-Amz-Expires=86400&X-Amz-Signature=75a7b9625d76d72b206d73249a79ea80f3afd06e6cf95928d37cc06dea783e1d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22DIF%2520HandT%2520SIG%2520overview.pdf%22). Since interop group is not IP protected and our current charter is just a draft: https://docs.google.com/document/d/1a01GQVtZB7tDVcm9avS8zuYPHQzEEDtTOEh4Bqu-8Bs/edit

Balaz proposed to rename the group to something else. (WG name is confusing for many companies as this group is not IPR protected) Lets hear from Balaz on what is thoughts are to get a better understanding.    
Suggestions are: Interoperability (X)Cross Community Group.(WG name is confusing for many companies as this group is not IPR protected)
Where do we need to rename things?

### Questions
How does it all fit into the other groups? The SIGs(Health and travel) and discussion groups(Africa and Asia)?   
IS this the place to build and discuss test infratructures for interop?

### Agenda - 27 Oct - EU time
No agenda, cancelled

## Agenda - 20 Oct - US time
Internet Identity Workshop Recap, with the focus on interoperability. Did anyone hear anything really cool about interoperability during IIW? Anything worth taking notice of?  
@DW (Ping Identity) - do you have a summary of what interests came up for the interop group?
Talk abit about the future of library polooza if time allows.    

IIW Highlights
Adrian: Two orthoganal axises - KERI - innovation and thought about security and privacy from an academic perspective but completely ignoring everything that has gone on for 6 years. 
DIDComm and relatives - that keep plowing ahead in a series of protocol decisions that are self referential. This is where at - now we just have to get to agree. 
Some people think we are already "done" KERI camp working from first principciples and do right. 
Noted they are not talking to each other. 
Darrell - premature interoperability premature standardization - we are not "there yet" which is why we see KERI
DIDComm trying to align - governments taking Hyperledger Aries/Indy going to market. 
Interoperabiliy is not a term that is well defined. 
Overall good news - everyone agress we are heading in the right directions - How key rotation happens. Answer that happens in time. DIDComm world moves ahead - executable working code - those executing running along in the same direction. Describes why it is really messy. ([Lets find a link -to Darrell's session](https://continuumloop.s3.amazonaws.com/PrematureInterop-ContinuumLoop-Strategy-Standards-and-Interop.pdf))

Who is implementing KERI? - who is impelmenting - KERI is implementing - GLEIF 
- 
Sam: Seemed less rushed an panicy Fewer sessions that were more engaged in. Mike Ebert - opener question what proud of what afraid of. Where things are? Thinking a lot about IIW kinda used to be about  Federated Identity - now about SSI the federated ID people less interested in the conversation.  KERI - DIDComm not talking to each other - the appropriate form is to talk to each other in DIDs. Not opposed to KERI. Related - No one has throughly plugged them together. 

Vitorio talk on end of day 2.
DIDComm - OpenIDConnect tension exists and draws out important things. 
What is it important that it draws out - do they realize the vision of DIDComm - bigger then passing credentials. Helps to draw out the assuptions people are starting with. 
A lot of things about identity - are things about people = credentials. Holders some times involved not always involved. Things about me - DIDComm is communicating "with me" not about me. Distiction about the two.
Do I use DIDComm or do I use SIOP - not accurate to pit them against each other. They are in some areas - there is a lot of get along-ness and likely path to get along - can go from OIDC-SIOP -> to DIDComm connection.
Todd: The last two IIWs I have attended fewer of technical sesisons - role not working with software developers- more to choose from on the non-technical philosphoical discussions. Try to listen closely to what people are saying one of the big challenges is adoption - and getting outside this community- good to see new people - they are very enthusiastic - how does it help everything move forward. A lot of technical barriers - Sam & Sam - understand the competing agendas of the various protocols - at the end of the day looking at the consumer side- who is going to be using it. Post listening to recordings. What do we need to we get the word out. 

ID2020 - felt that it was less technical then in the past. Looked at calendar and daily agendas. working with NGOs - very interesting - open to broader crowd. 

Adrian: Another impression - that the reality around SSI are actually to start to come to light. After a long period (2 years) of Kymbaya. Given by focus on DHS and closely related projects and interop from there. What I am seeing at this IIW and like 4-5 really key issues coming to light. 
1) LD vs JWT -> seemed to have a collaborative solution. Driven by MSFT VCI.

[Data Rights Protocol org](https://datarightsprotocol.org/) working with Sandy Pentland - building on JWTs 2nd genration identity. [YouTube ](https://docs.google.com/document/d/1xrBPmK3Oc98t8FzJCBMRE57Yl2JygJZds1pmydoHfCk/edit)


They imagine - 7-8 different startups class of businesse act as service providers to consumer businesse that collect data - how are these service providers gonig to manage GDPR/CCPA data rights? approach from the commercial perspective - said from the beginning - they said there would be a 4th party involved where individual is proxied by an agent relative to a service provider (daza greenwood) working with credit unions and cooperative model and this includes it.

5 specific end points - Make this commercial offering - they can go to us as the service providers to verify identity of people and manage their data rights. 

Class of service providers selling B2B to and then - but they are there to offload the job of mandated to GDPR/CCPR around data rights that affect these businesses.  In HealthCare we had this same thing service providers. MSFT build whole msft health strategy on it working properly. 

2) Issue of Fedreation - OIDC google app/mozilla/apple formal objection to DIDs - peace is not made with federation

3) Trying to square verifiable data registries of various sorts - roll of private blockchains and role of hyperledger

4) custocial wallets/agents - Diwhala/Kiva - work with custocial wallets - seeing fragmentation. So much of what has been happening - every action is an authenitcation action like a FIDO-secure element - delegation to an agent - custodial wallets. "SSI we" has been living in tihs lala land of our own making having to face the market reality. 

Keith: hear about things about VCs being in production - I don't see it. Was on a call with an analyist. Am I missing something. People in production? 
Is there a big use-case that I'm missing. 

Adrian: VCs are clearly inevitable - what is not inevitable - is the subject identifeir and the schema's for VCs. That is why there is a duality between mDL and W3C standard track stuff. Education folks driving themselves nuts - running ragged - VC SSI model.  What is driving them crazy - what they have done with Open Badges and tryign to include SSI standards into their market - where they service providers are institutions (and people) purity  difficult to adopt Hyperldeger and DHS model. MSFT is fighting the good fight - they are in the identity hub/secure secure data storage - we have a band of catholicism that is not open to the relaities on the ground from the other perspective - IMSGlobal CLR - OpenBadges willingness to move towards VC model - we didn't want to be in a world where we are implementing all of the above. they will happen. 
How schema and subject identiifers. The most interesting move away from schema's towards types. I didn't see a lot of negativity. 
Who are the verifiers - them is us. They educational institutions accept credentials from other educational institutions. 

Guardianship - Signing relesases and getting inforamtoin directly from the institutions. They want the credentials directly from the instutions. They don't have the same prolem of "calling home" anything that complicates revocation.  



## Agenda - 13 Oct - EU time
No call due to [Internet Identity Workshop][iiw]. Look at notes for potential sessions.
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
[eu-zoom]: https://us02web.zoom.us/j/88984209816?pwd=ek9oRXRwSFlQOXhiQzNCTUE3TG91Zz09
[dif]: https://identity.foundation/interoperability/
[repo]: https://github.com/decentralized-identity/interoperability
[maillist]: https://dif.groups.io/g/interop-wg
[reference]: https://www.notion.so/dif/be6763341a014d248f655aea187d7890?v=c9ac48a07f3d411c9a1bea32b55f7e76
[recordings]: https://docs.google.com/spreadsheets/d/1wgccmMvIImx30qVE9GhRKWWv3vmL2ZyUauuKx3IfRmA/edit#gid=2146749098
[parking-lot]:
https://github.com/decentralized-identity/interoperability/blob/master/parking-lot.md
[iiw]: https://internetidentityworkshop.com
