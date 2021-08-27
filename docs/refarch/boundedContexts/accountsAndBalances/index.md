# Accounts and Balances BC

The Accounts and Balances BC acts as the "central ledger" for the system.  It interacts primarily with the Settlements and the Transfers BCs, and is a directed sub-system, which means that it is a dependency of the Settlements and Transfers BCs that use it as a "system of record" for the financial accounting.

**Note:** *The Accounts and Balances BC does not contain any Mojaloop business logic.  The only logic included in the BC is to ensure that when and external BC attempts to create new journal entries, that they do not cause an account balance to exceed its limits.*

## Terms

The following terms are used in this BC, also known as a domain.  (TBC)

| Term | Description |
|---|---|
| Account | Debit/Credit Ledger Account |

## Use Cases

**Note:** *As all of the UC workflows for the Accounts and Balances BC are local to the BC and have no external dependencies, no diagrams are required to detail external interactions.*

| **UC** | **Description** |
| :--- | :--- |
| Create Account | Create new participant account in the System Ledger |
| Close Account | Close a participant account in the System Ledger and prevent new journal entries from impacting it.<br/>(Still to be determined: Drain balance to another account atomically?) |
| Query Account | Query the status of participant account |
| Insert Journal Entry | Insert a participant journal entry into the System Ledger specifying the debit and credit accounts.<br/>Respond with the updated account balance. |

<!-- Footnotes themselves at the bottom. -->
<!-- ## Notes -->

[^1]: Common Interfaces: [Mojaloop Common Interface List](../../commonInterfaces.md)
