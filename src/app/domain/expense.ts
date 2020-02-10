import {ExpenseType} from './expense-type';

export class Expense {
  id: number;
  expenseType: ExpenseType;
  value: number;
  paymentDate: string;
  description: string;
}

