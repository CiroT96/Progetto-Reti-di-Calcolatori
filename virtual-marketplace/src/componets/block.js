import { ethers } from "ethers";
var web3js;
var addressContract1="0xE5B1BDE42412d28520F6372f394098d01Ce21e67";
var addressContract2="0xE643C3d03fBe36DBa920660f61673FcDD3177357";

async function ConnectToMetamask(){
    await window.web3.currentProvider.enable();
    web3js=new Web3(window.web3.currentProvider);
    console.log("connesso");
}
if(typeof web3 !== 'undefined'){
    web3js=new Web3(window.web3.currentProvider);   
}
else{
    web3js = new Web3(new Web3.Provider.HttpProvider("HTTP://localhost:3001"));
}

var abi1=[
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "second",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "str",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "st",
				"type": "string"
			}
		],
		"name": "Credit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"name": "TransferTo_ContractTwo",
		"type": "event"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "calculateDiscountAndPay",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBalanceEth",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "secondContract",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address payable",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "discount",
				"type": "uint256"
			}
		],
		"name": "sendData",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	}
];
var abi2=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "str",
				"type": "string"
			}
		],
		"name": "EtherReceived",
		"type": "event"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address payable",
				"name": "first_contract",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "PayingWithCredit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "UserDiscount",
		"outputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "discount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBalanceEth",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getUserDiscount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "setUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var contract1= new web3js.eth.Contract(abi1,addressContract1);
var contract2= new web3js.eth.Contract(abi2,addressContract2);



function Pay(){

	var inputvalInt = ethers.utils.parseEther((document.getElementById("amountNoCredit").value).toString());
	var inputvalETH = ((document.getElementById("amountNoCredit").value)*(10**18)).toString(16);

		const transactionParameters = {
			nonce: '0x00', // ignored by MetaMask
			to: addressContract1, // Required except during contract publications.
			from: ethereum.selectedAddress, // must match user's active address.
			value: inputvalETH, // Only required to send ether to the recipient from the initiating external account.
			data: contract1.methods.calculateDiscountAndPay(inputvalInt).encodeABI(), //Call method of First Smart Contract.
		  };
		
		  const txHash = ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
		  });

}

function PayCredit(){

	var inputval = (document.getElementById("amountWithCredit").value)*(10**18);
	var inputvalwithCredit;
	contract2.methods.getUserDiscount().call()
	.then(function (userCredit){
		inputvalwithCredit = inputval - userCredit;
		const transactionParameters = {
			nonce: '0x00', // ignored by MetaMask
			to: addressContract1, // Required except during contract publications.
			from: ethereum.selectedAddress, // must match user's active address.
			value: inputvalwithCredit.toString(16), // Only required to send ether to the recipient from the initiating external account.
			data: contract2.methods.PayingWithCredit(addressContract1,ethers.utils.parseEther(inputval.toString())).encodeABI()
		  };
	
		  const txHash = ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
		  });

	});
	
}
export {ConnectToMetamask,Pay,PayCredit};