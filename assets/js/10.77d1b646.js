(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{499:function(t,e,a){t.exports=a.p+"assets/img/ML2RA_SecAuth-ucUserOpsLogin(AuthN)_Apr22_1829.96ad6adf.png"},500:function(t,e,a){t.exports=a.p+"assets/img/ML2RA_SecAuth-ucAuthModel_Apr22_1829.b4f4b005.png"},501:function(t,e,a){t.exports=a.p+"assets/img/ML2RA_SecAuth-ucBcBootstrap-OncePerNewVer_Apr22_1829.ad3ba0d7.png"},502:function(t,e,a){t.exports=a.p+"assets/img/ML2RA_SecAuth-ucBcStartup_Apr22_1829.599e09c3.png"},503:function(t,e,a){t.exports=a.p+"assets/img/ML2RA_SecAuth-ucRolePriviledgeAssoc_Apr22_1829.fe030b14.png"},504:function(t,e,a){t.exports=a.p+"assets/img/ML2RA_SecAuth-ucExampleApiQueryCall_Apr22_1829.4eb5536c.png"},556:function(t,e,a){"use strict";a.r(e);var r=a(22),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"security-bc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security-bc"}},[t._v("#")]),t._v(" Security BC")]),t._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),r("p",[t._v("The protocol is request and response based, and the used transport protocol is secure Hypertext Transfer Protocol Secure (HTTPS). All services use the HTTP POST and GET methods. Both the request and response bodies are encoded in JSON-formatted text.")]),t._v(" "),r("h2",{attrs:{id:"terms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#terms"}},[t._v("#")]),t._v(" Terms")]),t._v(" "),r("p",[t._v("Terms with specific and commonly accepted meaning within the Security Bounded Context.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Module")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("Crypto providers")])]),t._v(" "),r("td",[t._v("Adapter that will provide cryptographic services and Key Management Services")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("IAM")])]),t._v(" "),r("td",[t._v("Identity and Access Management. Adapter that will provide services for user management, menus, profiles, roles and permissions.")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("AuthN")])]),t._v(" "),r("td",[t._v("Authentication module. Requires userid and password and returns a JWT token")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("AuthZ")])]),t._v(" "),r("td",[t._v("Authorization module. Requires JWT and certificate (public key). Verifies JWT ROLES and signature")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("JWT")])]),t._v(" "),r("td",[t._v("JSON Web Token. Returned after a successful user authentication. Contains user details, ROLES and signature.")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("KMS")])]),t._v(" "),r("td",[t._v("Key Management System. Manages cryptographic keys lifecycle (definition, creation and retirement). It is part of the Cyrpto subsystem")])])])]),t._v(" "),r("h2",{attrs:{id:"use-cases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[t._v("#")]),t._v(" Use Cases")]),t._v(" "),r("h3",{attrs:{id:"bc-user-operator-login-authn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bc-user-operator-login-authn"}},[t._v("#")]),t._v(" BC User / Operator login (AuthN)")]),t._v(" "),r("h4",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("The login function requires that the user id and a secret key be passed in the http body. The response contains a signed JWT token. The signature is generated by the Crypto subsystem. The login is performed by the Authorization services or IAM.")]),t._v(" "),r("h4",{attrs:{id:"flow-diagram"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flow-diagram"}},[t._v("#")]),t._v(" Flow Diagram")]),t._v(" "),r("p",[r("img",{attrs:{src:a(499),alt:"Use Case - BC User / Operator Login (AuthN)"}})]),t._v(" "),r("blockquote",[r("p",[t._v("UC Workflow Diagram: BC User/Operator Login (AuthN)")])]),t._v(" "),r("h3",{attrs:{id:"bc-authorization-model-authz"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bc-authorization-model-authz"}},[t._v("#")]),t._v(" BC Authorization Model (AuthZ)")]),t._v(" "),r("h4",{attrs:{id:"description-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("IAM will provide users / groups, roles and privileges associations. Each BC will also have a list of related roles. When an API function or microservice"),r("br"),t._v("\nis called, the JWT signature is verified using the public key and the role provided in the JWT is compared to the role associated with the BC. If the signature verification and the role are successfully verified, the API function or microservice is executed.")]),t._v(" "),r("h4",{attrs:{id:"flow-diagram-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flow-diagram-2"}},[t._v("#")]),t._v(" Flow Diagram")]),t._v(" "),r("p",[r("img",{attrs:{src:a(500),alt:"Use Case - BC Authorization Model (AuthZ)"}})]),t._v(" "),r("blockquote",[r("p",[t._v("UC Workflow Diagram: BC Authorization Model (AuthZ)")])]),t._v(" "),r("h3",{attrs:{id:"bc-bootstrap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bc-bootstrap"}},[t._v("#")]),t._v(" BC Bootstrap")]),t._v(" "),r("h4",{attrs:{id:"description-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("At bootstrap, the BC will send the list of possible privileges. This is done once per deployement of a new version.")]),t._v(" "),r("h4",{attrs:{id:"flow-diagram-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flow-diagram-3"}},[t._v("#")]),t._v(" Flow Diagram")]),t._v(" "),r("p",[r("img",{attrs:{src:a(501),alt:"Use Case - BC Bootstrap"}})]),t._v(" "),r("blockquote",[r("p",[t._v("UC Workflow Diagram: BC Bootstrap")])]),t._v(" "),r("h3",{attrs:{id:"bc-startup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bc-startup"}},[t._v("#")]),t._v(" BC Startup")]),t._v(" "),r("h4",{attrs:{id:"description-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-4"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("At startup the BC will request authentication issuer public keys from Security BC Crypto / KMS subsystems and the list of roles / privileges Security BC IAM subsystem. A local crypto library signature verification function will verfiy the JWT signature and the roles in the JWT will be compared with the local list of roles obtained from the central authorization service.")]),t._v(" "),r("h5",{attrs:{id:"flow-diagram-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flow-diagram-4"}},[t._v("#")]),t._v(" Flow Diagram")]),t._v(" "),r("p",[r("img",{attrs:{src:a(502),alt:"Use Case - BC Startup"}})]),t._v(" "),r("blockquote",[r("p",[t._v("UC Workflow Diagram: BC Startup")])]),t._v(" "),r("h3",{attrs:{id:"role-privilege-association"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#role-privilege-association"}},[t._v("#")]),t._v(" Role / Privilege association")]),t._v(" "),r("h4",{attrs:{id:"description-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-5"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Roles are associated with a number of privileges.")]),t._v(" "),r("h4",{attrs:{id:"flow-diagram-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flow-diagram-5"}},[t._v("#")]),t._v(" Flow Diagram")]),t._v(" "),r("p",[r("img",{attrs:{src:a(503),alt:"Use Case - BC Startup"}})]),t._v(" "),r("blockquote",[r("p",[t._v("UC Workflow Diagram: Role / Priviledge Association")])]),t._v(" "),r("h3",{attrs:{id:"example-query-call"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-query-call"}},[t._v("#")]),t._v(" Example Query / call")]),t._v(" "),r("h4",{attrs:{id:"description-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-6"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Client Authorization should be performed by using an access token. A client first needs to request the Authorization Service to create an access token for the user who requests to access the interface. The user is authenticated in the Authorization Service. The created access token is then used for authorization in the interface."),r("br"),t._v("\nTo use the access token, the client must set the Authorization HTTP header to Bearer [access_token] in each request to the interface.")]),t._v(" "),r("h4",{attrs:{id:"flow-diagram-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flow-diagram-6"}},[t._v("#")]),t._v(" Flow Diagram")]),t._v(" "),r("p",[r("img",{attrs:{src:a(504),alt:"Use Case - Example API Query/Call"}})]),t._v(" "),r("blockquote",[r("p",[t._v("UC Workflow Diagram: Example API Query/Call")])])])}),[],!1,null,null,null);e.default=s.exports}}]);