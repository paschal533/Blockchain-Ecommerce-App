import { useState, useEffect } from "react";
import getBlockchain from "./ethereum";

function App() {
  const [paymentProcessor, setPaymentProcessor] = useState(undefined);
  const [dai, setDai] = useState(undefined);

  useEffect(() => {
     const init = async () => {
        const { paymentProcessor, dai } = await getBlockchain()
        setPaymentProcessor(paymentProcessor);
        setDai(dai);
     }

     init();
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
