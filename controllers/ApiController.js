let request = require('request');

let BaseController = require('./BaseController');
// let api_key = "at_MXwXLsmXYnNB8FP7b2LJYnee7xIk7";
let api_key = "at_F8gvPDZhobrSAr24NkY4oPFvPfKdZ";
let api_url = "https://domain-reputation.whoisxmlapi.com/api/v1?apiKey=" + api_key + "&mode=full&domainName=";

module.exports = BaseController.extend({
    name: 'ApiController',
    api_get_risk: function (domain) {
        let url = api_url + domain;
        console.log("api get risk ...");
        console.log(url);
        let options = {
            url: url,
            method: 'GET',
            json: {}
        };
        return new Promise(function (resolve, reject) {
            request(options, function (err, response, body) {
                if (err) {
                    console.log("error api_get_risk: ", err);
                    resolve({status: 'error', data: err});
                }
                try {
                    console.log("success api_get_risk: ", body);
                    resolve({status: 'success', data: body});
                } catch (e) {
                    console.log("error1 api_get_risk: ", e);
                    resolve({status: 'error', data: e});
                }
            });
        });
    },
});