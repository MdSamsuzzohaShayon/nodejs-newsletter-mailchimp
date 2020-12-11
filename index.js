const request = require('request');
const options = {
    'method': 'GET',
    'url': 'https://us20.api.mailchimp.com/3.0/reports/98227cb61b/click-details',
    'headers': {
        'Authorization': 'Basic YW55c3RyaW5nOjEwMDQxODUwODRjYTNiYThiMmMyYWQzMTMzZjYwYTZjLXVzMjA=',
        'Cookie': 'ak_bmsc=2A744370D5DC97CB3F2B1CF685DA9D4E17372E160831000063DFD25F450C9F76~plzkcNJiPwPP+YvFw6eL9UcLi1xvjq3MqYgYW5iMSylMib8aIVLEPP+5CrmaRO/AUmLA3MSgVbYC4acJrAi3iQHVVGJ58Ja+4ot0BcRfHu/HNH6tP+3ilaouyugrtOpRJElJoB6rsjQYX5KZUFsw07dvTBD1YFEW/yjbuNpBRIiVd8Ax5yP5nk/hw55HIV2Yt823iY4CFHzbrhV0s0pziDltfSsskKAfUc1Xor3EFikEc=; bm_sv=67DA3F48EA122E6A80475348C372751E~n6LPQa4svftrXzim5wLBbj8AUnnbbOj1ExqyPjMrVvOW8wX7vt2L5F1a0m5iavWKswo41KFmvKJsklJ7mFtJ82EMXaNbPxg6sbZoeeJf99d04p+vHMA3L/F5G8V2HTEesRk/1c+G5AXHuc99t3kMTTPCb7ONX2P+OHyxrrS6cQA='
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    // console.log(response.body);
    let jsObject = JSON.parse(response.body);
    jsObject.urls_clicked.forEach(uc=>{
        console.log(uc.id);
    });
});
