import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema({
  name: String,
  age: String,
  email: String
});

const Users = mongoose.model('Users', usersSchema);

export default Users