let myAccount = {
    name : "Rasyid",
    expenses : 0,
    income : 0
}

// let otherAccount = myAccount
// otherAccount.income = 1000

let addExpense = function(account, amount){
    return account.expenses = account.expenses + amount
}

//Challenge Area(this connect with above)

//addIncome
let addIncome = function(account, amount){
    return account.income = account.income + amount
}

//resetAccount
let resetAccount = function(account){
    account.expenses = 0
    account.income = 0
    return
}

//getAccountSummary
//Account for Andrew has $900. $1000 in income. $100 in expenses.
let getAccountSummary = function(account){
    let balance = account.income - account.expenses
    console.log(`Account for ${account.name} has ${balance}. ${account.income} in income. ${account.expenses} in expenses`);
    return balance;
}

//addIncome
addIncome(myAccount, 1000)

//addExpense
addExpense(myAccount, 100)

//addExpenses
addExpense(myAccount, 200)

//getAccountSummary
getAccountSummary(myAccount)

//resetAccount
resetAccount(myAccount)

//getAccountSummary
getAccountSummary(myAccount)

