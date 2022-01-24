export type Transaction = {
  id: string;
  from: string;
  to: string;
  amount: string;
  token: string;
  tokenName: string;
};

export type DeletedTransaction = {
  id: string;
  deleted: boolean;
};

export type Task = {
  description: string;
  done: boolean;
};

export type UserObj = {
  email: string;
  password: string;
};

export type State = {
  transactions: Transaction[];
  tasks: Task[];
  userobjs: UserObj[];
  deletedtransaction: DeletedTransaction;
};
