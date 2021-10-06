# Account Lookup And Discovery BC

The Accounts Lookup and Discovery BC is responsible for locating and associating participants and parties with party or participant triggered transactions.

## Terms

The following terms are used in this BC, also known as a domain.

| Term | Description |
|---|---|
| Participant | Financial Services Provider |
| Party | FSP Customer |

## Functional Overview

![Use Case - Functional Overview](./assets/aldFunctionalFlow20210825.png)
>

## Use Cases

### Party/Participant Associate

#### Description

Where a Participant DFSP indicates Parties/Participants require association with a particular transaction, this UC is used by the Switch to validate the request and associate the Parties/Participants in accordance with the receipted request/instruction.

#### Flow Diagram

![Use Case - Party/Participant Associate](./assets/aldPartyParticipantAssoc_20210825.png)
>

### Party/Participant Disassociate

#### Description

Where a Participant DFSP indicates Parties/Participants require disassociation with a particular transaction, this UC is used by the Switch to validate the request and disassociate the Parties/Participants in accordance with the receipted request/instruction.

#### Flow Diagram

![Use Case - Party/Participant Disassociate](./assets/aldPartyParticipantDisassoc_20210825.png)
>

### Get Participant

#### Description

Where a participant DFSP requests Participant details, this UC is used by the switch to validate the request and provide the requested relevant participant data to the requesting DFSP.

#### Flow Diagram

![Use Case - Get Participant](./assets/aldGetParticipant_20210825.png)
>

### Get Party

#### Description

Where a participant DFSP requests Party details, this UC is used by the switch to validate the request and provide the requested relevant Party data to the requesting DFSP.

#### Flow Diagram

![Use Case - Get Party](./assets/aldGetParty_20210825.png)
>

<!--## Notes -->
<!-- Footnotes themselves at the bottom. -->

[^1]: Common Interfaces: [Mojaloop Common Interface List](../../commonInterfaces.md)
