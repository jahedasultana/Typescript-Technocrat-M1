{
    //  Encapsulation in OOP
    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, _balance: number) {
         this.id = id;
         this.name = name;
         this._balance = _balance;   
        };
        addDeposit(amount : number ){
            this._balance = this._balance + amount
        }

       private getBalance() {
            return this._balance;
        }

        getHiddenMethod(){
            return this.getBalance();
        }

       
    };
    class StudentAccount extends BankAccount{
        test(){
            this.
        }    
    }


  const goribsAccount = new BankAccount(111, "sathi", 20);
  goribsAccount.addDeposit(30); 
  const myBalance = goribsAccount.getBalance();
  console.log(myBalance); 
    // 
}