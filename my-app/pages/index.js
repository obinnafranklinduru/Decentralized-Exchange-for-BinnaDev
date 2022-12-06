import React, { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { BigNumber, providers, utils } from "ethers";
import { addLiquidity, calculateCD } from "../utils/addLiquidity";
import { swapTokens, getAmountOfTokensReceivedFromSwap } from "../utils/swap";
import {
  getTokensAfterRemove,
  removeLiquidity,
} from "../utils/removeLiquidity";
import {
  getCDTokensBalance,
  getEtherBalance,
  getLPTokensBalance,
  getReserveOfCDTokens,
} from "../utils/getAmounts";

import Meta from '../components/Meta'
import Main from '../components/Main'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Meta />
      <Main />
      <Footer />
    </>
  )
}
