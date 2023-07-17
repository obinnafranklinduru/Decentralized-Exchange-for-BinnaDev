# BinnaDevs Exchange Decentralised Application

The BinnaDevs Exchange project consists of a smart contract written in Solidity and a frontend application. The smart contract implements a decentralized exchange for trading BinnaDev tokens (BDT) and Ether (ETH). The frontend provides a user interface for interacting with the exchange contract.

## Smart Contract - Exchange

The Exchange smart contract is an ERC20 token contract that allows users to add liquidity, remove liquidity, and perform token swaps between BDT and ETH. The contract includes functions for adding liquidity, removing liquidity, getting the current reserves, and swapping tokens. The contract is inherited from ERC20 and uses the ERC20 token for balance and transfer operations.

## Frontend - User Interface

The frontend application provides a user interface for interacting with the BinnaDevs Exchange. It allows users to connect their web3-enabled wallets (e.g., MetaMask) and perform the following actions:

- Add liquidity by providing BDT and ETH tokens.
- Remove liquidity and receive BDT and ETH tokens in return.
- Swap ETH for BDT tokens.
- Swap BDT tokens for ETH.

## Technologies Used

The BinnaDevs Exchange project utilizes the following technologies:

- Solidity: The programming language used for writing the smart contract.
- ERC20: The standard interface for implementing token contracts.
- Ether.js: A JavaScript library for interacting with Ethereum and smart contracts.
- MetaMask: A browser extension for managing Ethereum accounts and interacting with Ethereum applications.
- Next.js: A React framework for server-side rendering and building web applications.

## How to Use

1. Deploy the Exchange smart contract and provide the necessary configuration parameters (e.g., BinnaDev token address).
2. Build and run the frontend application locally or deploy it to a web server.
3. Connect a compatible web3-enabled wallet (e.g., MetaMask) to the frontend application.
4. Use the user interface to interact with the Exchange smart contract, including adding liquidity, removing liquidity, and performing token swaps.
5. Follow the instructions provided by the frontend application for each action.

## Contributions

Contributions to this project are welcome! If you find any issues or have suggestions for improvement, please feel free to create a pull request or submit an issue on the project's repository.

## License

The code in this repository is licensed under the MIT License.
