(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{489:function(e,t,i){e.exports=i.p+"assets/img/schedulingCreateReminder_20211021.99c3ac3c.png"},490:function(e,t,i){e.exports=i.p+"assets/img/schedulingReminderTriggered_20211021.80b8ca13.png"},491:function(e,t,i){e.exports=i.p+"assets/img/schedulingDeleteRecurringReminder_20211021.6fc8b3e8.png"},553:function(e,t,i){"use strict";i.r(t);var r=i(22),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"scheduling-bc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scheduling-bc"}},[e._v("#")]),e._v(" Scheduling BC")]),e._v(" "),r("p",[e._v("Multiple processes and events in BCs across the Mojaloop Switch platform require functionality to trigger at specific times, or in accordance with a schedule.  In order to support this requirement across the Switch, and avoid building scheduling functionality into multiple BCs, a single Scheduling BC will be introduced and implemented for the Switch platform.")]),e._v(" "),r("p",[e._v("In order to schedule a process or event, a Client BC submits a request to the Scheduling BC to create a reminder for a specific time or time schedule.  The Scheduling BC maintains a schedule of all of the reminders that it receives, and, as the time for reminders is reached, it sends notification of the reminder to the appropriate Client BC.")]),e._v(" "),r("p",[e._v("In addition, the Scheduling BC will also provide services to the Switch to enable Client BCs and Switch Admins to manage reminders that are set within the Scheduling BC.")]),e._v(" "),r("h2",{attrs:{id:"terms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#terms"}},[e._v("#")]),e._v(" Terms")]),e._v(" "),r("p",[e._v("The following common term/s are in use in this BC:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Term")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[e._v("Client BC")])]),e._v(" "),r("td",[e._v("Any other BC making use of the Scheduling BC Services")])])])]),e._v(" "),r("h2",{attrs:{id:"use-cases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use Cases")]),e._v(" "),r("p",[e._v("The status of the UCs for the Scheduling BC is as follows:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Available UCs")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}}),e._v(" "),r("th"),e._v(" "),r("th",[e._v("Planned UCs")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}})])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[e._v("Use Case")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Description")])]),e._v(" "),r("td"),e._v(" "),r("td",[r("strong",[e._v("Use Case")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Description")])])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Create Reminder")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Client BC requests a reminder to be created")]),e._v(" "),r("td"),e._v(" "),r("td",[r("strong",[e._v("Client Reminder Query")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Client BC queries its own reminders")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Delete Reminder")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Client BC requests a reminder to be deleted")]),e._v(" "),r("td"),e._v(" "),r("td",[r("strong",[e._v("Admin Reminder Query")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Platform Admin queries all reminders")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Reminder Trigger")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Scheduling BC executes reminder trigger when the time comes")]),e._v(" "),r("td"),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Update Reminder")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("em",[e._v("Not provided.  Recommended solution: delete and create a new Reminder")])]),e._v(" "),r("td"),e._v(" "),r("td"),e._v(" "),r("td",{staticStyle:{"text-align":"left"}}),e._v(" "),r("td")])])]),e._v(" "),r("h3",{attrs:{id:"create-reminder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-reminder"}},[e._v("#")]),e._v(" Create Reminder")]),e._v(" "),r("h4",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),r("p",[e._v("The workflow provided by this UC enables the Switch to handle authorised Client BC requests to create Reminders.")]),e._v(" "),r("h4",{attrs:{id:"flow-diagram"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flow-diagram"}},[e._v("#")]),e._v(" Flow Diagram")]),e._v(" "),r("p",[r("img",{attrs:{src:i(489),alt:"Create Reminder"}})]),e._v(" "),r("blockquote"),e._v(" "),r("h3",{attrs:{id:"reminder-triggered"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reminder-triggered"}},[e._v("#")]),e._v(" Reminder Triggered")]),e._v(" "),r("h4",{attrs:{id:"description-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[e._v("#")]),e._v(" Description")]),e._v(" "),r("p",[e._v("The workflow provided by this UC enables the Switch to handle reminders messaged from the Scheduling BC to a Client BC to execute a task, or as a reminder only.")]),e._v(" "),r("h4",{attrs:{id:"flow-diagram-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flow-diagram-2"}},[e._v("#")]),e._v(" Flow Diagram")]),e._v(" "),r("p",[r("img",{attrs:{src:i(490),alt:"Reminder Triggered"}})]),e._v(" "),r("blockquote"),e._v(" "),r("h3",{attrs:{id:"delete-recurring-reminder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#delete-recurring-reminder"}},[e._v("#")]),e._v(" Delete (Recurring) Reminder")]),e._v(" "),r("h4",{attrs:{id:"description-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[e._v("#")]),e._v(" Description")]),e._v(" "),r("p",[e._v("The workflow provided by this UC enables the switch to handle messages from authorised Client BCs to the Scheduling BC to delete a Reminder.  In the event that the Scheduling BC is unable to process the instruction, it sends an Alert message to the Notifications BC.")]),e._v(" "),r("h4",{attrs:{id:"flow-diagram-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flow-diagram-3"}},[e._v("#")]),e._v(" Flow Diagram")]),e._v(" "),r("p",[r("img",{attrs:{src:i(491),alt:"Delete (Recurring) Reminder"}})]),e._v(" "),r("blockquote"),e._v(" "),r("h2",{attrs:{id:"notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),r("h4",{attrs:{id:"create-reminder-required-data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-reminder-required-data"}},[e._v("#")]),e._v(" Create Reminder - Required data")]),e._v(" "),r("p",[e._v("The Create Reminder request needs to include the following data:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Data")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[e._v("Identifier")])]),e._v(" "),r("td",[e._v("name/id")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Cron Definition")])]),e._v(" "),r("td",[e._v("recurring?, time interval?")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Trigger Transport")])]),e._v(" "),r("td",[e._v("HTTP Callback/Event; Callback URL or Event Topic")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Special Payload")])]),e._v(" "),r("td",[e._v("opaque for the scheduling BC")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Recovery Conditions")])]),e._v(" "),r("td",[e._v("retry, reschedule, abort, abandon")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Alerts")])]),e._v(" "),r("td",[e._v("notification, logging on exceptions")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Actions")])]),e._v(" "),r("td",[e._v("register of automatable/schedulable BC processes")])])])]),e._v(" "),r("h4",{attrs:{id:"scheduling-bc-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scheduling-bc-requirements"}},[e._v("#")]),e._v(" Scheduling BC - Requirements")]),e._v(" "),r("p",[e._v("The Scheduling BC must meet the following requirements:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Reminders must be triggered once only")])]),e._v(" "),r("li",[r("p",[e._v("BC must keep track of triggered Reminders")])]),e._v(" "),r("li",[r("p",[e._v("BC must keep track of Create/Read/Delete actions")]),e._v(" "),r("ul",[r("li",[e._v("Updates will be facilitated through Delete/Create actions as noted in the "),r("a",{attrs:{href:"#use-cases"}},[e._v("Use Case Available UCs")]),e._v(" list")])])]),e._v(" "),r("li",[r("p",[e._v("Job batches")])]),e._v(" "),r("li",[r("p",[e._v("Offer multiple interface options (gRPC, REST, HTTP, etc.)")])]),e._v(" "),r("li",[r("p",[e._v("Reminders should be triggered with an HTTP callback, not a gRPC call, or to a specific topic")])]),e._v(" "),r("li",[r("p",[e._v("It should have no ability to process logic external to the Scheduling BC itself")])]),e._v(" "),r("li",[r("p",[e._v("Make use of Linux-based UTC timestamps only in order to avoid synchronization issues")])])]),e._v(" "),r("p",[r("em",[r("strong",[e._v("Note:")])]),e._v(" "),r("em",[e._v("It is assumed that the underlying system will keep perfect time.")])]),e._v(" "),r("h4",{attrs:{id:"scheduling-bc-outstanding-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scheduling-bc-outstanding-requirements"}},[e._v("#")]),e._v(" Scheduling BC - Outstanding requirements")]),e._v(" "),r("p",[e._v("Access requirements for the Scheduling BC still require definition.")]),e._v(" "),r("h4",{attrs:{id:"scheduling-bc-exceptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scheduling-bc-exceptions"}},[e._v("#")]),e._v(" Scheduling BC - Exceptions")]),e._v(" "),r("ul",[r("li",[e._v("Malformed instructions\n"),r("ul",[r("li",[e._v("Invalid date/time, including times in the past")]),e._v(" "),r("li",[e._v("Invalid BC or command")])])]),e._v(" "),r("li",[e._v("Failed execution (identified through call-back)")]),e._v(" "),r("li",[e._v("Insufficient authority for the Client BC to perform the CRD operation")]),e._v(" "),r("li",[e._v("Failure to process/execute Reminder")])]),e._v(" "),r("h4",{attrs:{id:"questions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#questions"}},[e._v("#")]),e._v(" Questions")]),e._v(" "),r("p",[e._v("A number of questions came up during the Reference Architecture Work Sessions and, as some were felt to have potential value from which others would benefit, we have included them below:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("After the scheduled task has been initiated, does the Scheduling BC remain responsible for tracking its progress?")]),e._v(" "),r("ul",[r("li",[e._v("Answer: No. When the Reminder is due, it is communicated to the Client BC using the precribed method, and thereafter, the Scheduling BC responsibility for the reminder is passed back to the Client BC.")])])]),e._v(" "),r("li",[r("p",[e._v("Is the Client BC or the person who scheduled a Reminder noted as the “User” by the Scheduling BC?  IOW, whose ID is stamped on the process audit trail?")]),e._v(" "),r("ul",[r("li",[e._v("Answer: This should be determined by the Client BC, based on its action on receipt of the Reminder.")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);