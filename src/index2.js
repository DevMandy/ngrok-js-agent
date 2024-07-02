// Require ngrok javascript sdk
const ngrok = require("@ngrok/ngrok");
// import ngrok from '@ngrok/ngrok' // if inside a module

(async function() {
  // Establish connectivity
  const listener = await ngrok.forward({ addr: 8080, authtoken_from_env: true });

  // Output ngrok url to console
  console.log(`Ingress established at: ${listener.url()}`);
})();

process.stdin.resume();