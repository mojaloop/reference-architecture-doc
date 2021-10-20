# Third Party API BC

The Third Party API BC has been implemented with the Mojaloop 2.0 Reference Architecture to enable third-party PISP Operators (typically applications) to interact with the platform.  Please note that unless otherwise stipulated, all BC references pertain to the various Mojaloop components or Bounded Contexts (BCs).

## Terms

The following common terms are used in this BC:

| Term | Description  |
| ---- | ------------ |
| PISP | Payment Initiation Service Provider (e.g. PayPal, ApplePay, GooglePay, etc.) |
| DFSP | Digital Financial Service Provider (e.g. Bank, Mobile Money Operator) |
| User | DFSP/PISP client (as indicated) |

## Use Cases

**Note:** Our Use Cases cover two specific scenarios:

| Scenarios | Description |
| --------- | ----------- |
| [Linking](#linking-scenarios) | PISP Housekeeping activities |
| [Transfer](#transfer-scenarios) | PISP Transfer initiation activities |

## Linking Scenarios

### PISP Gets supported DFSPs

#### Description

The workflow provided by this UC, supports authorized PISP User requests to obtain a list of DFSPs supported by the system.

#### Flow Diagram

![Use Case - PISP Gets supported DFSPs](./assets/3PAL_PISPGetSupportedDFSPs_20210830.png)
>

### PISP Gets list of accounts for a DFSP + Identifier

#### Description

The workflow provided by this UC supports authorized PISP User requests to obtain a list of Accounts and Identifiers for a DFSP supported by the system.

#### Flow Diagram

![Use Case - PISP Gets list of accounts for a DFSP + Identifier](./assets/3PAL_PISPGetsDFSPAccountList_20210830.png)
>

### PISP Consent Request

#### Description

The workflow provided by this UC supports authorized PISP User requests for consent to obtain specific (scoped) Accounts details from DFSPs supported by the system.

#### Flow Diagram

![Use Case - PISP Consent Request](./assets/3PAL_PISPConsentRequest_20210830.png)
>

### DFSP Issue Consent

#### Description

The workflow provided by this UC enables an authorised DFSP to:
 - Firstly, issue a provisional Consent in consequence of a previous "PISP Consent Request" workflow
  - Secondly, enable a PISP to attach Credential to the Consent
  - And thirdly, enable a DFSP to validate the Credential and active the Consent.

#### Flow Diagram

![Use Case - DFSP Issue Consent](./assets/3PAL_PISP-DFSPIssueConsent_20210830.png)
> 

### Unlink Accounts - Hub Hosted Auth

#### Description

The workflow provided by this UC enables an authorised PISP/DFSP Account Holder to revoke consent for a DFSP Account to be linked to their PISP Profile, which the Switch acts upon by updating the system Account Lookup Service to disassociate the PISP Participant/DFSP Account association, and notifying both the DFSP Account Holder (who removes the ALS Participant entry and Link from their system), and the PISP Host who sends a fulfilment notification to the User.

#### Flow Diagram

![Use Case - Unlink Accounts - Hub Hosted Auth](./assets/3PAL_PISP-UnlinkAccountsRequest_20210830.png)
>

### Link Accounts - Account Discovery Failure

#### Description

The workflow provided by this UC enables the Switch to correctly handle instances in which an authorised PISP User initiates a to link a DFSP Account to their PISP Profile using an invalid DFSP/Identifier pair not recognized by the DFSP. The DFSP messages the Switch with an error, which notifies the appropriate PISP, and the User receives a message to try another DFSP/Indentifier pair.

#### Flow Diagram

![Use Case - Link Accounts - Account Discovery Failure](./assets/3PAL_LinkAccounts-AccountDiscoveryFailure_20210830.png)
>

### Link Accounts - DFSP Rejects Consent Request

#### Description

The workflow provided by this UC enables the Switch to correctly handle instances where an authorized PISP User requests one or more accounts to be linked to their PISP Profile by the DFSP Account Holder.  The DFSP denies consent for the link to go ahead for whatever reason, e.g.: a selected account does not support linking, and messages the Switch with an error condition.  The Switch notifies the appropriate PISP, and the PISP User receives a message, in-app or otherwise, to try again as their account linking request failed.

#### Flow Diagram

![Use Case - Link Accounts - DFSP Rejects Consent Request](./assets/3PAL_PISPUserLinkAccounts-ConsentRequestReject_20210830.png)
>

### Credential Registration Error

#### Description

The workflow provided by this UC enables the Switch to handle instances where a DFSP Account Holder provides a PISP with a request for a (PISP) User to create a device-embedded credential in order to confirm a Consent Request, and where the credential, which when sent to the DFSP includes either an invalid signed challenge or signed metadata is rejected.  In this instance the DFSP messages the error condition to the Switch, which messages the appropriate PISP who notifies the (PISP) User that the Consent credential was rejected.

#### Flow Diagram

![Use Case - Credential Registration Error](./assets/3PAL_PISPUserCredRegError_20210830.png)
>

### Unlink Accounts - Consent not found

#### Description

The workflow provided by this UC enables the Switch to handle instances where an authorized PISP User is asked to confirm a consent request issued via either the PISP or DFSP Account Holder to unlink their DFSP Account from their PISP Profile.  The Switch refers the consent request response to the Consent Oracle for confirmation of the Consent Owner ID.  In instances where the Oracle is unable to confirm the ID of the Consent Owner, the request is failed.  The PISP User is alerted via the DFSP Account Holder or PISP profile holder, that the DFSP Account that they sought to unlink from their PISP profile was not found.

#### Flow Diagram

![Use Case - Unlink Accounts - Consent not found](./assets/3PAL_PISP-DFSPUnlinkAccounts-ConsentNotFound_20210830.png)
>

### DSPF Rejects OTP/Auth Token from PISP

#### Description

The workflow provided by this UC enables the Switch to handle instances where an authorised PISP User requests one or more of their DFSP Accounts to be linked to their PISP Profile.  The request is directed by the Switch to the DFSP Account Holder who issues an OTP/Web Login Flow to the PISP User for identification/confirmation purposes which is returned via the PISP to the Switch, and then to the DFSP Account Holder for consent.  In instances where the response token is altered or expired, the DFSP Account Holder issues a error condition message to the Switch and the PISP User is notified that the DFSP Account linking request failed.

#### Flow Diagram

![Use Case - DSPF Rejects OTP/Auth Token from PISP](./assets/3PAL_DFSPRejectsPISPUserToken_20210907.png)
>

### Unlink Accounts - Downstream Failure

#### Description

The workflow provided by this UC enables the Switch to handle instances in which an authorised PISP User's DFSP Account unlink consent confirmation fails the Switch's Authentication/Authorisation process for whatever reason, example: a downstram FSPIOP API error.  The error is messaged by the Switch to the DFSP Account Holder who will review the error and determine how to respond.  Where an error has occured, the PISP User is notified by the Switch via the PISP that their request to unlink their DFSP Account failed.

#### Flow Diagram

![Use Case - Unlink Accounts - Downstream Failure](./assets/3PAL_UnlinkAccounts-DownstreamFailure_20210908.png)
>

## Transfer Scenarios

***Note:*** *In the interests of compacting this workflow description, the reader should note that the Third Party API and the 3rd-Party Initiated Payments BCs work in concert to maintain Participant Information.  The interaction between the two BCs will not be specifically noted, but is as follows: where the Third Party API BC updates the Transaction state, and where the Participant Information is not cached, the 3rd-Party Initiated Payments BC will request the missing Participant Information from the Participant Lifecycle Management BC and deliver it to the Third Party API BC for inclusion in the Transaction information being presented to the DFSP/PISP systems.*

### Third Party Initiated Transaction Request

#### Description

<!---***Note:*** *In the interests of compacting this workflow description, the reader should note that the Third Party API and the 3rd-Party Initiated Payments BCs work in concert to maintain Participant Information.  The interaction between the two BCs will not be specifically noted, but is as follows: where the Third Party API BC updates the Transaction state, and where the Participant Information is not cached, the 3rd-Party Initiated Payments BC will request the missing Participant Information from the Participant Lifecycle Management BC and deliver it to the Third Party API BC for inclusion in the Transaction information being presented to the DFSP/PISP systems.*--->

The workflow provided by this UC enables the Switch to permit authorized PISP Users/Apps to issue a request to a DFSP to execute a transaction on behalf of an Account Holder, typically the PISP User/App, in favor of a third-party recipient or recipients.  The transaction is vetted via a DFSP confirmation request to the Account Holder, and concluded upon successful receipt of confirmation.  The Switch, per DFSP instructions, manages the transaction and updates all accounts accordingly.

Some suggested applications of Third Party Payment Initiation UC include:

 - Peer to Peer Payments (e.g.: GPay in India)
 - Online checkouts for seamless end-user user experience (UX) (e.g.: PayPal)
 - Payroll Clearing Software

#### Flow Diagram

![Use Case - Third Party Initiated Transaction Request](./assets/3PAT_3PartyInitTransferRequest_20210908n.png)
>

### PISP Bulk Transaction Request

#### Description

<!---***Note:*** *In the interests of compacting this workflow description, the reader should note that the Third Party API and the 3rd-Party Initiated Payments BCs work in concert to maintain Participant Information.  The interaction between the two BCs will not be specifically noted, but will be assumed as follows: where the 3rd-Party API BC updates Participant Information, and where the Participant Information is not cached, the 3rd-Party Initiated Payments BC will request the missing data from the Participant Lifecycle Management BC and deliver it to the 3rd-Party API BC for inclusion in the Transaction information being presented to the DFSP/PISP systems.*--->

The The workflow provided by this UC enables the Switch to permit authorized PISP Users/Apps to issue a request to a DFSP to execute a transaction on behalf of an Account Holder, typically the PISP User/App, in favor of a group of third-party recipients.  The transaction is vetted via a DFSP confirmation request to the Account Holder, and concluded upon successful receipt of confirmation.  The Switch, per DFSP instructions, manages the transaction and updates all accounts accordingly.

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/3PAT_PISPBulkTransfer_20210909.png)
>
### Pay to a PISP - PISP as a Payee

#### Description

The workflow provided by this UC enables the Switch to permit authorized DFSP Users to initiate and execute payments in favor of PISPs as Payees via the Switch.  The workflow provides support for payments both single or multiple PISP Payee/s.

#### Flow Diagram

![Use Case - Pay to a PISP - PISP as a Payee](./assets/3PAT_PayToPISP-PISPAsPayee_20210913.png)
>

### Third Party Transaction Request Failed - Bad Party Lookup

#### Description

The workflow provided by this UC enables the Switch to handle instances where an authorised PISP User initiates a transaction using an invalid Participant Identifier.  The Switch encounters the error during the Get Parties stage of the transaction preparation, and automatically terminates the request with notification sent to the request originator indicating the failure and the reason.

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/3PAT_TxRequestFail-BadPartyLookup_20210913.png)
>

### Third Party Transaction Request Failed - Bad Transaction Request

#### Description

The workflow provided by this UC enables the Switch to handle instances where an authorised PISP User initiates a Third Party Transaction Request, correctly confirms the Payee details, but the Payee DSFP fails to locate a valid Agreement for the transaction.  The Switch rejects the request and sends notification to the request originating indicating the failure and suggested follow-up actions.

#### Flow Diagram

![Use Case - Third Party Transaction Request Failed - Bad Transaction Request](./assets/3PAT_TxRequestFail-BadTxRequest_20210913.png)
>

### Third Party Transaction Request Failed - downstream FSPIOP failure

#### Description

The workflow provided by this UC enables the Switch to handle instances in which an authorised PISP User's DFSP Account unlink consent confirmation fails the Switch's Authentication/Authorisation process for whatever reason, example: a downstram FSPIOP API error.  The error is messaged by the Switch to the DFSP Account Holder who will review the error and determine how to respond.  Where an error has confirmed, the PISP User is notified that their DFSP Account unlink transaction request failed via their PISP profile holder.

#### Flow Diagram

![Use Case - Third Party Transaction Request Failed - downstream FSPIOP failure](./assets/3PAT_TxRequestFail-DownstreamFSPIOPFailure_20210913.png)
>

### Third Party Transaction Request Failed - authorization was invalid

#### Description

<!---***Note:*** *The flow for this transaction journey follows that of the Third-Party Initiated Transaction Request.  The difference in the flow for this transaction journey occurs during the Authentication/Authorization process, where it fails due to an invalidly signed Challenge.*--->

<!---(For a complete description of the transaction journey, please view the [Third Party Initiated Transaction Request journey](#third-party-initiated-transaction-request)*--->

The workflow provided by this UC enables the Switch to handle instances where a third-party transaction journey is initiated, then authorised by an PISP User on request from the DFSP Account Holder, and the Switch detects that the DFSP Challenge response received contained an invalid signature.  The Switch can then verify that the error has occurred and notify the DFSP Account Holder who in turn cancels the transaction and the notifies the PISP User via the Switch and their PISP profile holder.

#### Flow Diagram

![Use Case - Third Party Transaction Request Failed - authorization was invalid](./assets/3PAT-TxFail_InvalidAuth_20210914.png)
>

### Third Party Transaction Request Rejected by user

#### Description

<!---***Note:*** *The flow for this transaction journey is very similar to the Third-Party Initiated Transaction Request up until the point at which the DFSP Account Holder issues a challenge to the PISP User requesting them to agree to the terms of the transaction return the signed challenge. At this point the PISP User indicates that they wish to cancel the transaction.*--->

The workflow provided by this UC enables the Switch to handle instances where a PISP User declines to complete a transaction for whatever reason.  The transaction is established in the same way as all of the other transfer transaction related UCs, however, instead of approving the DFSP Account Holder terms and signing the challenge, the PISP User declines to continue with transaction.  The PISP receives the PISP User instruction and notifies the DFSP Account Holder via the Switch.  The Switch notifies the DFSP who cancels the transaction.  Participant (DFSP) Accounts are updated and the cancellation is noted to the PISP profile holder.

#### Flow Diagram

![Use Case - Third Party Transaction Request Rejected by user](./assets/3PAT_TxFail_UserRejected_20210914.png)
>

### Third Party Transaction Request Failed - DFSP timeout

#### Description

<!---***Note:*** *The flow for this transaction journey follows that of the Third-Party Initiated/PISP Bulk  Transaction Request.  The difference in the flow for this transaction journey occurs during the Agreement/Quote process where the DFSP Account Holder issues a message to the PISP User requesting them agree to the terms of the transaction agreement and sign the challenge token.  Where the PISP User fails to respond to the message within the allowed time a timeout will occur and the DFSP Account Holder cancels the transaction, the DFSP System will cancel the transaction noting a Request Error has occured.*--->

As per the note above, the DFSP Account Holder updates the 3rd-Party API BC that it has encountered a Transaction error via a Third Party request and provides the Transaction ID, along with the error code.  The participant/s account/s are updated via the 3rd-Party Initiated Payments BC and a notification is sent to the PISP via the Notification BC.  The PISP acknowledges receipt of the notification and notifies the PISP User that Transaction ID has failed.

#### Flow Diagram

![Use Case - Third Party Transaction Request Failed - DFSP timeout](./assets/3PAT_TxRequestFail_DfspTimeout_20210916.png)
>

<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]: Common Interfaces: [Mojaloop Common Interface List](../../commonInterfaces.md)
