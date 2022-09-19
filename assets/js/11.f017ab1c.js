(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{493:function(e,t,n){e.exports=n.p+"assets/img/ML2RA_in_RefArchOver_Core_Apr22c_1670.e7ed83e2.png"},494:function(e,t,n){e.exports=n.p+"assets/img/ML2RA_in_RefArchOver_Generic_Apr22c_1670.96a8f475.png"},495:function(e,t,n){e.exports=n.p+"assets/img/ML2RA_in_RefArchOver_Supporting_Apr22c_1670.4f4e565a.png"},496:function(e,t,n){e.exports=n.p+"assets/img/ML2RA_in_RefArchOver_NFRs_Apr22c_1670.a3841ad0.png"},497:function(e,t,n){e.exports=n.p+"assets/img/ML2RA_in_RefArchOver_newUnclassified_Apr22c_1670.e4f62c22.png"},498:function(e,t,n){e.exports=n.p+"assets/img/ML2RA_in_RefArchOver_SolutionSpace_Apr22a.b5ca1d82.png"},555:function(e,t,n){"use strict";n.r(t);var i=n(22),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"mojaloop-reference-architecture-overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mojaloop-reference-architecture-overview"}},[e._v("#")]),e._v(" Mojaloop Reference Architecture Overview")]),e._v(" "),i("h2",{attrs:{id:"problem-space-problem-space-identification-and-map"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#problem-space-problem-space-identification-and-map"}},[e._v("#")]),e._v(" Problem Space ("),i("em",[e._v("Problem space identification and map)")])]),e._v(" "),i("p",[e._v("As noted in the DDD-architecture overview, the Problem Space contains a number of solution-oriented containers identified by the system architects’ team which are being used to categorise subdomains where problems (improvements) have been identified.")]),e._v(" "),i("h3",{attrs:{id:"core-problems"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#core-problems"}},[e._v("#")]),e._v(" Core Problems")]),e._v(" "),i("h4",{attrs:{id:"description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),i("p",[e._v("A number of Core Problems (improvements) have been identified by (Business/Developers/Both Business & Developers).  In order to implement the improvements, “internal” development teams will be tasked with developing the required solutions.  Typically the Subdomains thus identified generate significant value for the Mojaloop system, therefore care is taken to ensure that the services they provide are not compromised.  Examples of Core Problem Subdomains include: Participant Lifecycle Management, Settlements, and Scheduling.")]),e._v(" "),i("h4",{attrs:{id:"high-level-map"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#high-level-map"}},[e._v("#")]),e._v(" High-Level Map")]),e._v(" "),i("p",[i("img",{attrs:{src:n(493),alt:"Core Problems"}})]),e._v(" "),i("blockquote",[i("p",[e._v("Reference Architecture (Mojaloop): Core Problems")])]),e._v(" "),i("h3",{attrs:{id:"generic-problems"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#generic-problems"}},[e._v("#")]),e._v(" Generic Problems")]),e._v(" "),i("h4",{attrs:{id:"description-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[e._v("#")]),e._v(" Description")]),e._v(" "),i("p",[e._v("A number of Generic Problems (improvements) have been identified by (Business/Developers/Both Business & Developers).  In order to implement the improvements, off-the-shelf solutions will be implemented that require no further customization.  They will require integration with the Mojaloop.  Examples of Generic problem subdomains include Authentication, FRMS, and Platform Monitoring.")]),e._v(" "),i("h4",{attrs:{id:"high-level-map-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#high-level-map-2"}},[e._v("#")]),e._v(" High-Level Map")]),e._v(" "),i("p",[i("img",{attrs:{src:n(494),alt:"Generic Problems"}})]),e._v(" "),i("blockquote",[i("p",[e._v("Reference Architecture (Mojaloop): Generic Problems")])]),e._v(" "),i("h3",{attrs:{id:"supporting-problems"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#supporting-problems"}},[e._v("#")]),e._v(" Supporting Problems")]),e._v(" "),i("h4",{attrs:{id:"description-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[e._v("#")]),e._v(" Description")]),e._v(" "),i("p",[e._v("A number of Supporting Problems (improvements) have been identified by (Business/Developers/Both Business & Developers).  In order to implement the improvements, off-the-shelf solutions will be implemented, however in order to fully integrate them with the Mojaloop system and satisfy the identified problems (improvements) additional customization will be required for each of the integrated solutions.  Examples of Supporting Problem Subdomains include Access Policy Management, Reporting, and Authorization (Access Policy content verification).")]),e._v(" "),i("h4",{attrs:{id:"high-level-map-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#high-level-map-3"}},[e._v("#")]),e._v(" High-Level Map")]),e._v(" "),i("p",[i("img",{attrs:{src:n(495),alt:"Supporting Problems"}})]),e._v(" "),i("blockquote",[i("p",[e._v("Reference Architecture (Mojaloop): Supporting Problems")])]),e._v(" "),i("h3",{attrs:{id:"non-functional-requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#non-functional-requirements"}},[e._v("#")]),e._v(" Non-Functional Requirements")]),e._v(" "),i("h4",{attrs:{id:"description-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description-4"}},[e._v("#")]),e._v(" Description")]),e._v(" "),i("p",[e._v("A number of Non-Functional Requirements have been identified by (Business/Developers/Both Business & Developers).  Whilst they do not add direct value to Mojaloop, they are required in order to fulfil a number of business-related problems (improvements).  Examples of Non-Functional Requirements include security which does not occupy its own subdomain.  All system Subdomains will need to include elements of code pertaining to security in fulfillment of this requirement, alternatively, a central security management service will be implemented that includes centrally managed and constructed security profiles for each Subdomain in the system which they will download upon joining the Domain, or upon initiation, and/or which will be pushed down to them from the central service when updates occur.")]),e._v(" "),i("h4",{attrs:{id:"high-level-map-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#high-level-map-4"}},[e._v("#")]),e._v(" High-Level Map")]),e._v(" "),i("p",[i("img",{attrs:{src:n(496),alt:"Non-Functional Requirements"}})]),e._v(" "),i("blockquote",[i("p",[e._v("Reference Architecture (Mojaloop): Non-Functional Requirements")])]),e._v(" "),i("h3",{attrs:{id:"new-and-unclassified-non-domain"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#new-and-unclassified-non-domain"}},[e._v("#")]),e._v(" New and Unclassified (non-domain)")]),e._v(" "),i("h4",{attrs:{id:"description-5"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description-5"}},[e._v("#")]),e._v(" Description")]),e._v(" "),i("p",[e._v("A number of New and Unclassified (non-domain) problems have been identified by both Business and Developers).  Once Business and the System Architects have identified the required solution in order to solve the problem, they will be classified into one of the Problem containers and fulfilled in accordance with its processes.")]),e._v(" "),i("h4",{attrs:{id:"high-level-map-5"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#high-level-map-5"}},[e._v("#")]),e._v(" High-Level Map")]),e._v(" "),i("p",[i("img",{attrs:{src:n(497),alt:"New & Unclassified Problems"}})]),e._v(" "),i("blockquote",[i("p",[e._v("Reference Architecture (Mojaloop): New and Unclassified Problems")])]),e._v(" "),i("h2",{attrs:{id:"solution-space-high-level-description-and-the-context-map"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#solution-space-high-level-description-and-the-context-map"}},[e._v("#")]),e._v(" Solution Space ("),i("em",[e._v("High level description and the context map)")])]),e._v(" "),i("h4",{attrs:{id:"description-6"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description-6"}},[e._v("#")]),e._v(" Description")]),e._v(" "),i("p",[e._v("The Solution Space defined by DDD-architecture is focused on how the business problems (improvements) identified in the Problem Space are going to be solved.  As a result it necessarily contains more information and technical details than the Problem Space.  It includes elements such as Ubiquitous Language, Bounded Contexts, and Cross-Cutting Concerns.")]),e._v(" "),i("h4",{attrs:{id:"high-level-map-6"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#high-level-map-6"}},[e._v("#")]),e._v(" High-Level Map")]),e._v(" "),i("p",[i("img",{attrs:{src:n(498),alt:"Solution Space"}})]),e._v(" "),i("blockquote",[i("p",[e._v("Reference Architecture (Mojaloop): Solution Space")])]),e._v(" "),i("h3",{attrs:{id:"ubiquitous-language"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ubiquitous-language"}},[e._v("#")]),e._v(" Ubiquitous Language")]),e._v(" "),i("h4",{attrs:{id:"description-7"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description-7"}},[e._v("#")]),e._v(" Description")]),e._v(" "),i("p",[e._v("A challenge that most teams face is maintaining a clear understanding of terms that may not be unique with a particular Domain.  A classic example of a non-unique term is “account”: this term could refer to a set of financial accounts, entity profile, or a login name.")]),e._v(" "),i("p",[e._v("As noted in the overview, Ubiquitous Language is used to aid in the elimination of confusion and miscommunication between business and technical teams working to solve a business problem or group of business problems.  Whilst it is possible that that each Domain/Subdomain may contain terms that are not unique, as noted above, within a particular context, and in the instance of DDD-architecture, that would be a Bounded Context, it is important to ensure that all terms are unique, clearly understood by all participants, and correctly applied.")]),e._v(" "),i("p",[e._v("For insights and a description of each of the unique language terms used in the Mojaloop Domain, please refer to the "),i("RouterLink",{attrs:{to:"/glossary/"}},[e._v("Glossary")]),e._v(" appended to this document.")],1),e._v(" "),i("h3",{attrs:{id:"bounded-contexts"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bounded-contexts"}},[e._v("#")]),e._v(" Bounded Contexts")]),e._v(" "),i("p",[e._v("The following Bounded Contexts have been identified and implemented in Mojaloop:")]),e._v(" "),i("blockquote",[i("p",[e._v("This is a high-level description of each of the Bounded Contexts that have been identified and included in the Mojaloop Reference Architecture.  A more detailed view follows in the "),i("RouterLink",{attrs:{to:"/boundedContexts/"}},[e._v("Bounded Context")]),e._v(" section of this document.")],1)]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Bounded Context")]),e._v(" "),i("th",[e._v("Purpose")]),e._v(" "),i("th",[e._v("Bounded Context")]),e._v(" "),i("th",[e._v("Purpose")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Settlements")]),e._v(" "),i("td",[e._v("Performs Settlements"),i("br"),e._v(" Configures settlement models"),i("br"),e._v(" Calculate Settlements")]),e._v(" "),i("td",[e._v("Participant Lifecycle Management")]),e._v(" "),i("td",[e._v("Participant Onboarding"),i("br"),e._v(" Participant Lifecycle Management"),i("br"),e._v(" Participant Self-service"),i("br"),e._v(" Participant Self-service UI")])]),e._v(" "),i("tr",[i("td",[e._v("Account Lookup & Discovery")]),e._v(" "),i("td",[e._v("Internal Oracle core"),i("br"),e._v(" Account lookup / discovery"),i("br"),e._v(" Bulk transactions"),i("br"),e._v(" Duplicate Identifier management"),i("br"),e._v(" Inter-scheme connections (incl. settlements) cross-border")]),e._v(" "),i("td",[e._v("Accounts & Balances")]),e._v(" "),i("td",[e._v("System of record of DFSP participant financial activity & balance")])]),e._v(" "),i("tr",[i("td",[e._v("Transfers & Transactions")]),e._v(" "),i("td",[e._v("Transfer processing"),i("br"),e._v(" Liquidity check for each transfer"),i("br"),e._v(" Bulk transactions"),i("br"),e._v(" Multi-currency, incl.multi-hop transactions")]),e._v(" "),i("td",[e._v("Agreement (Quoting)")]),e._v(" "),i("td",[e._v("Agreement /quoting (core)"),i("br"),e._v(" Bulk transactions"),i("br"),e._v(" Multi-currency, incl.multi-hop transactions"),i("br"),e._v(" Scheme Rule/Patterns Enforcement Happens in each BC")])]),e._v(" "),i("tr",[i("td",[e._v("Scheduling")]),e._v(" "),i("td",[e._v("Scheduling time-based events of API calls (Core)")]),e._v(" "),i("td",[e._v("Notifications & Alerts")]),e._v(" "),i("td",[e._v("Notification state - priority & SLA aware (Core)"),i("br"),e._v(" Trigger & alert management (Core)"),i("br"),e._v(" Notifications delivery - priority and SLA aware (Generic)")])]),e._v(" "),i("tr",[i("td",[e._v("FSP Interop APIs")]),e._v(" "),i("td",[e._v("ISO External API (Bulk; API, Callbacks triggering (transfers only, Missing in AS-IS)")]),e._v(" "),i("td",[e._v("Third Party Initiated Payments")]),e._v(" "),i("td",[e._v("PISP Account Linking"),i("br"),e._v(" Consent Management"),i("br"),e._v(" 3rd Party Payment Initiation (Core)")])]),e._v(" "),i("tr",[i("td",[e._v("Third party API")]),e._v(" "),i("td"),e._v(" "),i("td",[e._v("PISP Mojaloop External API"),i("br"),e._v(" PISP ISO External API")]),e._v(" "),i("td")])])]),e._v(" "),i("h3",{attrs:{id:"cross-cutting-concerns"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cross-cutting-concerns"}},[e._v("#")]),e._v(" Cross cutting concerns")]),e._v(" "),i("p",[e._v("The following Cross cutting concerns have been identified in Mojaloop:")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Cross Cutting Concern BC")]),e._v(" "),i("th",[e._v("Purpose")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("AuthZ & AuthN and Identity Management BC")]),e._v(" "),i("td",[e._v("Manage all aspects of both user and system authentication (AuthN) and authorization (AuthZ). Planned solutions will fit into the Generic and Supporting categories")])]),e._v(" "),i("tr",[i("td",[e._v("Cryptographic BC")]),e._v(" "),i("td",[e._v("Manage all cryptographic related services including Key and Certificate Management and Storage Systems. Planned solutions will fit into the Generic category.")])]),e._v(" "),i("tr",[i("td",[e._v("Reporting and Auditing BC")]),e._v(" "),i("td",[e._v("Manage all audit and reporting services including Compliance and Assurance Reporting, Forensic Event Logging and KMS, Forensic Event Log Access and Management, Process Monitoring and SLAs, and System Auditing. (Each BC will include auditing capability. The Reporting and Auditing BC will retain logs from all of the BCs). Planned solutions will fit into all of the Problem Space categories: Core, Supporting, and Generic.")])]),e._v(" "),i("tr",[i("td",[e._v("Platform Configuration (Business) BC")]),e._v(" "),i("td",[e._v("Manage Scheme rule/patterns management process (Note; Scheme rule/patterns enforcement is maintained in each BC), Scheme mandated transaction patterns, application management and security, identity and access management (including user and team management), bizops API linking consent management, and access policy management. Planned solutions will fit into all of the Problem Space categories: Core, Supporting, and Generic")])]),e._v(" "),i("tr",[i("td",[e._v("Technical Platform Management BC")]),e._v(" "),i("td",[e._v("Manage platform monitoring, and platform management. Planned solutions will fit into the Generic category.")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);