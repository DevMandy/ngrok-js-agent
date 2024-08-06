const ngrok = require("@ngrok/ngrok");
const fs = require("fs");

(async function () {
 const listener = await ngrok.forward({
   domain: "docs.mandyhubbard.com",
   addr: 8001,
   authtoken_from_env: true,
//   oauth_provider: "google",
   traffic_policy: fs.readFileSync("/Users/mandyhubbard/Documents/ngrok-js-agent/src/policies2.json", "utf8"),
//   traffic_policy: `
//    ---
//    actions:
//      - type: "rate-limit"
//        config:
//          name: "Only allow 30 requests per minute"
//          algorithm: "sliding_window"
//          capacity: 3
//          rate: "60s"
//          bucket_key:
//            - "req.Headers['x-api-key']"
//    `
 });

 console.log(`Ingress established at: ${listener.url()}`);
})();

process.stdin.resume();

