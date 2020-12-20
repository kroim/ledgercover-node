let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let crypto = require('crypto');

let User = new Schema({
    id: String,
    name: String,
    email: String,
    phone: String,
    address: String,
    password: String,
    role: Number,   // 1: admin, 2: user
    avatar: String,
    email_verify_flag: Number,   // 1: non-verified, 2: verified
    email_verify_token: String,
    phone_verify_flag: Number,   // 1: non-verified, 2: verified
    phone_verify_token: String,
    reset_flag: Number,   // 1: usable token, 2: unusable token
    reset_token: String,
    factor2: String,  // two factor token
    factor2_url: String,
    factor2_flag: Number,  // 1: usable two factor code, 2: unusable two factor code
    industry: String,
    employee: Number,
    created_at: Date,
    updated_at: Date,
});
User.pre('save', function (next) {
    this.id = this._id.toString();
    next();
});
// Methods
User.methods.verifyPassword = function (password) {
    return this.password === crypto.createHash('md5').update(password).digest("hex")
};
module.exports.User = mongoose.model('users', User);
