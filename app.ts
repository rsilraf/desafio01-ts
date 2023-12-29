import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/NewAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(`${peopleAccount.getName()} account`)
console.log(peopleAccount)
peopleAccount.deposit(100)
peopleAccount.withdraw(60)
console.log(
  `${peopleAccount.getName()} account balance: ${peopleAccount.getBalance()}\n`
)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 200)
console.log(`${companyAccount.getName()} account`)
companyAccount.deposit(150)
companyAccount.withdraw(10)
companyAccount.getLoan(300)
console.log(
  `${companyAccount.getName()} account balance: ${companyAccount.getBalance()}\n`
)

const newAccount: NewAccount = new NewAccount('New', 1000)
console.log(`${newAccount.getName()} account`)
newAccount.depositPlus10(1000)
newAccount.withdraw(500)
console.log(
  `${newAccount.getName()} account balance: ${newAccount.getBalance()}\n`
)
