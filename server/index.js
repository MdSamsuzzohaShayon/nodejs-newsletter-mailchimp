// https://mailchimp.com/developer/marketing/guides/quick-start/
import mailchimp from "@mailchimp/mailchimp_marketing";
// package.json
// {
//   "type": "module"
// }

mailchimp.setConfig({
  apiKey: "1004185084ca3ba8b2c2ad3133f60a6c-us20",
  server: "us20",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();
