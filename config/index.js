let config = {
    mode: 'local',
    port: 7000,
    base_url: 'http://127.0.0.1:7000',
    mongo: {
        host: '127.0.0.1',
        port: 27017,
        db_name: 'ledger_cover'
    },
    dev: {
        name: 'admin',
        email: 'admin@admin.com',
        password: 'admin'
    },
    mail: {
        host: "mail.ledgercover.com",
        name: "info@ledgercover.com",
        pass: "oOTwc35leJbe",
        port: 465,
    },
    stripe_test_pub: "pk_test_aCJJcbFRrf69ilGqN6Df78G7",
    stripe_test_sec: "sk_test_0y0VmDf3DFLDXA20hkhI5sxG",
};
module.exports = function () {
    return config;
};