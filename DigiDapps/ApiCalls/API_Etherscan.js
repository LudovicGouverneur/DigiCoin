
// Refactor for node js to work on server 
  // require/module exports
// Refactor for it work in a browser with a bundler 



var API_Etherscan = {
  transaction : function (User_Address){
    // Building the request text
      textURL = build_api_call(User_Address)
    // Building the request object 
      var request = new XMLHttpRequest();
      request.open('GET', textURL , true);
      
      request.onload = function () {
    // PARSING JSON FILE
        var data = JSON.parse(this.response);
      }
      request.send()
      return data
}

 module.export = "API_Etherscan"

function build_api_call(User_Address) {
  var textURL = model.Eth_Network + 
    'module='+ model.module + 
    '&action=' + model.action + 
    '&contractaddress=' + model.Token_contract + 
    '&address=' + User_Address +
    // '&tag=latest' +
    '&page=1&offset=100&sort=asc' +
    '&apikey=+ ' + model.Api_Key;
  return textURL
}
