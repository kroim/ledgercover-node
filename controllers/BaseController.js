let _ = require("underscore");
let config = require('../config')();
let crypto = require('crypto');

let User = require('../models/User').User;

module.exports = {
    name: "BaseController",
    extend: function (child) {
        return _.extend({}, this, child);
    },
    checkDev: async function () {
        let dev_user = await User.findOne({email: config.dev.email});
        if (!dev_user) {
            let created_at = new Date();
            let dev_item = new User({
                name: config.dev.name,
                email: config.dev.email,
                phone: '',
                address: '',
                password: crypto.createHash('md5').update(config.dev.password).digest('hex'),
                role: 1,
                avatar: '/assets/images/faces/face2.jpg',
                email_verify_flag: 2,
                email_verify_token: '',
                phone_verify_flag: 2,
                phone_verify_token: '',
                factor2_flag: 2,
                reset_flag: 2,
                created_at: created_at,
                updated_at: created_at
            });
            await dev_item.save();
        }
    },
    validEmail: async function (email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    generatePhoneCode: function (length) {
        if (length < 4) return length; // no security
        length = length - 1;
        return Math.floor(Math.pow(10, length) + Math.random() * 9 * Math.pow(10, length)).toString();
    },
    generateEmailCode: function (length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
};
