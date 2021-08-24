# Transfer BC

The Transfers BC is responsible for orchestrating transfer requests.  It works in concert with a number of other BCs, notably Settlements, Scheduling, Participant Lifecycle Management, Accounts & Balances, and the FSPIOP.

## Terms

The following terms are used in this BC, also known as a domain.

| Term | Description |
|---|---|
| Accounts | Refers to accounts used in all transfer activities.  They are used to record credit and debit positions, either temporarily in the case of accounts allocated for transfer purposes, or permanently in the case of final transfer updates to participant accounts. |
| Participant | Typically refers to DFSP Payer/Payee parties using Mojaloop. |

## Use Cases

### Perform Transfer (universal mode)

#### Description

Transfer method without Actor intervention.

![Perform Transfer (Universal Mode)](./assets/transfersUniversal_20210715.png)
>

### Perform Transfer with Payee Confirmation

#### Description

Transfer method with Actor intervention.

![Use Case - Perform Transfer with Payee Confirmation](./assets/transfersWithPayeeConfirm_20210715.png)
>

### Query (GET) Transfer

#### Description

Transfer status report query.

![Use Case - Query (GET) Transfer](./assets/transfersQuery_GET_20210716.png)
>

### Perform Transfer - Duplicate POST (Resend)

#### Description

Duplicate Transfer request method - completes

![Use Case - Perform Transfer - Duplicate POST (Resend)](./assets/transfersDuplicatePOSTResend_20210716.png)
>

### Perform Transfer - Duplicate POST (Ignore)

#### Description

Duplicate Transfer request method - ignored

![Use Case - Perform Transfer - Duplicate POST (Ignore)](./assets/transfersDuplicatePOST_Ignore_20210716.png)
>

## Non-Happy Path Use Case Variations

### Perform Transfer - PayeeFSP Rejects Transfer

#### Description

Transfer request rejected by Payee

![Use Case - Perform Transfer - PayeeFSP Rejects Transfer](./assets/transfersPayeeFSPRejectsTransfer_20210716.png)
>

### Perform Transfer - Timeout (Prepare)

#### Description

Transfer prepare request timeout

![Use Case - Perform Transfer - Timeout (Prepare)](./assets/transfersTimeout(Prepare)_20210716.png)
>

### Perform Transfer - Timeout (Pre-Committed)

#### Description

Pre-committed Transfer request timeout

![Use Case - Perform Transfer - Timeout (Pre-Committed)](./assets/transfersTimeoutPre-Committed_20210716.png)
>

### Perform Transfer - Timeout (Post-Committed)

#### Description

Post-committed transfer request timeout

![Use Case - Perform Transfer - Timeout (Post-Committed)](./assets/transfersTimeoutPost-Committed_20210716.png)
>

### Perform Transfer - Duplicate POST (None Matching)

#### Description

Non-matching duplicate Transfer request timeout

![Use Case - Perform Transfer - Duplicate POST (None Matching)](./assets/transfersDuplicatePOSTNoneMatching_20210716.png)
>

### Perform Transfer - Payer FSP Insufficient Liquidity

#### Description

Transfer request fail due to insufficient liquidity (Payer)

![Use Case - Perform Transfer - Payer FSP Insufficient Liquidity](./assets/transfersPayerFSPInsufficientLiquidity_20210719.png)
>

### Perform Transfer - Transfer Prepare Validation Failure (Invalid Payer Participant)

#### Description

Transfer prepare validation fail due to involid/non-existent Payer

![Use Case - Perform Transfer - Transfer Prepare Validation Failure (Invalid Payer Participant)](./assets/transfersTransferPrepareValidationFailureInvalidPayerParticipant_20210719.png)
>

### Perform Transfer - Transfer Prepare Validation Failure (Invalid Payee Participant)

#### Description

Transfer prepare validation fail due to involid/non-existent Payee

![Use Case - Perform Transfer - Transfer Prepare Validation Failure (Invalid Payee Participant)](./assets/transfersTransferPrepareValidationFailureInvalidPayeeParticipant_20210719.png)
>

### Query (GET) Transfer - Validation Failure (Invalid Payer Participant)

#### Description

Transfer status query - validation fail - invalid/non-existent Payer

<!--![Use Case - Query (GET) Transfer - Validation Failure (Invalid Payer Participant)](./assets/useCaseExample.png) -->
> UC Diagram TBC

### Query (GET) Transfer - Validation Failure (Invalid Payee Participant)

#### Description

Transfer status query - validation fail - invalid/non-existent Payee

<!--![Use Case - Query (GET) Transfer - Validation Failure (Invalid Payee Participant)](./assets/useCaseExample.png) -->
> UC Diagram TBC

### Query (GET) Transfer - Validation Failure (Transfer Identifier Not Found)

#### Description

Transfer status query - validation fail - Transfer identifier token not found

<!--![Use Case - Query (GET) Transfer - Validation Failure (Transfer Identifier Not Found)](./assets/useCaseExample.png) -->
> UC Diagram TBC

<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]: Common Interfaces: [Mojaloop Common Interface List](../../commonInterfaces.md)
