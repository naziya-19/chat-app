import { ethers } from "ethers";
import Web3Modal from "web3modal";

import { ChatAppAddress, ChatAppABI } from "../Context/constants";

export const ChechIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install MateMask");

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

export const connectWallet = async () => {
  try {
    // if (!window.ethereum) return console.log("Install MateMask");

    // const accounts = await window.ethereum.request({
    //   method: "eth_requestAccounts",
    // });

    if (!window.ethereum) return console.log("Install MetaMask");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(ChatAppAddress, ChatAppABI, signerOrProvider);

export const connectingWithContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();

    // if (!connection) {
    //   // User might not have connected or an error occurred
    //   console.log("No Web3 provider connected");
    //   return null;
    // }

    // const provider = new ethers.providers.Web3Provider(connection);
    // const signer = provider.getSigner();
    

    const provider = new ethers.BrowserProvider(window.ethereum);
    // It will prompt user for account connections if it isnt connected
    const signer = await provider.getSigner();
    console.log("Account:", await signer.getAddress());

    const contract = fetchContract(signer);

    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const converTime = (time) => {
  try{
  const newTime = new Date(Number(time)*1000);

  const hours = newTime.getHours();
  const minutes = newTime.getMinutes();
  const seconds = newTime.getSeconds();
  const date = newTime.getDate();
  const month = newTime.getMonth() + 1; // Months are zero-indexed
  const year = newTime.getFullYear();

  const realTime =
    `${hours < 10 ? '0' + hours : hours}` +
    ":" +
    `${minutes < 10 ? '0' + minutes : minutes}` +
    ":" +
    `${seconds < 10 ? '0' + seconds : seconds}` +
    "  Date:" +
    `${date < 10 ? '0' + date : date}` +
    "/" +
    `${month < 10 ? '0' + month : month}` +
    "/" +
    year;

  return realTime;
} catch (error) {
  console.log(error);
  return null;
}

  // const realTime =
  //   newTime.getHours() +
  //   "/" +
  //   newTime.getMinutes() +
  //   "/" +
  //   newTime.getSeconds() +
  //   "  Date:" +
  //   newTime.getDate() +
  //   "/" +
  //   (newTime.getMonth() + 1) +
  //   "/" +
  //   newTime.getFullYear();

  // return realTime;
};
