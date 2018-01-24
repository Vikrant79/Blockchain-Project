const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

//beforeEach(() => {
  // Get a list of all accounts
//  web3.eth.getAccounts().then(fetchedAccounts => {
  //  console.log(fetchedAccounts);
  //});
let accounts;
let inbox;
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  //Use one og the accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode, arguments: ['Hi there!']})
  .send({from: account[0], gas:'1000000'});

});
describe('Inbox', () => {
  it('deploy a contract', () => {
  console.log(inbox);
});
});
/*class Car {
  park(){
    return 'stopped';
  }
    drive(){
      return 'vroom';
  }
}

let car;
beforeEach(() =>{
  car = new Car();
});
describe('Car',() =>{
  it('can park',() =>{
  const car  = new Car();
  assert.equal(car.park(),'stopped');
  });
  it('can drive',() =>{
    const car = new Car();
    assert.equal(car.drive(),'vroom');
  });
});*/
