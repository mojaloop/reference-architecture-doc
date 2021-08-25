# Participant Lifecycle BC

The Participant Lifecycle Bounded Context's primary concern regards anything to do with the management of a Participant within the Mojaloop Environment. 
TODO:
 Maker-Checker Process. [^1]
 Configuration & Bootstrapping
 Operations & Admin API
 Participant endpoints
 Participants can only have one account per allowed currency


## Terms

Terms with specific and commonly accepted meaning within the Bounded Context in which they are used.

| Term | Description |
|---|---|
| Term1 | Description1 |

## Use Cases


### Create Participant (Single Step Registration)

![Use Case - Example REPLACE ME](./assets/1-create-participant.jpg)
> Create Participant (Single Step Registration)

### Manage Funds

![Use Case - Example REPLACE ME](./assets/2-manage-funds.jpg)
> Manage Funds

### Update Endpoints

![Use Case - Example REPLACE ME](./assets/3-update-endpoints.jpg)
> Update Endpoints

### Update Participant Status

![Use Case - Example REPLACE ME](./assets/4-participant-update-status.jpg)
> Update Participant Status

### Get Participant

![Use Case - Example REPLACE ME](./assets/7-get-participant.jpg)
> Get Participant

### Participant Accounts

**Add Participant Account**
**Update Participant Account Status (Enable/Disable)**
**Update Liquidity Limits and Warning Thresholds**

![Use Case - Example REPLACE ME](./assets/5-participant-accounts.jpg)
> Participant Accounts

### Reserve Liquidity Cover

![Use Case - Example REPLACE ME](./assets/6-liquidity-cover-reservations.jpg)
> Reserve Liquidity Cover

### Liquidity Threshold Exceeded

![Use Case - Example REPLACE ME](./assets/8-liquidity-threshold-exceeded.jpg)
> Liquidity Threshold Exceeded

### Liquidity Cover Queries

![Use Case - Example REPLACE ME](./assets/9-liquidity-cover-queries.jpg)
> Liquidity Cover Queries

<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]: Common Interfaces: [Mojaloop Common Interface List](../../commonInterfaces.md)
