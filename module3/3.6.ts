{
    // access modifiers
    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, _balance: number) {
         this.id = id;
         this.name = name;
         this._balance = _balance;   
        };

        set deposit(amount: number){
            this._balance = this._balance + amount;
        }


    //   public addDeposit(amount : number ){
    //         this._balance = this._balance + amount
    // }

    // getter
    get Balance() {
        return this._balance;
    }

    // public getBalance() {
    //         return this._balance;
    //     }

       
    };
    


  const goribsAccount = new BankAccount(111, "sathi", 50);
    goribsAccount.deposit = 50;
//   goribsAccount.addDeposit(30); 
//   const myBalance = goribsAccount.getBalance();
 
    const myBalance = goribsAccount.Balance;
    console.log(myBalance); 

    // 
}