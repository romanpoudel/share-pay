import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
}

const userSchema: Schema<IUser> = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const User =
(mongoose.models?.User) ||
mongoose.model<IUser>('User', userSchema);

export default User;
