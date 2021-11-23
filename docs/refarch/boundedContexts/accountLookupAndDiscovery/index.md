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

Where a Participant DFSP indicates Parties/Participants require association with a particular transaction, this UC is used by the Switch to validate the request and, where a Participant DFSP is able to associate the provided Party identity(s), associate the Parties/Participants in accordance with the receipted request/instruction.

***Note:*** *Checks and validations of the KYC (Know You Customer) details are not covered here and are left to processes outside of the Mojaloop API calls and should be covered by the Scheme, to ensure that association (or disassociation) requests are valid.*

#### Flow Diagram

![Use Case - Party/Participant Associate](./assets/aldPartyParticipantAssoc_20210825.png)
>

### Party/Participant Disassociate

#### Description

Where a Participant DFSP indicates Party/Participant identity(s)require disassociation from a particular transaction, this UC is used by the Switch to validate the request and, where a participant DFSP is able to, disassociate the Party/Participant identity(s) in accordance with the receipted request/instruction.

#### Flow Diagram

![Use Case - Party/Participant Disassociate](./assets/aldPartyParticipantDisassoc_20210825.png)
>

### Get Participant

#### Description

Where a Participant DFSP requests Participant association information based on a Party identifier, this UC is used by the switch to validate the request and provide the requested association data to the requesting DFSP.

#### Flow Diagram

![Use Case - Get Participant](./assets/aldGetParticipant_20210825.png)
>

### Get Party

#### Description

Where a participant DFSP queries another participant DFSP for the details of a Party which the second DFSP holds, this UC is used to validate the request and provide the requested Party data to the requesting DFSP.

#### Flow Diagram

![Use Case - Get Party](./assets/aldGetParty_20210825.png)
>

<!--## Notes -->
<!-- Footnotes themselves at the bottom. -->

[^1]: Common Interfaces: [Mojaloop Common Interface List](../../commonInterfaces.md)
