
document.addEventListener('DOMContentLoaded', function () {

    let nameregex = "^([a-zA-Zàáâäçèéêëìíîïñòóôöùúûü \-\']+)$"
    let phoneregex = "((?:\\+|00)[17](?: |\\-)?|(?:\\+|00)[1-9]\\d{0,2}(?: |\\-)?|(?:\\+|00)1\\-\\d{3}(?: |\\-)?)?(0\\d|\\([0-9]{3}\\)|[1-9]{0,3})(?:((?: |\\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\\-)[0-9]{3}(?: |\\-)[0-9]{4})|([0-9]{7}))"

    let emailregex = "^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})$"

    let messageMinLength = 30

    let firstname = document.getElementById("firstname")
    let lastname = document.getElementById("lastname")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let message = document.getElementById("message")
    let sendBut = document.getElementById("sendBut")
    let firstnameerror = document.getElementById("firstnameerror")
    let lastnameerror = document.getElementById("lastnameerror")
    let emailerror = document.getElementById("emailerror")
    let phoneerror = document.getElementById("phoneerror")
    let messageerror = document.getElementById("messageerror")

    let firstnameValid = false
    let lastnameValid = false
    let emailValid = false
    let phoneValid = false
    let messageValid = false

    function checkAll() {
        if (firstnameValid && lastnameValid && emailValid && phoneValid && messageValid) {
            sendBut.disabled = false
        } else {
            sendBut.disabled = true
        }
    }

    firstname.addEventListener("input", function () {
        if (firstname.value.match(nameregex) && firstname.value.length > 0) {
            firstnameValid = true
            firstnameerror.hidden = true
        } else {
            firstnameValid = false
            firstnameerror.hidden = false
        }
        checkAll()
    })

    lastname.addEventListener("input", function () {
        if (lastname.value.match(nameregex) && lastname.value.length > 0) {
            lastnameValid = true
            lastnameerror.hidden = true
        } else {
            lastnameValid = false
            lastnameerror.hidden = false
        }
        checkAll()
    })

    email.addEventListener("input", function () {
        if (email.value.match(emailregex) && email.value.length > 0) {
            emailValid = true
            emailerror.hidden = true
        } else {
            emailValid = false
            emailerror.hidden = false
        }
        checkAll()
    })

    phone.addEventListener("input", function () {
        if (phone.value.match(phoneregex) && phone.value.length > 0) {
            phoneValid = true
            phoneerror.hidden = true
        } else {
            phoneValid = false
            phoneerror.hidden = false
        }
        checkAll()
    })

    message.addEventListener("input", function () {
        if (message.value.length >= messageMinLength) {
            messageValid = true
            messageerror.hidden = true
        } else {
            messageValid = false
            messageerror.hidden = false
        }
        checkAll()
    })

    sendBut.addEventListener("click", function () {
        if (firstnameValid && lastnameValid && birthdateValid && emailValid && phoneValid && messageValid) {
            error.innerHTML = "Message sent"
        } else {
            error.innerHTML = "Please fill in all fields correctly"
        }
    })




});
