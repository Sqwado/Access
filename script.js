
document.addEventListener('DOMContentLoaded', function () {

    let menuButton = document.getElementById("menuButton")

    let navlinks = document.getElementById("navlinks")

    function hideNav() {
        navlinks.hidden = true
        navlinks.style.display = "none"
        menuButton.ariaExpanded = false
    }

    function showNav() {
        navlinks.hidden = false
        navlinks.style.display = "flex"
        menuButton.ariaExpanded = true
    }

    function resize() {
        if (document.body.clientWidth < 768) {
            hideNav()
        } else {
            showNav()
        }
    }
    
    resize()

    menuButton.addEventListener("click", function () {
        if (navlinks.hidden) {
            showNav()
        } else {
            hideNav()
        }
    })

    window.addEventListener("resize", function () {
        resize()
    })


    let header = document.getElementById("header")
    let main = document.getElementById("main")
    let footer = document.getElementById("footer")

    let nameregex = "^([a-zA-Zàáâäçèéêëìíîïñòóôöùúûü \-\']+)$"
    let phoneregex = "((?:\\+|00)[17](?: |\\-)?|(?:\\+|00)[1-9]\\d{0,2}(?: |\\-)?|(?:\\+|00)1\\-\\d{3}(?: |\\-)?)?(0\\d|\\([0-9]{3}\\)|[1-9]{0,3})(?:((?: |\\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\\-)[0-9]{3}(?: |\\-)[0-9]{4})|([0-9]{7}))"
    // let phoneregex = "^[+33|0][6|7][0-9]{8,8}$"
    let emailregex = "^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})$"

    let messageMinLength = 30

    let contactForm = document.getElementById("contactForm")
    let confirmation = document.getElementById("confirmation")
    let confirmationtext = document.getElementById("confirmationtext")
    let closeBut = document.getElementById("closeBut")
    let validateBut = document.getElementById("validateBut")
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

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault()
        
        openModal()

        closeBut.focus()

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeModal()
            }else if (event.key === "Enter") {
                validModal()
                setTimeout(function () {
                    closeModal()
                }, 5000)
            }
        })
        
    })


    closeBut.addEventListener("click", function () {
        closeModal()

    })

    validateBut.addEventListener("click", function () {
        validModal()
        setTimeout(function () {
            closeModal()
        }, 5000)
    })


    function openModal() {
        confirmation.hidden = false
        confirmation.style.display = "flex"

        header.arialHidden = true
        main.arialHidden = true
        footer.arialHidden = true

        confirmation.arialModal = true
        confirmation.role = "dialog"
        confirmation.arialHidden = false

        validateBut.focus()


        confirmationtext.innerHTML = "Are you sure you want to send this message?"

    }

    function closeModal() {
        confirmation.hidden = true
        confirmation.style.display = "none"

        header.arialHidden = false
        main.arialHidden = false
        footer.arialHidden = false

        confirmation.arialModal = false
        confirmation.role = ""
        confirmation.arialHidden = true

        validateBut.style.display = "block"

    }

    function validModal() {

        console.log("Form submitted")
        console.log("Firstname: " + firstname.value)
        console.log("Lastname: " + lastname.value)
        console.log("Email: " + email.value)
        console.log("Phone: " + phone.value)
        console.log("Message: " + message.value)

        confirmationtext.innerHTML = "Thank you " + firstname.value + " " + lastname.value + " for your message. We will contact you at the email address " + email.value + " or the phone number " + phone.value + " as soon as possible."

        contactForm.reset()

        validateBut.style.display = "none"
        
    }

});
