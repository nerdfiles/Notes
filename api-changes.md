# handling change in microservices world

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


