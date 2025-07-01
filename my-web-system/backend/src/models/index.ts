import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export interface IHouse extends Document {
  address: string;
  owner: IUser['_id'];
}

const houseSchema: Schema<IHouse> = new Schema({
  address: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const House: Model<IHouse> = mongoose.model<IHouse>('House', houseSchema);

export interface ICar extends Document {
  make: string;
  model: string;
  owner: IUser['_id'];
}

const carSchema: Schema<ICar> = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const Car: Model<ICar> = mongoose.model<ICar>('Car', carSchema);

export interface IWorksite extends Document {
  location: string;
  supervisor: IUser['_id'];
}

const worksiteSchema: Schema<IWorksite> = new Schema({
  location: { type: String, required: true },
  supervisor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const Worksite: Model<IWorksite> = mongoose.model<IWorksite>('Worksite', worksiteSchema);

export interface IWorkLog extends Document {
  worksite: IWorksite['_id'];
  hoursWorked: number;
  date: Date;
}

const workLogSchema: Schema<IWorkLog> = new Schema({
  worksite: { type: Schema.Types.ObjectId, ref: 'Worksite', required: true },
  hoursWorked: { type: Number, required: true },
  date: { type: Date, required: true },
});

export const WorkLog: Model<IWorkLog> = mongoose.model<IWorkLog>('WorkLog', workLogSchema);

export interface IExpenseRevenue extends Document {
  description: string;
  amount: number;
  date: Date;
}

const expenseRevenueSchema: Schema<IExpenseRevenue> = new Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

export const ExpenseRevenue: Model<IExpenseRevenue> = mongoose.model<IExpenseRevenue>('ExpenseRevenue', expenseRevenueSchema);