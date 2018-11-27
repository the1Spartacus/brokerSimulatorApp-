
export interface BrokerAccount {
    AccountBalance: number;
    AccountNumber: string;
    BrokerName: string;
    CellPhoneNumber: string;
    DateOfBirth: string;
    Email: string;
    FirstName: string;
    Gender: string;
    IDNumber: string;
    LastName: string;
    RequestId: string;
    RequestToken: string;
    StockExchange: string;
    Title: string;
    brokerHoldings: BrokerHoldings [];
}

export interface BrokerHoldings {
    ISINCode: string;
    NumberOfShares: number;
    StockCode: string;
    StockName: string;
}
