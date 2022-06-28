# MedKept

Ever wondered why should we need to submit our medical report to the receptionist and how they managed to loose it? Well, we have a solution for you!  Our product Medkept is a medical report management system that allows you to keep track of your medical reports and using blockchain technology, and also allows the report to be visible to only the doctor who needs it and the patient  whom it concerns.

<img src='https://user-images.githubusercontent.com/69100224/160093509-bdd806a0-cb29-4776-a97c-c4cda6347475.jpg' width="150" height="110"></img> 


## How to start the project in local environment?

 - Clone the repo
```bash
git clone https://github.com/aztecs-team/MedKept.git
```

 - The Start the react app
```bash
cd medkept-react
npm i
npm start
```

 - Start The Backend Server (Need to edit .env.example to .env and provide required data)
```bash
cd medkept-api
npm i
npm start
```

- Deploy The Contract (Need to edit .env.example to .env and provide required data)
```bash
cd medkept-contract
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network rinkeby
```
