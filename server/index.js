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
  /*
  // FIRST API CALL
  // https://mailchimp.com/developer/marketing/guides/quick-start/
  const response = await mailchimp.ping.get();
  console.log(response);
  */



/*
  // GET LISTS/AUDIANCE INFORMATIONS
  // https://mailchimp.com/developer/marketing/api/lists/get-lists-info/
  const response = await mailchimp.lists.getAllLists();
  console.log(response.lists);
  */



  // GET ALL MEMEBRS OF THE LISTS
    // https://mailchimp.com/developer/marketing/api/list-members/list-members-info/
  const response = await mailchimp.lists.getListMembersInfo("905728b852");
  console.log(response);



}

run();
