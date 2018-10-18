// // the goal of this exercice is to fetch data from Etherscan API for our smart contract


// BUILDING THE HTTP REQUEST

// var API_Etherscan = require("./../ApiCalls/API_Etherscan.js");

var model = {
    Token_contract : "0xc2cf772a5fa04a47a28fa4e903aff42a128d60ad", // The Digicoin Smart Contract 
    Api_Key : "ZINR991FNJCMMYZKWHIRDR7G1Z9XGDXAC2",                // Personnal API Key
    Eth_Network : "https://api-ropsten.etherscan.io/api?",         // ! Choose your network (h)
    // UsersAddress : JSON.parse("./HardStore/users"),
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
    GraphData : [],//[[[], [], [], []]],
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
                               
        // EtherScan_transaction         
         logic.start(0);
         console.log(model.Database.transactionDB );
         setInterval(logic.appendArrays,15000)
    },
    appendArrays : function(){
        let length_trans;
        length = model.UsersAddress.length;
        for (i_user=0;i_user<length-1;i_user++){
                model.GraphData[i_user] = new Array();
                model.GraphData[i_user][0] = new Array();
                model.GraphData[i_user][1] = new Array();
                model.GraphData[i_user][2] = new Array();
                model.GraphData[i_user][3] = new Array();
                
                length_trans = model.Database.transactionDB[i_user].length;
                console.log("user targer :" + i_user + " length : " + length_trans)
            for (j_trans=0;j_trans<length_trans;j_trans++){
                // model.GraphData[i_user][j_trans] = new Array()
                model.GraphData[i_user][0][j_trans] = parseInt(model.Database.transactionDB[i_user][j_trans].value);
                model.GraphData[i_user][1][j_trans] = model.Database.transactionDB[i_user][j_trans].from;
                model.GraphData[i_user][2][j_trans] = model.Database.transactionDB[i_user][j_trans].to;
                model.GraphData[i_user][3][j_trans] = new Date(1000*parseInt(model.Database.transactionDB[i_user][j_trans].timeStamp)).toDateString();
                
                // console.log("Block Number for this transaction is : " + Transfers[i])
            }
        }
    },
    
       
         // Blockchain_transaction

    //  ! API call BC and EtherScan get have :
      // Total Supply, 
      // N° transfers, 
      // Volume,
 


    start : function(counter) {
        if(counter < model.UsersAddress.length){
          setTimeout(function(){
            
            model.Database.transactionDB[counter] = API_Etherscan.transaction(model.UsersAddress[counter],counter)
            counter++;
            logic.start(counter);
          }, 1000)
        console.log("user n°" + counter)          
        }
      }

}

console.log("start appending")
logic.appendDB()

setTimeout(function(){
  // for (i=0;i<model.UsersAddress.length;i++)
    a = model.GraphData[1][0];
    a.unshift("owner");
    b = model.GraphData[2][0]
    b.unshift("bar");
    c = model.GraphData[3][0]
    c.unshift("user1");
    d = model.GraphData[4][0]
    d.unshift("user2");
    e = model.GraphData[5][0]
    e.unshift("user3");
    f = model.GraphData[6][0]
    f.unshift("user3");
    g = model.GraphData[7][0]
    g.unshift("user4");
    h = model.GraphData[8][0]
    h.unshift("user4");
    // setTimeout(function(){
      chart = bb.generate({
        data: {
          columns: [
            a,b,c,d,e,f,g,h
        // ["data2", 130, 100, 140, 200, 150, 50]
          ],
          type: "bar"
        },
        bar: {
          width: {
            ratio: 0.5
          }
        },
        bindto: "#BarChart"
        });
  }, 16000)

// logic.appendArrays()
//////////////////////////////////////////////////////////////////////////////
