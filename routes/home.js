let express = require('express');
let router = express.Router();

let home = require('../controllers/HomeController');
let auth = require('../controllers/AuthController');
/**
 * Multi-language Support
 * */
router.get('/lang/en', function (req, res) {
    res.cookie('i18n', 'EN');
    res.redirect(req.headers.referer)
});
router.get('/lang/de', function (req, res) {
    res.cookie('i18n', 'DE');
    res.redirect(req.headers.referer)
});
router.get('/lang/fr', function (req, res) {
    res.cookie('i18n', 'FR');
    res.redirect(req.headers.referer)
});
// old pages

// router.get('/old-page-home', function (req, res, next) {
//     home.getHomeBack(req, res, next);
// });
// router.get('/old-free-risk-assessment', function (req, res, next) {
//     home.getFreeRiskAssessmentOld(req, res, next);
// });

router.get('/', function (req, res, next) {
    home.getHome(req, res, next);
});
router.get('/app-download', function (req, res, next) {
    home.getApp(req, res, next);
});
router.get('/free-risk-assessment', function (req, res, next) {
    home.getFreeRiskAssessment(req, res, next);
});
router.post('/free-risk-assessment', function (req, res, next) {
    home.getFreeRiskAssessmentPost(req, res, next);
});
router.get('/risk-management/security', function (req, res, next) {
    home.getCyberSecutiry(req, res, next);
});
router.get('/risk-management/cyber', function (req, res, next) {
    home.getCyber(req, res, next);
});
router.get('/risk-management/process', function (req, res, next) {
    home.getProcess(req, res, next);
});
router.get('/resources/attack-types', function (req, res, next) {
    home.getCyberAttackTypes(req, res, next);
});
router.get('/about/team', function (req, res, next) {
    home.getTeam(req, res, next);
});
router.get('/about/contact-us', function (req, res, next) {
    home.getContactUs(req, res, next);
});
router.get('/about/summits', function (req, res, next) {
    home.getSummits(req, res, next);
});
router.post('/submit-contact', function (req, res, next) {
    home.postContact(req, res, next);
});
router.post('/submit-checkout', function (req, res, next) {
    home.postCheckOut(req, res, next);
});

// auth urls
// router.get('/login', function (req, res, next) {
//     auth.login(req, res, next);
// });
router.post('/post-login', function (req, res, next) {
    auth.postLogin(req, res, next);
});
// router.get('/register', function (req, res, next) {
//     auth.register(req, res, next);
// });
router.post('/post-register', function (req, res, next) {
    auth.postRegister(req, res, next);
});
router.get('/forgot-password', function (req, res, next) {
    auth.forgotPassword(req, res, next);
});
router.post('/post-forgot-password', function (req, res, next) {
    auth.postForgotPassword(req, res, next);
});
router.get('/reset-password', function (req, res, next) {
    auth.resetPassword(req, res, next);
});
router.post('/post-reset-password', function (req, res, next) {
    auth.postResetPassword(req, res, next);
});
router.get('/logout', function (req, res, next) {
    auth.logout(req, res, next);
});

// user routes
router.get('/user/my-account', function (req, res, next) {
    auth.myAccount(req, res, next);
});
router.post('/user/change-password', function (req, res, next) {
    auth.changePassword(req, res, next);
});

module.exports = router;