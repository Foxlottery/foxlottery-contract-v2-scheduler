export default {
  Lottery: {
    mainnet: "0xfc496878227C1246492773853d4132578957d276",
    testnet: "0x415a5BA5EDAE22Bddb653Fb4F5bd828EF39EcC2F",
    mumbai: "0xfc496878227C1246492773853d4132578957d276"
  },
  Chainlink: {
    Oracle: {
      // Documentation: https://docs.chain.link/docs/binance-smart-chain-addresses/
      mainnet: "0x51597f405303c4377e36123cbc172b13269ea163",
      testnet: "0x81faeDDfeBc2F8Ac524327d70Cf913001732224C",
      mumbai: "0x4746DeC9e833A82EC7C2C1356372CcF2cfcD2F3D"
    },
    VRF: {
      // Documentation: https://docs.chain.link/docs/vrf-contracts/
      KeyHash: {
        mainnet: "0xc251acd21ec4fb7f31bb8868288bfdbaeb4fbfec2df3735ddbd4f7dc8d60103c",
        testnet: "0xcaf3c3727e033261d383b315559476f48034c13b18f8cafed4d871abe5049186",
        mumbai: "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4",
      },
    },
  },
  Ticket: {
    Price: {
      mainnet: 5,
      testnet: 1,
      mumbai: 5,
    },
    Precision: {
      mainnet: 2,
      testnet: 2,
      mumbai: 2,
    },
  },
  Discount: {
    mainnet: 2000,
    testnet: 2000,
    mumbai: 2000,
  },
  Rewards: {
    mainnet: [250, 375, 625, 1250, 2500, 5000],
    testnet: [250, 375, 625, 1250, 2500, 5000],
    mumbai: [250, 375, 625, 1250, 2500, 5000],
  },
  Treasury: {
    mainnet: 2000,
    testnet: 2000,
    mumbai: 2000,
  },
};
