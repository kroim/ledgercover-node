let View = require('../views/base');
let path = require('path');
let fs = require('fs');
let config = require('../config')();
let crypto = require('crypto');
let ejs = require('ejs');
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: config.mail.host,
    port: config.mail.port,
    secure: true,
    auth: {
        user: config.mail.name,
        pass: config.mail.pass,
    },
});

let BaseController = require('./BaseController');
let User = require('../models/User').User;
let publicAbsPath = path.join(__dirname, '../public');

module.exports = BaseController.extend({
    name: 'AuthController',
    register: async function (req, res, next) {
        if (req.session.login) return res.redirect('/user/my-account');
        let v = new View(res, 'auth/register');
        v.render({
            title: 'Register',
            session: req.session,
            i18n: res,
            tab: "home",
        })
    },
    postRegister: async function (req, res, next) {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let phone = req.body.phone;
        let company = req.body.company;
        // let confirm_password = req.body.confirm_password;
        // if (password !== confirm_password) return res.send({status: 'error', message: res.cookie().__('Confirm password is not matched')});
        let checkEmail = await User.findOne({email: email});
        if (checkEmail) return res.send({status: 'error', message: res.cookie().__('Email already exists')});
        let new_user = new User({
            name: name,
            email: email,
            password: crypto.createHash('md5').update(password).digest("hex"),
            phone: phone,
            industry: company,
            role: 2,
            avatar: '/assets/images/faces/face2.jpg',
            email_verify_flag: 2,
            email_verify_token: '',
            phone_verify_flag: 2,
            phone_verify_token: '',
            factor2_flag: 2,
            reset_flag: 2,
            created_at: new Date(),
            updated_at: new Date()
        });
        await new_user.save();
        return res.send({status: 'success', message: res.cookie().__('Successful registration, please login')});
    },
    login: async function (req, res, next) {
        if (req.session.login) return res.redirect('/user/my-account');
        let v = new View(res, 'auth/login');
        v.render({
            title: 'Login',
            session: req.session,
            i18n: res,
            tab: "home",
        })
    },
    postLogin: async function (req, res, next) {
        let email = req.body.email;
        let password = req.body.password;
        let user = await User.findOne({email: email});
        if (!user) return res.send({status: 'error', message: res.cookie().__('Undefined user')});
        if (!user.verifyPassword(password)) return res.send({status: 'error', message: res.cookie().__('Password is not correct')});
        req.session.user = user;
        req.session.login = 1;
        return res.send({status: 'success', message: res.cookie().__('Login is success')});
    },
    forgotPassword: async function (req, res, next) {
        if (req.session.login) return res.redirect('/user/my-account');
        let v = new View(res, 'auth/forgot');
        v.render({
            title: 'Forgot Password',
            session: req.session,
            i18n: res,
            tab: "home",
        })
    },
    postForgotPassword: async function (req, res, next) {},
    resetPassword: async function (req, res, next) {
        if (req.session.login) return res.redirect('/user/my-account');
        let v = new View(res, 'auth/reset');
        v.render({
            title: 'Reset Password',
            session: req.session,
            i18n: res,
            tab: "home",
        })
    },
    postResetPassword: async function (req, res, next) {},
    logout: async function (req, res, next) {
        req.session.login = 0;
        req.session.user = null;
        return res.redirect('/');
    },

    myAccount: async function (req, res, next) {
        if (!req.session.login) res.render("templates/error", { session: req.session });
        let v = new View(res, 'account/myaccount');
        v.render({
            title: 'My Account',
            session: req.session,
            i18n: res,
            side: "my-account",
            subside: "",
        })
    },
    changePassword: async function (req, res, next) {
        if (!req.session.login) res.render("templates/error", { session: req.session });
        let user = await User.findOne({id: req.session.user.id});
        if (!user) return res.send({status: 'error', message: res.cookie().__('Undefined user')});
        let currentPassword = req.body.current_password;
        if (!user.verifyPassword(currentPassword)) return res.send({status: 'error', message: 'Password incorrect'});
        let newPassword = req.body.new_password;
        let confirmPassword = req.body.confirm_password;
        if (newPassword !== confirmPassword) return res.send({status: 'error', message: res.cookie().__('Confirm password is not matched')});
        user.password = crypto.createHash('md5').update(newPassword).digest("hex");
        return res.send({status: 'success', message: "Password is changed successfully"});
    },
    other_func: async function (req, res, next) {},
});
