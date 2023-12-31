const mongoose = require('mongoose');

// User schema currently set to default....
// will be adding more fields whenever new requirement comes
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;