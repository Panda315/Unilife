const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  verified : {
    type:Boolean,
    default:false,
    required:true
  },
  gender:{
    type:String,
    required:false
  },
  contact : {
    type:String,
    required:false
  },
  country : {
    type:String,
    required:false
  },
  isAdmin : {
    type : Boolean,
    default : false,
    required :false
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;