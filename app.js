// Answer 1:


class PersonAccount {
    constructor(firstname, lastname, newInc, incomeDescription) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = []
    this.expense = []
    this.accountInfo(firstname, lastname)
    this.accountBalance()
    this.totalIncome()
    this.totalExpense()
    this.addIncome(newInc, incomeDescription)
    this.addExpense(newExp, expenseDescription)
    }  
    accountInfo(firstname, lastname) {
      return `${firstname} ${lastname}`;
    }
  
    accountBalance() {
      let accountBalance = totalIncome().totalIncome - totalExpense().totalExpense;
      return {accountBalance: accountBalance, description: 'Account balance'};
    }
  
   totalIncome() {
      var incomeSum = 0;
      incomes.forEach(el => incomeSum += el.income);
      return {totalIncome: incomeSum, description: 'Total income'};
    }
  
   totalExpense() {
      var expenceSum = 0;
      expenses.forEach(el => expenceSum += el.expense);
      return {totalExpense: expenceSum, description: 'Total expence'};
    }
  
    addIncome(newInc, incomeDescription) {
      incomes.push({income: newInc, description: incomeDescription});
      return incomes[incomes.length - 1];
    }
  
    addExpense(newExp, expenseDescription) {
      expenses.push({expense: newExp, description: expenseDescription});
      return expenses[expenses.length - 1];
    }
}

const account1 = new PersonAccount("abc", "def")





// Answer No. 2


class Automobile {
    constructor(name, model, color, type) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.type = type;
        this.openDoor();
        this.closeDoor();
        this.start()
    }
    openDoor() {
        return "Doors are opened."
    }
    closeDoor() {
        return "Doors are closed."
    }
    start() {
        return "Car is ready to start."
    }
}
const vehicle = new Automobile("Cultus", 2022, "Red", "Automatic")
console.log(vehicle)

class Car extends Automobile {
    constructor(name, model, color, type, usage) {
        super(name, model, color, type);
        this.usage = usage
    }
}

const car1 = new Car("Mehran", 2021, "White", "Automatic", "For Careem")
console.log(car1)

class Bus extends Automobile {
    constructor(name, model, color, type, route) {
        super(name, model, color, type);
        this.route = route
    }
}
const bus1 = new Bus("Big Bus", 2022, "Multi-Color", "Automatic", "Saddar to Gulshan and viceversa")
console.log(bus1)

class Truk extends Automobile {
    constructor(name, model, color, type, city) {
        super(name, model, color, type);
        this.city = city;
    }
}
const truk1 = new Truk("Shzore", 2022, "Red and Black", "Automatic", "Karachi")
console.log(truk1)




class PersonAccount {
    constructor(firstname, lastname, newInc, incomeDescription) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = []
    this.expense = []
    this.accountInfo(firstname, lastname)
    this.accountBalance()
    this.totalIncome()
    this.totalExpense()
    this.addIncome(newInc, incomeDescription)
    this.addExpense(newExp, expenseDescription)
    }  
    accountInfo(firstname, lastname) {
      return `${firstname} ${lastname}`;
    }
  
    accountBalance() {
      let accountBalance = totalIncome().totalIncome - totalExpense().totalExpense;
      return {accountBalance: accountBalance, description: 'Account balance'};
    }
  
   totalIncome() {
      var incomeSum = 0;
      incomes.forEach(el => incomeSum += el.income);
      return {totalIncome: incomeSum, description: 'Total income'};
    }
  
   totalExpense() {
      var expenceSum = 0;
      expenses.forEach(el => expenceSum += el.expense);
      return {totalExpense: expenceSum, description: 'Total expence'};
    }
  
    addIncome(newInc, incomeDescription) {
      incomes.push({income: newInc, description: incomeDescription});
      return incomes[incomes.length - 1];
    }
  
    addExpense(newExp, expenseDescription) {
      expenses.push({expense: newExp, description: expenseDescription});
      return expenses[expenses.length - 1];
    }
}

const newAccount = new PersonAccount("abc", "def")
