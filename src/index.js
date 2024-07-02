const ngrok = require("@ngrok/ngrok");
const fs = require("fs");


// const policies = `enabled: true
//       inbound:
//       - expressions: 
//         name: Add JWT authentication and rate limiting
//         actions:
//         - type: rate-limit
//           config:
//             name: Only allow 30 requests per minute
//             algorithm: sliding_window
//             capacity: 3
//             rate: 60s
//             bucket_key:
//             - req.Headers['\''x-api-key'\'']`

const policies = fetch('./policies.json')
.then((response) => response.json())
.then((json) => console.log(json));

(async function () {
 const listener = await ngrok.forward({
   domain: "example.ngrok.dev",
   addr: 8080,
   authtoken_from_env: true,
   oauth_provider: "google",
   //policy: fs.readFileSync("policies.json", "utf8"), 
   policy: policies
 });
 
 console.log(`Ingress established at: ${listener.url()}`);
})();

process.stdin.resume();


