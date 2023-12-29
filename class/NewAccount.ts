import { DioAccount } from './DioAccount'

export class NewAccount extends DioAccount {
  depositPlus10 = (amount: number): void => {
    console.log(`    Intenção de deposito: ${amount}`)
    this.deposit(amount + 10)
  }
}
