import {ExpenseType} from './expense-type';

export interface Expense {
  id: number;
  expenseType: ExpenseType;
  value: number;
  paymentDate: string;
  description: string;
}

