---
title: "Web3 Development - BlockChange"
date: "May 26, 2023"
excerpt: "Building and deploying my first full-stack web3 application to the Sepolia testnet (Ethereum). Blockchange is a distributed crowdfunding platform for humanitarian causes."
cover_image: "/images/projects/blockchange-img.png"
---

It's been a crazy term for the first half of 2023. My course hasn't given me much time to work on my own projects, but I did get to dive into an interesting group project where we design, build, and deploy our very own decentralised app (dApp)! We were put into teams of 4 and given roughly 6 weeks for development in which we also had to write a report documenting our process and give a presentation to our lecturers. The whole process really simulated what it would feel like to create a start-up and some of the design choices and trade-offs we would have to make.

# BlockChange

My team were inspired by Ukraine's use of cryptocurrency wallets on the Ethereum and Bitcoin blockchain when their traditional banking system went down. This allowed them to continue receiving donations and fund aspects of the war effort without relying on the fiat banking system. We decided to make a platform to facilitate this process and help to reduce intermediaries between donors and recipients, increase transparency of donations, and speed up the process of recieving aid.

<br/>

## Tech Stack

We decided to use React + Next.js for the front-end, Solidity for the back-end since the application would be deployed to Ethereum, and ethers.js to connect the two together. We also used Ganache as a local blockchain for testing and Metamask to interact with the blockchain. This stack allowed us to quickly develop the application and deploy it to the Sepolia testnet, however, in hindsight we should have used a more develop testing framework such as Truffle or Hardhat which provides pre-built functionality for testing smart contracts.

<br/>

## DevOps

We used Github for version control and kept the main branch only for production code. The Scrum methodology was used for project management as well as Jira for task tracking. The Jira board was the most effective tool that we implemented allowing us to stay on track and meet our deadline with ease. This was my first time working in a team on an agile project and I found it to be a very effective way of working.