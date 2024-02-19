import React, { useState } from "react";
import BlockDetails from "./BlockDetails";
import 'bootstrap/dist/css/bootstrap.min.css';

function Blocks() {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedBlock, setSelectedBlock] = useState(false);
  var [flag, setFlag] = useState(false);

  const ethereumBlocks = [
    {
      address: "0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e",
      balance: 542,
      gasUsed: 3051,
    },
    {
      address: "0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
      balance: 690,
      gasUsed: 4665,
    },
    {
      address: "0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba",
      balance: 654,
      gasUsed: 2232,
    },
  ];

  const ethereumAddresses = [
    "0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e",
    "0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
    "0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba",
  ];

  //   console.log(address[1]);

  const handleOnChange = (e) => {
    if (e.target.selectedIndex !== 0) {
      setSelectedAddress(e.target.value);
      setSelectedBlock(e.target.selectedIndex);
      setFlag(true);
      //   console.log("hand", setFlag);
    } else {
      setFlag(false);
    }
    // setSelectedBlock = e.target.selectedIndex;
    // console.log(selectedAddress);
    // console.log(selectedBlock, "-", selectedBlock);
  };
  //   console.log("-", selectedBlock);
  //   console.log(flag);
  //   const gasUsed = ethereumBlocks[selectedBlock].gasUsed;
  //   console.log(gasUsed);
  var block = ethereumBlocks.find((block) => block.address === selectedAddress);

  if (selectedBlock !== false) {
    console.log(block.balance);
  }

  return (
    <div>
      <h1 class="display-1">Blocks</h1>
      <div>
      <select onChange={handleOnChange} class="form-select form-select-lg mb-3" aria-label="Large select example">
        <option value="" required>
          Select an Address here
        </option>
        {ethereumAddresses.map((address, index) => (
          <option key={index} value={address}>
            {address}
          </option>
        ))}
      </select>
      {/* <h1>{selectedAddress}</h1> */}
      {/* {selectedAddress && (
        <BlockDetails
          address={selectedAddress}
          balance={block.balance}
          gasUsed={block.gasUsed}
        />
      )} */}
      {!flag ? (
        <h1 class="display-1">Select an Address</h1>
        // <h1>Select an Address</h1>
      ) : (
        <BlockDetails
          address={selectedAddress}
          balance={block.balance}
          gasUsed={block.gasUsed}
        />
      )}
      </div>
    </div>
  );
}

export default Blocks;
