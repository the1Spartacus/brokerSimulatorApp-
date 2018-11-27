import { BrokerAccount, BrokerHoldings } from '../model/BrokerAccount';

export let brokerHoldings: BrokerHoldings[] = [{
  ISINCode: 'b1',
  NumberOfShares: 300,
  StockCode: 'aaa',
  StockName: 'MTN'
},
{
  ISINCode: 'b2',
  NumberOfShares: 200,
  StockCode: 'bbb',
  StockName: 'BMW'
},
{
  ISINCode: 'b3',
  NumberOfShares: 100,
  StockCode: 'ccc',
  StockName: 'TOYOTA'
}];

export let brokerAccount: BrokerAccount = {
AccountBalance: 5245,
AccountNumber: '1234567890',
BrokerName: 'ShareNet',
CellPhoneNumber: '0723919751',
DateOfBirth: '1992-05-01',
Email: 'thulani@investsuretech.co.za',
FirstName: 'Thulani',
Gender: 'Male',
IDNumber: '9205011234098',
LastName: 'Spartacus',
RequestId: '',
RequestToken: '',
StockExchange: 'JSE',
Title: 'Mr',
brokerHoldings: brokerHoldings
};
