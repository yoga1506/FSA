const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const Users = new Schema({
  email: String,
  name: String,
  password: String,
});

const Todo = new Schema({
  title: String,
  done: Boolean,
  userId: ObjectId,
});
//"todos"and "users" below represent the database collection name , we need to declare that correctly as db name in mongooose model
const TodoModel = mongoose.model("todos", Todo);
const UserModel = mongoose.model("users", Users);

module.exports = {
  TodoModel: TodoModel,
  UserModel: UserModel,
};
