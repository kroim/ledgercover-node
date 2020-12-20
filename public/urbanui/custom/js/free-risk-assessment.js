let currentRiskActiveName = '';
let riskName = '';
let riskEmail = '';
let riskPassword = '';
let riskDomain = '';
let riskIndustry = '';
let riskEmployees = 0;
let riskPhone = '';
$(function () {
    customMovingTag();
});
function initCustomTabs() {
    let tabContent = document.getElementsByClassName("wonder-tabcontent");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    let tabLinks = document.getElementsByClassName("wonder-tablinks");
    for (let j = 0; j < tabLinks.length; j++) {
        tabLinks[j].className = tabLinks[j].className.replace(" active", "");
    }
}
function customTabClick(evt, cityName) {
    if (cityName === 'risk-result' && currentRiskActiveName !== 'risk-submit') {
        if (!getRiskAccountInfo()) return 0;
        else if (!getRiskCompanyInfo()) return 0;
        getRiskAssessResult();
    } else if (cityName === 'risk-submit') {
        if ($('#risk-result-flag').val() !== '1') return 0;
    }
    initCustomTabs();
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    customMovingTag();
}
function customMovingTag() {
    let active_tab = $('.wonder-tab button.active');
    let idx = active_tab.attr('data-type');
    currentRiskActiveName = active_tab.attr('data-name');
    $('.custom-moving-tag').attr('data-status', idx).text($(active_tab).text());
}
function clickEmployeeIcon(evt, value) {
    $('.custom-risk-icon i').each(function () {
        $(this).removeClass('active');
    });
    $(evt).addClass('active');
    $('#risk-employees').val(value);
}
function freeRiskPrevious(name) {
    initCustomTabs();
    $('.wonder-tab button[data-name="' + name + '"]').addClass('active');
    $('#' + name).css('display', 'block');
    customMovingTag();
}
function freeRiskNext(name) {
    if (name === 'risk-result') {
        if (!getRiskAccountInfo()) return 0;
        else if (!getRiskCompanyInfo()) return 0;
        getRiskAssessResult();
    } else if (name === 'risk-submit') {
        if ($('#risk-result-flag').val() !== '1') return 0;
    } else if (name === 'risk-final') {
        submitMailUs();
        return 0;
    }
    initCustomTabs();
    $('.wonder-tab button[data-name="' + name + '"]').addClass('active');
    $('#' + name).css('display', 'block');
    customMovingTag();
}

function getRiskAccountInfo() {
    let account_flag = true;
    riskName = $('#risk_name').val();
    if (riskName === '') account_flag = false;
    riskEmail = $('#risk_email').val();
    if (riskEmail === '') account_flag = false;
    riskPassword = $('#risk_password').val();
    if (riskPassword === '') account_flag = false;
    riskDomain = $('#risk_domain').val();
    if (riskDomain === '') account_flag = false;
    riskIndustry = $('#risk_industry').val();
    if (riskIndustry === '') account_flag = false;
    riskPhone = $('#risk_phone').val();
    if (riskPhone === '') account_flag = false;
    if (!account_flag) {
        initCustomTabs();
        let firstTab = $('.wonder-tab button[data-type="0"]');
        document.getElementById(firstTab.attr("data-name")).style.display = "block";
        firstTab.addClass("active");
        customMovingTag();
        $('#questionnaire-form button[type="submit"]').click();
    }
    return account_flag;
}
function getRiskCompanyInfo() {
    let employee = $('#risk-employees').val();
    if (parseInt(employee)) riskEmployees = parseInt(employee);
    else riskEmployees = 0;
    return riskEmployees !== 0;
}
function getRiskAssessResult() {
    $('#span-risk-name').text(riskName);
    $('#span-risk-signature').text(riskName);
    $('#span-risk-domain').text(riskDomain);
    $('.dot-opacity-loader').css('display', 'block');
    $.ajax({
        url: '/free-risk-assessment',
        method: 'post',
        data: {
            method_type: 'risk-api',
            riskName: riskName,
            riskEmail: riskEmail,
            riskPassword: riskPassword,
            riskDomain: riskDomain,
            riskIndustry: riskIndustry,
            riskEmployees: riskEmployees,
            riskPhone: riskPhone,
        },
        success: function (res) {
            if (res.status === 'success') {
                $('#risk-result-flag').val(1);
                $('#riskTabContent').html('');
                // customAlert(res.message, true);
                let riskData = res.data;
                let reputationScore = "Very Risk";
                if (parseFloat(riskData.reputationScore) > 90) reputationScore = "Very Secure";
                else if (parseFloat(riskData.reputationScore) > 70) reputationScore = "Secure";
                else if (parseFloat(riskData.reputationScore) > 50) reputationScore = "Risk";
                $('#riskTabContent').append('<h5>Warning detected score: ' + riskData.reputationScore + '</h5>');
                for (let i = 0; i < riskData.testResults.length; i++) {
                    $('#riskTabContent').append('<label class="risk-label">' + riskData.testResults[i].test + '</label>');
                    for (let j = 0; j < riskData.testResults[i].warnings.length; j++) {
                        $('#riskTabContent').append('<p class="risk-description">' + riskData.testResults[i].warnings[j] + '</p>');
                    }
                }
            } else customAlert(res.message);
            $('.dot-opacity-loader').css('display', 'none');
        }
    })
}
function submitMailUs() {
    let submit_flag = $('#risk-result-flag').val();
    if (submit_flag !== '1') return 0;
    $('input[name="finish"]').val('Sending ...');
    $('input[name="finish"]').prop('disabled', true);
    $.ajax({
        url: "/free-risk-assessment",
        method: 'post',
        data: {
            method_type: 'risk-mailing',
            report_name: riskName,
            report_email: riskEmail,
            report_password: riskPassword,
            report_domain: riskDomain,
            report_industry: riskIndustry,
            report_employees: riskEmployees,
            report_phone: riskPhone,
        },
        success: function (res) {
            if (res.status === 'success') {
                customAlert(res.message, true);
                $('#risk_assessment_form').css('display', 'none');
                $('#subscription_form').css('display', 'inherit')
            }
            else customAlert(res.message);
        }
    })
}
function chooseSubscriptionPlan(plan) {
    let tags = $('.pricing-card-body button');
    tags.css('background', '#fc42a5').attr('disabled', false);
    $(tags[plan-1]).css('background', '#fcd53b').attr('disabled', true);
    let amount = 55;
    if (plan === 2) amount = 65;
    else if (plan === 3) amount = 75;
    else if (plan === 4) amount = 99;
    $('#subscription_form_plan').val(amount);
}
function openCheckout() {
    let amount = parseInt($('#subscription_form_plan').val());
    if (!amount) {
        customAlert("Please choose a plan");
        return;
    }
    if ($('#premium1').prop('checked')) amount += 15;
    if ($('#premium2').prop('checked')) amount += 45;
    if ($('#premium3').prop('checked')) amount += 15;
    if ($('#premium4').prop('checked')) amount += 15;
    if ($('#premium5').prop('checked')) amount += 15;
    $('#checkout_amount').val(amount);
    $('#checkout_amount_span').text(amount);
    $('#checkout-modal').modal('show');
}
$('#checkout-form').on('submit', function (e) {
    e.preventDefault();
    $('#checkout-form button[type="submit"]').attr('disabled', true);
    $.ajax({
        url: '/submit-checkout',
        method: "post",
        data: {
            card_number: $('#card_number').val(),
            card_expire: $('#card_expire').val(),
            card_cvc: $('#card_cvc').val(),
            amount: $('#checkout_amount').val(),
        },
        success: function (res) {
            if (res.status === 'success') {
                customAlert(res.message, true);
                setTimeout(function () {
                    location.reload();
                }, 2500)
            } else {
                customAlert(res.message);
            }
            $('#checkout-form button[type="submit"]').attr('disabled', false);

        }
    })
});