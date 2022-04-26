# RPC vs API

- idea that making a call to a remote service should look and feel identical to methods in the application
- hide distinction between making calls and directly using methods in an application

## history

- 1960s
  - 60-69: mainframes, minicomputers, etc
  - not a lot in the way of networking
  - first occurrence of RPC evolution (RC 4000 multiprogramming system): designed for apps to be built as multiple processes
  - using message bus (1969)
  - not particularly successful, but kicked off microkernel architecture
- 1970s
  - arpanet: distributed systems across nodes
  - calling a method on a machien in lat/lon from lat/lon
- 1980s
  - newcastle connection
  - lupine (xerox PARC): created a functioning RPC
  - autogen'd stubs from an interface definiton file (in C)
  - ONC RPC (sun microsystems): sun rpc, first invention of the modern RPC 
    - used for network file system, precursor to SAMBA

## anatomy of RPC

```
client stubs -> magic happens -> server stubs
```

- services with params (some will be messages: personID, firstName, lastName, etc)
- automated code will generate client and server code
- client stubs are generally usable out of box
- server stubs are usually inheriting behaviors (old days: empty file that would need to be filled in)
- networking code, serialization code, etc handled in modern server stubs

## more history

- OOP: opened up the transition from procedural programming to OOP
  - one object with methods, another object that is an instance, etc (already doing RPC in a way that is stateful)
    - RPC can be created on top of OOP's semantics
    - CORBA (common object request broker architecture)
    - first widely used 

## CORBA

- binary wire format
- general inter-orc protocol
  - internet inter-orb protocol (TCP)
  - SSL inter-orb protocol (encrypted TCP)
  - hypertext inter-orb protocol (textual)
  - zipped inter-orb protocol (tcp again)

## CORBA: General inter-orb protocol

```
0x47 0x49 0x4f 0x50 -> GIOP, the key
0x01 0x00 -> GIOP_version
...
0x20 -> padding bytes to align next value
```


## more history: 1990s continued

- www
- soa (service oriented arch)
  - resiliency
- soap (simple object access protocol: internet friendly) 

## SOAP over HTTP

- xml-based
- headers
- body
- encoded into the soap message

## XML

- all the rage in the 90s
- inherently ill-defined for the SOAP people
- more namespacings

```
<soap:Envelop>
  <m:Books>
    <m:Book Year="...">
    ...
```

## Y2K

- prevent codes from catching fire
- dates expressedly written needed to refactored

## history 2000s

- xmlhttprequest: microsoft invented and became a standard
- JSON: crockford
  - decode an object by parsing it
  - actual code in it would be processed

## wcf nettcp

- binary
- fast
- proprietary to microsoft

## more history 2010s

- aws, etc: servers as cattle, not pets
- microservices
- container ecosystem (docker, deploy services wrap with dependencies)
- k8s (orchestration)
- web sockets (persistent connection, bidirectional)

## stubby

- http, rest, etc didn't make sense
- binary encoding (protobuf)
- fast
- internal to google
- http/2 came along (based on google/spdy)

## gRPC (grpc.io)

- binary (protobuf)
- fast
- http/2 (runs over open internet)
- open-source

## protobuf

- schema, etc
- wire format, etc

## wcf vs gRPC

- 2006 vs 2020

```
wcf                           grpc
- wire formats                - wireformats
  - soap                      
  - nettcp encoding             - protobuf
- c# or vb.net
- windows-only
- via SOAP
- wsdl or native stub
```

## http/3

## rsocket

- reactive stream semantics
- lower-level
- rsocket-rpc
- long-term streaming different approach from grpc

## grpc

- when use compared to http apis?
  - commuincating between systems 
  - mobile games, mobile apps: grpc, bandwidth usage is lower
- when not?
  - want consume by clients, JSON, etc

# where do great arch come from?

## tcp/ip

- vin verf, etc: copied french/european setup
- distinct networks
- no info retained by gateways and routers (prevent cascading failures)
- comms on best effort (didn't have to acknowledge a transmission)
- isolate faults (fault isolation)

## process control systems

```
  [operator station] -> [mini-computer]<=[events]=>[PLC]
                          || |                       |
                          || |                [switchs, timers]
        [recipe storage]--|| |=[setpoints]=> (analog control)
    [historical records]---| |<=[speed flow thickness]= [motors, pumps, headers, coolers]
```

## 1980s & 90: client-server architectures


presentation devices | app servers | database server (violates the basics: redundancy, fault isolation, local control)

CAP thereom: can't have consistency data, available and partitioning (everybody gave up partitioning)

## crisis at amazon

- acid transctions: packaged transactions complete, validate them, all done by a database
- throw out acid trx: eventual consistency allowed partitioning
  - ACID vs [basically available, eventual consistency, soft state]
- conway's law
- self-deploying teams (dependencies?? blowing up shit!)
- amazon designed a way to do independent team deploys
  - 2002-2006: create an environment for self-deployments
  - bezos had the belief: autonomous decision-making

## 2010's: attacking the dependency problem

```
      enterprise arch
          /\
        business
      data - one system of record?
      applications
       technology
      /          \

      smartphone arch

  /\  /\ /\ = business, data (distributed data stores), apps
  ---------
  technology platform
  ---------
  - local control
  - adaptability
```

distributed data stores
amazon didn't have a central database? how could it operate with a big central database!

## how do many autonomous teams accomplish the overall mission?

- coordination across autonomous teams
- philosophy of responsibility
  - engineers are responsible for the design and dev of a component and for 
    making sure their component operates properly and does its job as a part 
    of the overall system
  - no engineering processing in existence can replace this for getting things 
    done right and efficiently
  - microservices

## 2015: lambda introduced

- event-driven functions that run in the cloud
  - reminds of process control systems (interrupts from objects to minicomputers)

abstractions
- internet > telephone network
- cloud > data centers
- serverless > infrastructure

## 2012: artifical intelligence breakthrough

- geoffrey hinton: neural networks
- high speed processing caught up to hinton's ideas, making them a technical possibility
  - speech recognition
- fei-fei lee:
  - ImageNet: not the algo that's the problem, it's the data (not enough data for learning on: Big Data)
  - labeled image db: mechanical turk db that has people world-wide labeling data
  - teams of AI experts

## how do we architect for black swan events?

# api design and guidelines

- model
  - norman's lifecycle
  - there are no straight lines
  - api story
- design
  - design thinking (skeuomorphic? )
  - jobs-to-be-done (actions?)
  - api diagram (yuml: https://github.com/jaime-olivares/yuml-diagram/wiki)
- describe
  - technology agnostic
  - details on properties & actions
  - ALPS (2014)
  - github.com/mamund
  - https://www.apiopscycles.com/api-canvas

## designing apis

- model
  - api story

## building APIs

- sketching
  - frank gehry (via ronnie mitra)
  - experiement
  - apiary blueprints 
- prototyping
  - borgium's prototypes
  - openapi (OAS)
  - made to be test
- building
  - repeatable process
  - convert prototype/design into code
  - DARRT
    - data, actions, resources, representations, transitions

## DARRT representations

- message modeling is the strong typing of the web

## transitions

- express actions

## releasing APIs

- testign
  - testing inteerface, code (BDD)
  - happy-path (200 HTTP), sad-path (400)
  - simple request tests (SRTs)
  - postman/newman for BDD
  - protocol-structure-values
- security
  credentials
  - auth0 as provider
  - jwts
- deployment
  - integration, delivery, deployment
  - automation improves safety
  - heroku via git push

## modifying APIs

- update principles
  - first, do no harm (don't break shit)
  - fork your api
- design updates
  - take nothing away
  - don't redfine
- test updates
  - use all existing test
  - add new tests for each releases
- release updates
  - reversibility/re-entry first
  - side-by-side releases
  - overwriting releases
  - backwards compat
  - no overwriting releases in nature (die off eventually)
- API shutdown
  - place code in public domain
  - open source interfaces
  - recoverable data
  - mark the api 410 Gone (w/ a pointer to new version)

# cycle of apis 

API-first: foundations, design, building, releasing, modifying

http://g.mamund.com/2020-interface

get coders into the design process early

# api design and guidelines: OpenAPI

- spectral lint
- spectral ruleset

# the real world vs the hello world

lord of api designs

## ruleset design

- relevant
- user-fieendly
- maintability
- granulairty

- spectral in 3 different ways
  - use cli to quick check
  - in depth in stoplight studio
  - spreadsheet review summary

- https://jqplay.org/

# SEED(s) methodology

- Seven
- Essential
- Evolutions of
- Design for
- Services

1. Identifying actors
2. Identifying jobs to be done
3. interaction patterns
4. actions and queries
...

## JTBD

paul adam's jobs to be done
- circumstance, motivation, goal

```
When ____, I want to ____, so I can
```

when a customer wants to buy coins they want to see current price of a coin so that they can estimate their buying power.
when a customer initiates coin purchase, they need to add or reuse a payment method, so that they can provide funds for the purchase
when a customer finalizes a coin purchase, app needs to change the payment method, so that it can make money

diff from user story, because circumstances differentiate users

## visualize interaction patterns

- interaction diagram (sequence diagram)

## queries and actions

1. queries are lookups with defined inputs and outputs. it should bea  well-understood contract between the client and server: what input client sends and what response they expect. queries do not modify system state (they have no side effects)
2. actions, in contrast, are requests to cause some sort of state modification (they do have side effects). they also have well-defined contract - for inputs, expected outcome of expected response

reminds of CQRS

# RapidAPI

# api, microservices, and service mesh

## handling change in microservices world

1. information hiding is key
  - backwards compat
  - independent deployability requires interface stability
    - info hiding makes ind. deployability possible
  - 1971: david parnas: modular software
    - module boundaries: freely changing without breaking backwards compat
  - coupling to internal implementation
    - if an upstream consumer can reach into your internal implementation
    - ... then you can't change this implementation without breaking the consumer
    - losing distinction between private data and public data
    - information hiding is about being explicit: these objects are not exposed
    - explicit service interface (e.g. api, restful api?)
    - services talking to each other through shared interfaces (hide secrets/private stuff)
  - api becomes mechanism of info hiding
    - team-owning apis and domains facilitating changes
2. teaming, api tribalism: coordination
  - low cost of changes for one team
  - ceremony of change
  - internal teams vs external teams: change costs will be heavier for external teams consuming the api
  - within a team -> between teams -> external parties
  - type 1 vs type 2 decisions
    - type 1: one way doors (virtual cheating); orgs mostly see decision-making as type 1
    - type 2: reversible (inside a team boundary)
    - < reversible (internal team; ad-hoc, local decision-making) --- (public api; more discussion, formal approval) irreversible >
    - reversible (politics) --- irreversible (clerical, ethical); see impossibility of intent
3. catch accidental breakages
  - safety nets?
  - changing int to string (age -> dob); looks like a straightforward refactor but breaks a serialization contract
  - be explicit with DTOs (martin fowler) or use information hiding
  - making manual makes visible
  - schemas: good; explicit understanding of assumptions of consumers (what can change easily)
  - JSON schema (catches accidental breakages); schema migration! schema validation!
  - protobuf has schema format
  - testing can catch breakages
4. backwards compat/incompat
  - backwards incompat: lock-step release (not great, require more coordination and have greater risk)
    - enemy of indepenent deployability
    - https://dapr.io/
  - co-exist multiple service versions
    - challenges: service discovery (finding versions through IP and port mapping)
    - challenges: doubling infra (`$$$`)
    - challenges: maintain data compat
    - challenges: bug fixing
  - one microservice and exposes old and new endpoint
    - maintenance challenges are reduced
    - putting design abstraction for hosting two at once (service discovery)

1. info hiding
2. cost of changes varies
3. catch accidents
4. co-exist different APIs

https://samnewman.io

cannot address all non-func concerns with sidebar, service mesh, etc
service discovery: multiple versions? (version number in URI, subdomain, headers)
miniservices: levels? (macro? nano? etc -- irrelevant): independence matters until it doesn't







































