'use strict';

const Mongoose = require('../../lib/index').mongoose();

const Schema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
});

const UserModel = Mongoose.model('User', Schema);

module.exports = UserModel;
