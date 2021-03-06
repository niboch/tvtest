var smartcast = require('vizio-smart-cast');
var what = require('http');
let readline = require('readline');
// smartcast.discover((device) =>{
// console.log(device);
// }, (err)=>{
//     console.log(`err:${err}`);
// }, 10000);
var tv = new smartcast('192.168.0.103');

// configure cmd line input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initiate a pairing request with a smartcast device
tv.pairing.initiate().then((response) => {

    // prompt the user for the pin that is displayed on the smartcast device
    rl.question('Enter PIN:', (answer) => {

        // send the pin to the smartcast device to complete the pairing process
        tv.pairing.pair(answer).then((response) => {

            // log the token to be used for future, authenticated requests
            console.log(response.ITEM.AUTH_TOKEN);
        });

        rl.close();
    });
});