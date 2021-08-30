# Third Party API BC

The Third Party API BC has been implemented with the Mojaloop 2.0 Reference Architecture to enable third-party PISP Operators (typically applications) to interact with the platform.

## Terms

The following common terms are used in this BC:

| Term | Description  |
| ---- | ------------ |
| PISP | Payment Initiation Service Provider |
| DFSP | Digital Financial Service Provider (Bank |
| User | DFSP/PISP client (as indicated) |

## Use Cases

**Note:** Our Use Cases cover two specific scenarios:

| Scenarios | Description |
| --------- | ----------- |
| Linking | PISP Housekeeping activities. |
| Transfer | PISP Transfer initiation activities. |

### Linking Scenarios

### PISP Gets list of accounts for a DFSP + Identifier

#### Description

PISP requests a list of DFSP Accounts and Account Identifiers.

#### Flow Diagram

![Use Case - PISP Gets list of accounts for a DFSP + Identifier](./assets/3PAL_PISPGetsDFSPAccountList_20210830.png)
>

### PISP Consent Request

#### Description

PISP requests access consent to specific (scoped) Accounts details.

#### Flow Diagram

![Use Case - PISP Consent Request](./assets/3PAL_PISPConsentRequest_20210830.png)
>

### DFSP Issue Consent

#### Description

In order to fulfil the PISP request for consent to access a User's account details, the DFSP issues a Consent Request to the User asking them to indicate consent via their device.

#### Flow Diagram

![Use Case - DFSP Issue Consent](./assets/3PAL_PISP-DFSPIssueConsent_20210830.png)
> 

### Unlink Accounts - Hub Hosted Auth

#### Description

A request is made via the DFSP to revoke PISP access consent for a User Account.  Both the DFSP and the User are provided with notification once access consent has been revoked.

#### Flow Diagram

![Use Case - Unlink Accounts - Hub Hosted Auth](./assets/3PAL_PISP-UnlinkAccountsRequest_20210830.png)
>

### Link Accounts - Account Discovery Failure

#### Description

PISP User issues Account Discovery request containing the incorrect DFSP Identifier.  The User is notified and advised to check and retry.

#### Flow Diagram

![Use Case - Link Accounts - Account Discovery Failure](./assets/3PAL_LinkAccounts-AccountDiscoveryFailure_20210830.png)
>

### Link Accounts - DFSP Rejects Consent Request

#### Description

PISP User issues request to link to DFSP-held Accounts with an incorrect Account scope which the DFSP rejects, noting the reason for the rejection to the PISP User and suggesting that they check their request and retry.

#### Flow Diagram

![Use Case - Link Accounts - DFSP Rejects Consent Request](./assets/3PAL_LinkAccounts-ConsentRequestReject_20210830.png)
> example image - replace

### Perform Transfer (universal mode)

#### Description

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/useCaseExample.png)
> example image - replace

### Perform Transfer (universal mode)

#### Description

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/useCaseExample.png)
> example image - replace

### Perform Transfer (universal mode)

#### Description

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/useCaseExample.png)
> example image - replace

### Transfer Scenarios

### Perform Transfer (universal mode)

#### Description

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/useCaseExample.png)
> example image - replace

### Perform Transfer (universal mode)

#### Description

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/useCaseExample.png)
> example image - replace

### Perform Transfer (universal mode)

#### Description

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/useCaseExample.png)
> example image - replace

### Perform Transfer (universal mode)

#### Description

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/useCaseExample.png)
> example image - replace

### Perform Transfer (universal mode)

#### Description

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/useCaseExample.png)
> example image - replace

### Perform Transfer (universal mode)

#### Description

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/useCaseExample.png)
> example image - replace

### Perform Transfer (universal mode)

#### Description

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/useCaseExample.png)
> example image - replace

### Perform Transfer (universal mode)

#### Description

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/useCaseExample.png)
> example image - replace

### Perform Transfer (universal mode)

#### Description

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/useCaseExample.png)
> example image - replace

### Perform Transfer (universal mode)

#### Description

#### Flow Diagram

![Use Case - Example REPLACE ME](./assets/useCaseExample.png)
> example image - replace

### PISP Gets supported DFSPs

#### Description

PISP requests a list of DFSPs supported by the system.

#### Flow Diagram

![Use Case - PISP Gets supported DFSPs](./assets/3PAL_PISPGetSupportedDFSPs_20210830.png)
>

<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]: Common Interfaces: [Mojaloop Common Interface List](../../commonInterfaces.md)
