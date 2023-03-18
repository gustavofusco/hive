import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: String,
  name: String,
  photo: String
}, {
  toJSON: {
    virtuals: true
  }
})

UserSchema.virtual('photo_url').get(function (){
  return `http://localhost:3333/files/${this.photo}`
})

export default model('User', UserSchema)
