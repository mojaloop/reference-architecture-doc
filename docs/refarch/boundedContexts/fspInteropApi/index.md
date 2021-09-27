# FSP Interoperability API BC

The FSP Interoperability API Bounded Context provides access to the internal operations and resources that the Mojaloop Ecosystem provides to a given Participant. This Bounded Context is responsible for providing a Participant with interfaces whit which the Participant can perform and execute tasks on Mojaloop. It is also responsible for providing communication back to the Participant regarding different notifications and system messages that a participant should expect to receive.

## Functional Overview

The FSP IOP API interacts with many different bounded contexts and thus the simplified view is provided here, for further reading on the events and connections that the FSP IOP API provides and consumes please review the Mojaloop Common Interfaces [^1]. The bounded contexts that are integrated with the FSP IOP API are:

-   Account Lookup & Discovery Bounded Context [^14]
-   Participant Lifecycle Management Bounded Context [^26]
-   Quoting\Agreement Bounded Context [^19]
-   Transfers Bounded Context [^22]
-   Settlement Bounded Context [^21]

![Use Case - Example REPLACE ME](./assets/0-0-functional-overview.jpg)

> FSP Interoperability API Functional Overview

## Terms

Terms with specific and commonly accepted meaning within the Bounded Context in which they are used.

| Term        | Description                                                                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (D)FSP      | (Digital) Financial Service Provider                                                                                                                             |
| Participant | Financial Service Provider (FSP) that has registered on the Mojaloop ecosystem. Allowing said FSP to be able to transact with other Participants                 |
| FSP IOP API | Financial Service Provider Interoperability Application Programming Interface, the API that provides access to functions and features of the Mojaloop Ecosystem. |
| Payer       | The payer of electronic funds in a payment transaction.                                                                                                          |
| Payer FSP   | Payer's Financial Service Provider.                                                                                                                              |
| Payee       | The recipient of electronic funds in a payment transaction.                                                                                                      |
| Payee FSP   | Payee's Financial Service Provider.                                                                                                                              |

## Use Cases

Use case definitions [^2] have not been altered and the Reference Architecture allows for us to only change the background orchestration of the internal Mojaloop services and Bounded Contexts.

### Account Lookup & Discovery BCs

#### Party/Participant Associate

Associate transfer/s Participant/s and/or parties based on the POST [^5] participant request. The FSP IOP API then sends a request to the Account Lookup & Discovery BC [^14] which will process the request and respond with a success event. The FSP IOP API then sends a notification PUT response[^16].

![Use Case - Account Lookup & Discovery BC - Party/Participant Associate](./assets/0-1-party-participant-associate.jpg)

> Account Lookup & Discovery BC - Party/Participant Associate

#### Party/Participant Disassociate

Disassociate Participant/s and/or parties based on the DELETE [^6] participant request. The FSP IOP API sends the request to the Account Lookup & Discovery BC [^14] to disassociate the party. The success response is then received by the FSP IOP API and then responds to the caller by sending a notification PUT response[^15].

![Use Case - Account Lookup & Discovery BC - Party/Participant Disassociate](./assets/0-2-party-participant-disassociate.jpg)

> Account Lookup & Discovery BC - Party/Participant Disassociate

#### Get Participant

Retrieve participant information based on the GET request [^7], which supplies the ID and structure. The FSP IOP API sends the request to the Account Lookup & Discovery BC [^14] to determine whether the desired participant exists. The FSP IOP API then responds to the requestor with a PUT [^15] request.

![Use Case - Account Lookup & Discovery BC - Get Participant](./assets/0-3-get-participant.jpg)

> Account Lookup & Discovery BC - Get Participant

#### Get Party

Retrieve party information based on the ID passed with the GET [^8] request. The FSP IOP API then sends a request to the Account Lookup & Discovery BC [^14] to determine the target FSP to forward the GET request to. The target FSP then responds with a PUT parties request. The information is then sent to the Account Lookup & Discovery BC to be cached before the PUT [^17] request is sent to the original sender of the GET request.

![Use Case - Account Lookup & Discovery BC - Get Party](./assets/0-4-get-party.jpg)

> Account Lookup & Discovery BC - Get Party

### Agreement (Quoting) BC

#### Calculate Quote - Happy Path

When a quote is sent using the POST [^3] request, the FSP IOP API will sends the request to the Quoting/Agreement BC [^19] to validate the quote. The FSP IOP API will then send the POST Quote to the Payee FSP, which in turn responds with a PUT [^18] Quotes and updated relevant information. The FSP IOP API sends the accepted quote to the The Quoting/Agreement BC [^19] to persist the quote information. The FSP IOP API will then forwards the PUT quote request to the Payer FSP and consider the quote successful.

![Use Case - Agreement BC - Calculate Quote - Happy Path](./assets/1-1-calculate-quote-happy-path.jpg)

> Agreement BC - Calculate Quote - Happy Path

#### Get Quote - Happy Path

This allows a FSP to get quote information of an existing quote. The GET request [^4] is sent to the FSP IOP API that queries the Quoting/Agreement BC [^19] for existing quotes. When the quote is retrieved the information is send back to the requesting FSP by sending the PUT quote [^18].
![Use Case - Example REPLACE ME](./assets/1-2-get-quote-happy-path.jpg)

> Agreement BC - Calculate Quote - Happy Pa th

#### Calculate Quote - Invalid Quote Request

When a POST [^3] quote request is , the FSP IOP API sends the request to the Quoting/Agreement BC [^19] for processing. The quote then fails validation the Quoting/Agreement BC [^19] responds with an error response that the FSP IOP API notifies the requesting FSP through the use of the PUT Error Quote [^20] request.

![Use Case - Agreement BC - Calculate Quote - Invalid Quote Request](./assets/1-3-calculate-quote-invalid-quote-request.jpg)

> Agreement BC - Calculate Quote - Invalid Quote Request

#### Calculate Quote - Invalid FSPs

When a POST quote [^3] is sent but the FSP IOP API sends the request to the Quoting/Agreement BC [^19] for processing and it cannot determine that both participants are valid FSPs then an error response is then sent to the FSP IOP API. The FSP IOP API then notifies the requesting FSP through the use of the PUT Error Quote [^20] request

![Use Case - Agreement BC - Calculate Quote - Invalid FSPs](./assets/1-4-calculate-quote-invalid-fsps.jpg)

> Agreement BC - Calculate Quote - Invalid FSPs

#### Calculate Quote - Invalid Scheme Rules detected in Request

When the Payer FSP sends a POST quote [^3] the FSP IOP API sends the request to the Quoting/Agreement BC [^19] for processing and the quote does not adhere to the scheme rules defined then an error response is then sent to the FSP IOP API. The FSP IOP API then notifies the Payer FSP through the use of the PUT Error Quote [^20] request

![Use Case - Agreement BC - Calculate Quote - Invalid Scheme Rules detected in Request](./assets/1-5-calculate-quote-invalid-scheme-rules-request.jpg)

> Agreement BC - Calculate Quote - Invalid Scheme Rules detected in Request

#### Calculate Quote - Invalid Scheme Rules detected in Response

When the Payer FSP sends a POST quote [^3] the FSP IOP API sends the request to the Quoting/Agreement BC [^19] for processing and it succeeds initial processing. The FSP IOP API sends the request POST quote request to the Payee FSP. The Payee FSP should react with a accepted quote by sending PUT [^18] Quote. The response is sent to Quoting/Agreement BC [^19] for further processing and validation. When the Bounded Context detects that the quote does not adhere to the scheme rules defined then an error response is then sent to the FSP IOP API. The FSP IOP API then notifies both the Payer FSP and the Payee FSP through the use of the PUT Error Quote [^20] request.

![Use Case - Agreement BC - Calculate Quote - Invalid Scheme Rules detected in Response](./assets/1-6-calculate-quote-invalid-scheme-rules-response.jpg)

> Agreement BC - Calculate Quote - Invalid Scheme Rules detected in Response

### Transfers BC

#### Perform Transfer (Universal Mode)

The Payer FSP sends a POST [^9] transfer request to the FSP IOP API. The FSP IOP API then sends an event to the Settlements Bounded Context [^21]. The FSP IOP API waits for an event from the Transfers Bounded Context [^22], to indicate that the transfer has been prepared, to send a POST request to the Payee FSP. The Payee FSP then responds with a PUT [^23] transfer request (transferState = committed) to the FSP IOP API which in turn commits the transfer fulfillment. The PUT transfer is then send to the Payer FSP.

![Use Case - Transfers BC - Perform Transfer (Universal Mode)](./assets/2-1-perform-transfer-universal-mode.jpg)

> Transfers BC - Perform Transfer (Universal Mode)

#### Perform Transfer with Payee Confirmation

The Payer FSP sends a POST [^9] transfer request to the FSP IOP API. The FSP IOP API then sends an event to the Settlements Bounded Context [^21]. The FSP IOP API waits for an event from the Transfers Bounded Context [^22], to indicate that the transfer has been prepared, to send a POST request to the Payee FSP. The Payee FSP then responds with a PUT [^23] transfer request (transferState = reserved) to the FSP IOP API which in turn reservers the transfer fulfillment. The PUT transfer is then send to the Payer FSP. The Payee FSP then receives a PATCH [^24] transfers request to notify the state change of the transfer.

![Use Case - Transfers BC - Perform Transfer with Payee Confirmation](./assets/2-2-perform-transfer-payee-confirmation.jpg)

> Transfers BC - Perform Transfer with Payee Confirmation

#### Query Get Transfer

Gets the transfer info based on the transfer ID used in GET request [^11] and receives a PUT [^23] request to get the relevant information about the transfer.

![Use Case - Transfers BC - Query Get Transfer](./assets/2-3-query-get-transfer.jpg)

> Transfers BC - Query Get Transfer

#### Perform Transfer - Duplicate Post (Resend)

POST [^9] Transfer has already been processed and a status report is returned to the Payer FSP by receiving a PUT [^23] request.

![Use Case - Transfers BC - Perform Transfer - Duplicate Post (Resend)](./assets/2-4-perform-transfer-duplicate-post.jpg)

> Transfers BC - Perform Transfer - Duplicate Post (Resend)

#### Perform Transfer - Duplicate Post (Ignore)

POST [^9] Transfer has already been processed but no response is needed or requested.

![Use Case - Transfers BC - Perform Transfer - Duplicate Post (Ignore)](./assets/2-5-perform-transfer-duplicate-post-ignore.jpg)

> Transfers BC - Perform Transfer - Duplicate Post (Ignore)

#### Perform Transfer - Payee DFSP Rejects Transfer

The Payer FSP sends a POST [^9] Transfer to the FSP IOP API. The Api then prepares the transfer and then sends the POST request through to the Payee FSP. The Payee FSP then declines the transfer by sending a PUT [^25] transfer error to the FSP IOP API. The FSP IOP API then notifies the Transfers Bounded Context [^22] that the transfer has been rejected and sends a PUT [^25] transfer error to the Payer FSP.

![Use Case - Transfers BC - Perform Transfer - Payee DFSP Rejects Transfer](./assets/2-6-perform-transfer-payeefsp-rejects-transfer.jpg)

> Transfers BC - Perform Transfer - Payee DFSP Rejects Transfer

#### Perform Transfer - Timeout (Prepare)

POST [^9] Transfer gets rejected because the transfer timed out [^13] while funds are being prepared. The FSP IOP API sends a PUT [^25] transfer error request to the Payer FSP to notify of the error.

![Use Case - Transfers BC - Perform Transfer - Timeout (Prepare)](./assets/2-7-perform-transfer-timeout-prepare.jpg)

> Transfers BC - Perform Transfer - Timeout (Prepare)

#### Perform Transfer - Timeout (Pre-Committed)

The Payer FSP sends a POST [^9] transfer request to the FSP IOP API. The FSP IOP API then sends an event to the Settlements Bounded Context [^21]. The FSP IOP API waits for an event from the Transfers Bounded Context [^22], to indicate that the transfer has been prepared, to send a POST request to the Payee FSP. The Payee FSP then responds with a PUT [^23] transfer request (transferState = committed) to the FSP IOP API which in turn commits the transfer fulfillment. The transfer times out [^13] while/before the funds are committed and causes the transfer to be rejected. The FSP IOP API then notifies both the Payer and Payee FSPs with a PUT [^25] transfer error request.

![Use Case - Transfers BC - Perform Transfer - Timeout (Pre-Committed)](./assets/2-8-perform-transfer-timeout-pre-committed.jpg)

> Transfers BC - Perform Transfer - Timeout (Pre-Committed)

#### Perform Transfer - Timeout (Post-Committed)

The Payer FSP sends a POST [^9] transfer request to the FSP IOP API. The FSP IOP API then sends an event to the Settlements Bounded Context [^21]. The FSP IOP API waits for an event from the Transfers Bounded Context [^22], to indicate that the transfer has been prepared, to send a POST request to the Payee FSP. The Payee FSP then responds with a PUT [^23] transfer request (transferState = committed) to the FSP IOP API which in turn commits the transfer fulfillment. The transfer times out [^13] after the funds are committed and causes the transfer to be rejected.

![Use Case - Transfers BC - Perform Transfer - Timeout (Post-Committed)](./assets/2-9-perform-transfer-timeout-post-commit.jpg)

> Transfers BC - Perform Transfer - Timeout (Post-Committed)

#### Perform Transfer - Duplicate Post (None Matching)

POST [^9] Transfer has already been processed and a status report is returned to the Payer FSP by receiving a PUT [^25] transfer error request.

![Use Case - Example REPLACE ME](./assets/2-10-perform-transfer-duplicate-none-matching.jpg)

> Transfers BC - Perform Transfer - Duplicate Post (None Matching)

#### Perform Transfer - Payer FSP Insufficient Liquidity

The Payer FSP sends a POST [^9] transfer request to the FSP IOP API. The FSP IOP API then sends an event to the Settlements Bounded Context [^21]. The FSP IOP API waits for an event from the Transfers Bounded Context [^22], to indicate that the transfer has been prepared, but receives a Liquidity check failure for the Payer FSP. The FSP OIP API then sends a PUT [^25] transfers error request to the Payer FSP to notify of the error.

![Use Case - Transfers BC - Perform Transfer - Payer FSP Insufficient Liquidity](./assets/2-11-perform-transfer-payer-insuficiant-liquidity.jpg)

> Transfers BC - Perform Transfer - Payer FSP Insufficient Liquidity

#### Perform Transfer - Transfer Prepare Rejected

The Payer FSP sends a POST [^9] Transfer to the FSP IOP API. The Api then prepares the transfer and then sends the POST request through to the Payee FSP. The Payee FSP then declines the transfer by sending a PUT [^25] transfer error to the FSP IOP API. The FSP IOP API then notifies the Transfers Bounded Context [^22] that the transfer has been rejected and sends a PUT [^25] transfer error to the Payer FSP.

![Use Case - Transfers BC - Perform Transfer - Transfer Prepare Rejected](./assets/2-12-perform-transfer-prepare-rejected.jpg)

> Transfers BC - Perform Transfer - Transfer Prepare Rejected

#### Perform Transfer - Transfer Prepare Validation Failure (Invalid Payer Participant)

The Payer FSP sends a POST [^9] Transfer to the FSP IOP API. The Transfers Bounded Context [^22] notifies the FSP IOP API that the Payer FSP is invalid. Depending on the reason for the Payer FSP being invalid the FSP IOP API will send a PUT [^25] transfers error request to the Payer FSP.

![Use Case - Transfers BC - Perform Transfer - Transfer Prepare Validation Failure (Invalid Payer Participant)](./assets/2-13-perform-transfer-prepare-validation-failure-invalid-payer-participant.jpg)

> Transfers BC - Perform Transfer - Transfer Prepare Validation Failure (Invalid Payer Participant)

#### Perform Transfer - Transfer Prepare Validation Failure (Invalid Payee Participant)

The Payer FSP sends a POST [^9] Transfer to the FSP IOP API. The Transfers Bounded Context [^22] notifies the FSP IOP API that the Payee FSP is invalid. The FSP IOP API will send a PUT [^25] transfers error request to the Payer FSP to nofify about the failure.

![Use Case - Transfers BC - Perform Transfer - Transfer Prepare Validation Failure (Invalid Payer Participant)](./assets/2-14-perform-transfer-prepare-validation-failure-invalid-payee-participant.jpg)

> Transfers BC - Perform Transfer - Transfer Prepare Validation Failure (Invalid Payer Participant)

## Notes

[^1]: [Mojaloop Common Interface List](../../commonInterfaces.md)
[^2]: [Open API for FSP Interoperability Specification Documentation](https://docs.mojaloop.io/mojaloop-specification/)
[^3]: [Post Quote - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6532-post-quotes)
[^4]: [Get Quote - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6531-get-quotesid)
[^5]: [Post Participant - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6233-post-participantstypeid)
[^6]: [Delete Participant - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6234-delete-participantstypeid)
[^7]: [Get Participant - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6231-get-participantstypeid)
[^8]: [Get Parties - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6331-get-partiestypeid)
[^9]: [Post Transfers - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6732-post-transfers)
[^10]: [Commit Notification - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6726-commit-notification)
[^11]: [Get Transfers - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6731-get-transfersid)
[^12]: [Transaction Irrevocability - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.#6722-transaction-irrevocability)
[^13]: [Transfers Timeout and Expiry - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6724-timeout-and-expiry)
[^14]: [Account Lookup and Discovery Bounded Context](../accountLookupAndDiscovery/index.md)
[^15]: [Put Participant - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6242-put-participantsid)
[^16]: [Put Participant (Creation Response)- Definition](https://docs.mojaloop.io/momojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6232-post-participants)
[^17]: [Put Party- Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6341-put-partiestypeid)
[^18]: [Put Quote - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6541-put-quotesid)
[^19]: [Quoting\Agreement Bounded Context](../quotingAgreement/index.md)
[^20]: [Put Quote Error - Definition](https://docs.mojmojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6551-put-quotesiderror)
[^21]: [Settlements Bounded Context](../settlements/index.md)
[^22]: [Transfers Bounded Context](../transfers/index.md)
[^23]: [Put Transfers - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6741-put-transfersid)
[^24]: [Patch Transfers - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6733-patch-transfersid)
[^25]: [Put Transfers Error - Definition](https://docs.mojaloop.io/mojaloop-specification/fspiop-api/documents/API%20Definition%20v1.1.html#6751-put-transfersiderror)
[^26]: [Participant Lifecycle Management Bounded Context](../participantLifecycleManagement/index.md)
