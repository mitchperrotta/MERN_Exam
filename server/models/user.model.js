const mongoose = require("mongoose");
bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You need a name"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "you need a password"],
        minLength: [6, "Password must be at least 6 characters"]
    }
}, {timestamps: true})

UserSchema.virtual('confirmPass')
    .get(() => this._confirmPass)
    .set(value => this._confirmPass = value);

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPass) {
        this.invalidate('confirmPass', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
        });
});

module.exports.User = mongoose.model("User", UserSchema);