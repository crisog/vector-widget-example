import React from "react";
import ReactDOM from "react-dom";
import { ConnextModal } from "@connext/vector-modal";

function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Show Widget</button>
      <ConnextModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onReady={(params) => console.log("MODAL IS READY =======>", params)}
        withdrawalAddress={"0x70C58b28F5E39da89bEe0e6E8623e3faF51f0Ed1"}
        routerPublicIdentifier="vector8AXWmo3dFpK1drnjeWPyi9KTy9Fy3SkCydWx8waQrxhnW4KPmR"
        depositAssetId={"0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9"}
        depositChainId={100}
        depositChainProvider="https://rpc.xdaichain.com/​"
        withdrawAssetId={"0xb371248Dd0f9E4061ccf8850E9223Ca48Aa7CA4b"}
        withdrawChainId={137}
        withdrawChainProvider="https://rpc-mainnet.maticvigil.com/"
      />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
