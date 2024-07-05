
// part 1

class BankAccount {

    #balance = 0; // Move balance initialization to the constructor


    deposit(amount) { // Corrected method name
        this.balance += amount;
        console.log(`Deposited ${amount}, new balance is ${this.balance}`); // Corrected message
    }

    withdraw(amount) { // Corrected method name
        if (amount > this.balance) {
            console.log("Insufficient funds"); // Corrected spelling
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}, new balance is ${this.balance}`); // Corrected message
        }
    }


}

const account = new BankAccount();
account.deposit(100); // Corrected method call // Deposited 100, new balance is 100
account.deposit(100); // Deposited 100, new balance is 200
account.deposit(10000); // Deposited 10000, new balance is 10200
account.withdraw(200); // Withdrew 200, new balance is 10000
console.log(account.balance);

// part 2

class BankAccount1 {

    #balance = 20; // Move balance initialization to the constructor


    deposit(amount) { // Corrected method name
        this.balance += amount;
        console.log(`Deposited ${amount}, new balance is ${this.balance}`); // Corrected message
    }

    withdraw(amount) { // Corrected method name
        if (amount > this.balance) {
            console.log("Insufficient funds"); // Corrected spelling
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}, new balance is ${this.balance}`); // Corrected message
        }
    }

    fun() {
        console.log(this.#balance);
    }
}

const account1 = new BankAccount1();
account.deposit(100); // Corrected method call // Deposited 100, new balance is 100
account.deposit(100); // Deposited 100, new balance is 200
account.deposit(10000); // Deposited 10000, new balance is 10200
account.withdraw(200); // Withdrew 200, new balance is 10000
console.log(account1.fun());

// part 3

class BankAccount2 {

    #balance = 20; // Move balance initialization to the constructor


    deposit(amount) { // Corrected method name
        this.#balance += amount;
        console.log(`Deposited ${amount}, new balance is ${this.#balance}`); // Corrected message
    }

    withdraw(amount) { // Corrected method name
        if (amount > this.#balance) {
            console.log("Insufficient funds"); // Corrected spelling
        } else {
            this.#balance -= amount;
            console.log(`Withdrew ${amount}, new balance is ${this.#balance}`); // Corrected message
        }
    }
    balance() {
        console.log(this.#balance);
    }
}

const account2 = new BankAccount2();
account2.deposit(100); // Corrected method call // Deposited 100, new balance is 100
account2.deposit(100); // Deposited 100, new balance is 200
account2.deposit(10000); // Deposited 10000, new balance is 10200
account2.withdraw(200); // Withdrew 200, new balance is 10000
console.log(account2.balance); // [Function: balance]
account2.balance(); // 10020