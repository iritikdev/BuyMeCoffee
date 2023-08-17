import { useEffect, useState } from "react";
import { BrowserProvider, Contract } from "ethers";

import abi from "./contract/Coffee.json";
import BuyCoffee from "./components/BuyCoffee";
import Memos from "./components/Memos";

function App() {
  const [state, setState] = useState({
    privider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectToMetamask = async () => {
      // getting addr from deployed to Sepolia Test Network
      const contractAddress = "0x730553064a46bf8217b72532f8ea1125c2980014";
      const contractABI = abi.abi;
    
      try {
        // ethereum object inject while installing Metamask wallet
        const { ethereum } = window;
    
        if (ethereum) {
          
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
    
          const provider = new BrowserProvider(ethereum)

        
          const signer = await provider.getSigner();

          const contract = new Contract(
            contractAddress,
            contractABI,
            signer
          );
          setState({ provider, signer, contract });
        } else {
          console.log("Metamask not detected.");
        }
      } catch (err) {
        console.log(err);
      }
    };
    

    connectToMetamask();
  }, []);


  return (
    <>
      <Memos state={state} />
    </>
  );
}

export default App;
