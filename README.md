<div align="center">
  <img height="24" src="./public/images/logo.png" />
  <h1>GenieV1</h1>
    <a href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Ftwitter.com%2FSquaredLabs_"><img alt="Twitter" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fmarginfi"/></a>
</div>

### The demo is deployed at [Genie](https://dev.d1h9zm8svtg3nj.amplifyapp.com/).

## Introduction

Genie is SquaredLabs' decentralized exchange (DEX) designed to facilitate the trading of power pools from Potentia without the risk of liquidation.

Potentia is our novel approach to trade power perpetuals i.e assets with positive powers of $`i`$ where $`i>0`$. Currently Genie supports taking long/short positions on 3 pools 
- $`WETH^2`$
- $`WBTC^3`$
- $`USDC^2`$

Potentia introduces *long/short* positions as fungible assets that can be traded and swapped. Apart from making this a robust system, fungible assets allow the development of other applications to be built on top of Potentia.

To provide an intuitive user experience, we have integrated `Coinbase's Smart Wallet` that uses account-abstraction.

## How to setup a development environment?
1. Clone the repo:
```bash
git clone https://github.com/SquaredLab-io/GenieV1
```

2. Install the dependencies:
```bash
cd GenieV1
```

3. Create a `.npmrc` file and add the following
```
@squaredlab-io:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<YOUR PERSONAL ACCESS TOKEN>
```

4. Run the development server:
```bash
yarn
yarn dev
```



## How to get in touch?
SquaredLabs' team is active and open to questions on our [Telegram group](https://t.me/squaredlabs).
