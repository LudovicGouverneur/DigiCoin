// // the goal of this exercice is to fetch data from Etherscan API for our smart contract


var model = {
    Token_contract : "0xc2cf772a5fa04a47a28fa4e903aff42a128d60ad",
    Api_Key : "ZINR991FNJCMMYZKWHIRDR7G1Z9XGDXAC2",
    Eth_Network : "https://api-ropsten.etherscan.io/api?",  
    Address:'0xded89244232d979bf28bdbcd19327b5d165569bf',
}


// group all possible request by waht they return.
var textURL = model.Eth_Network + 'module=account&action=tokentx&contractaddress=' +
              model.Token_contract + '&address=' + 
              model.Address + '&page=1&offset=100&sort=asc&apikey= + ' + 
              model.Api_Key;

var request = new XMLHttpRequest();

request.open('GET', textURL , true);
request.onload = function () {

  // Begin accessing JSON data here

var data = JSON.parse(this.response);
var balance= [];
  if (request.status >= 200 && request.status < 400) {
    console.log(data);    
    data.result.forEach(azerty => {
      balance[azerty] = azerty.balance;
    });
    
    length = data.result.length;
    for (i=0;i<length;i++){
        balance[i] = data.result[i].balance;
        console.log("Block Number for this transaction is : " + balance[i])
    }
    console.log(balance)
  } else {
    console.log('error');
  }
}

request.send();
