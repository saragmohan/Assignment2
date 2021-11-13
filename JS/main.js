var uname = document.getElementById("name");
var smail = document.getElementById("semail");
var spswd = document.getElementById("password1");
var spswd2 = document.getElementById("password2");
var phone = document.getElementById("phone");
var strength = document.getElementById("strength");

function svalidate() {
    var name = /^[a-zA-Z0-9]+$/;
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (name.test(uname.value) != "1") {
        window.alert(" username is not entered");
        return false;
    }

    else if (res.test(smail.value) != "1") {

        window.alert("Email Is Invalid");
        return false;
    }
    else if (phoneno.test(phone.value) != "1") {
        window.alert("Please enter a valid phone number :");
        return false;
    }
    else if (psr.test(spswd.value) != "1") {
        window.alert("Password Is Invalid");
        window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
        window.alert("try again");
        return false;
    }
    else if (spswd.value != spswd2.value) {
        window.alert("Passwords Doesnt Match, Please Re-enter :");
        return false;
    }
    else {
        window.alert("Success!!!");
        return true;
    }

}
function passwordChanged() {
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");

    if (spswd.value.length == 0) {
        strength.innerHTML = '-';
    } else if (false == enoughRegex.test(spswd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(spswd.value)) {
        strength.innerHTML = '<span style="background-color:green;font-weight:bold">Strong</span>';
    } else if (mediumRegex.test(spswd.value)) {
        strength.innerHTML = '<span style="background-color:orange;font-weight:bold">Medium</span>';
    } else {
        strength.innerHTML = '<span style="background-color:red;font-weight:bold">Poor!!</span>';
    }
}
