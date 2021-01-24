// https://mailchimp.com/developer/marketing/guides/quick-start/
const mailchimp = require('@mailchimp/mailchimp_marketing');
const keys = require('./config/key.js');

/*
// FOR USING MODULE SYNTEX IN NODE PROJECT WE NEED TO SET TYPE MODULE IN PACKAGE.JSON FOLDER
// import mailchimp from "@mailchimp/mailchimp_marketing";
// package.json
{
  "type": "module"
}
*/



const express = require('express');
const app = express();





mailchimp.setConfig({
  apiKey: keys.API_KEY,
  server: keys.SERVER_PREFIX,
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



// https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/
const saveMamber = async () => {
  const response = await mailchimp.lists.addListMember("905728b852", {
    email_address: "Zane.Buckridge75@yahoo.com",
    status: "subscribed",
  });
  console.log(response);
};





// saveMamber();



// GET AUDIANCE AND MEMBERS INFORMATIONS
// run();
app.get('/audiance', (req, res, next)=>{
  const response = await mailchimp.lists.getListMembersInfo("905728b852");
  res.status(200).json(response);
});











app.listen(5000, ()=> console.log("server is eunning on port: 5000"));
