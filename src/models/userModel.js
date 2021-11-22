import mongoose from 'mongoose'
const Schema = mongoose.Schema
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  phone_verified: {
    type: Boolean,
  },
  email_verified: {
    type: Boolean,
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'DELETED', 'INACTIVE'],
    default: 'ACTIVE'
  },
  user_type: {
    type: String,
    enum: ['SUPERADMIN', 'ADMIN', 'USER'],
    required: true,
    index: true
  },
  address: {
    type: Object,
  },
  designation: {
    type: String
  },
  avatar: {
    type: String
  }
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

UserSchema.index({
  email: 1
}, {
  unique: true,
  background: true,
})

UserSchema.index({
  username: 1
}, {
  unique: true,
  background: true,
})

const userModel = mongoose.model('User', UserSchema, 'users')

export default userModel
