const account ={
  name: "Rasyid Nur Annas",
  income: [],
  addIncome: function(description, amount){
    this.income.push({
      description: description,
      amount: amount
    })
  },
  expenses: [],
  addExpense: function(description, amount){
    this.expenses.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: function(){
    let totalExpenses = 0
    let totalIncome = 0
    let accountBalance = 0

    this.income.forEach(function(income){
      totalIncome = totalIncome + income.amount
    })

    this.expenses.forEach(function(expense){
      totalExpenses = totalExpenses + expense.amount
    })

    accountBalance = totalIncome - totalExpenses
    return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income.$${totalExpenses} in expenses.`
  }
}

account.addExpense("Rent", 950)
account.addExpense("Coffe", 2)
account.addIncome("Job", 1000)
console.log(account.getAccountSummary());

//add income array to account
//addIncome method -> description, amount
//Tweak getAccountSummary
