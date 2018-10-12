// // the goal of this exercice is to fetch data from Etherscan API for our smart contract


// BUILDING THE HTTP REQUEST

// var API_Etherscan = require("./../ApiCalls/API_Etherscan.js");

var model = {
    Token_contract : "0xc2cf772a5fa04a47a28fa4e903aff42a128d60ad", // The Digicoin Smart Contract 
    Api_Key : "ZINR991FNJCMMYZKWHIRDR7G1Z9XGDXAC2",                // Personnal API Key
    Eth_Network : "https://api-ropsten.etherscan.io/api?",         // ! Choose your network (h)
    UsersAddress:['0x7d473776bb4abf607e2d1b20674a395c2501988d',    // ! Target Users. Ask the blockchain directly
                  '0xded89244232d979bf28bdbcd19327b5d165569bf',
                  '0x7d473776bb4abf607e2d1b20674a395c2501988d',
                  '0xa643aa9936455ed3c0640a0c29eb0169ab37e1b1',
                  '0xdffa2e16bcd6a3cf301afa3f9820c53e55e12b4a',
                  '0x7b0aeeb6bdf48f35b96a1ee464f5ba15db6b66f6',
                  '0x2f617f480e584a3985f994c2c9bc2d6a2cddb027',
                  '0x257b84acb80cd230b2307c6bcb7d4e0fee0f01cf',
                  '0x97a29eef195a72c1684a03c3ed357f8055947cd9',	
                  '0x543a5c611b79efcd21b892675d2b143cdd01a3c9',	
                  '0xe4b28d18b91b60d4c2e2f35a624d6f468fd09e42'],
    module : "account",
    action : "tokentx", //"balance"
    
    Database : {
        transactionDB : [[], []]
    }
}


//////////////////////////////////////////////////////////////////////////////

var API_Etherscan = {
    transaction : function (User_Address,i){                      
            textURL = this.build_api_call(User_Address) // Building the request text
          // Building the request object 
            var request = new XMLHttpRequest();
            request.open('GET', textURL , true);
            request.onload = function () {                
                resp = JSON.parse(this.response); // PARSING JSON FILE
                model.Database.transactionDB[i] = resp.result
                }
            request.send()
        },
    build_api_call : function(User_Address) {
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
}

//////////////////////////////////////////////////////////////////////////////

var logic = {
    appendDB : function() {
    //  ! API call BC to have all users
        // model.UsersAddress = ?
    //  ! API call BC have all users balance
    //  ! API call BC and EtherScan get all users transactions

        // Loop through users
                //  function timeout() {
                //     setTimeout(function () {
                //         // Do Something Here
                //         // Then recall the parent function to
                //         // create a recursive loop.
                //         timeout();
                //     }, 6000);
                // }
        let length_users = model.UsersAddress.length;         
                
        // EtherScan_transaction
        console.log("appending") 
        for (let i=0;i<length_users-1;i++){
                // model.Database.transactionDB[i] = API_Etherscan.transaction(model.UsersAddress[i],i)    
                setTimeout(function(){
                    console.log('n° ' + i);
                    model.Database.transactionDB[i] = API_Etherscan.transaction(model.UsersAddress[i],i)
                }, 6000)
         }    
         console.log(model.Database.transactionDB)
                    
         // Blockchain_transaction

    //  ! API call BC and EtherScan get have :
      // Total Supply, 
      // N° transfers, 
      // Volume,
 

    }
}
console.log("start appending")
logic.appendDB()
//////////////////////////////////////////////////////////////////////////////

// var Transfers = [[], [], []];
//   if (request.status >= 200 && request.status < 400) {
//      console.log(data);    
    
//     length = data.result.length;
//     for (i=0;i<length;i++){
//         Transfers[0][i] = data.result[i].value;
//         Transfers[1][i] = data.result[i].from;
//         Transfers[2][i] = data.result[i].to;
//         // console.log("Block Number for this transaction is : " + Transfers[i])
//     }
//     console.log(Transfers)
//     createTable(Transfers)
//   } else {
//     console.log('error');
//   }

// logic.graph()
// setTimeout(console.log(API_Etherscan.dataset), 10000);
// setTimeout(logic.parse(), 60000);



