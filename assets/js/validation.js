function validation() {

	// Variable Declaration
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Mail Format
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        
    // Name Validation
    if (name == "") {
        document.getElementById('name-error').innerHTML =" Please Enter Name ";
        return false;
    }
    else if (name.length < 5) {
        document.getElementById('name-error').innerHTML = " Please Enter Valid Name ";
        return false;
    }
    else {
        document.getElementById('name-error').innerHTML = " ";
    }

    // Email Validation
    if (email == "") {
        document.getElementById('email-error').innerHTML =" Please Enter Email ";
        return false;
    }
    else if (email.length < 5) {
        document.getElementById('email-error').innerHTML = " Please Enter Valid Email ";
        return false;
    }
    else if (!email.match(mailFormat)) {
        document.getElementById('email-error').innerHTML = " Please Enter Valid Email ";
        return false;
    }
    else {
        document.getElementById('email-error').innerHTML = " ";
    }

    // Phone Validation
    if (phone == "") {
        document.getElementById('phone-error').innerHTML =" Please Enter Phone ";
        return false;
    }
    else if (phone.length < 10) {
        document.getElementById('phone-error').innerHTML = " Please Enter Valid Phone ";
        return false;
    }
    else if (phone.length > 10) {
        document.getElementById('phone-error').innerHTML = " Please Enter Valid Phone ";
        return false;
    }
    else {
        document.getElementById('phone-error').innerHTML = " ";
    }

    // Address Validation
    if (address == "") {
        document.getElementById('address-error').innerHTML =" Please Enter Address ";
        return false;
    }
    else if (address.length < 5) {
        document.getElementById('address-error').innerHTML = " Please Enter Valid Address ";
        return false;
    }
    else {
        document.getElementById('address-error').innerHTML = " ";
    }

    // Subject Validation
    if (subject == "") {
        document.getElementById('subject-error').innerHTML =" Please Enter Subject ";
        return false;
    }
    else if (subject.length < 5) {
        document.getElementById('subject-error').innerHTML = " Please Enter Valid Subject ";
        return false;
    }
    else if (subject.length < 15) {
        document.getElementById('subject-error').innerHTML = " Please Enter More Than 15 Charachers ";
        return false;
    }
    else {
        document.getElementById('subject-error').innerHTML = " ";
    }

    // Message Validation
    if (message == "") {
        document.getElementById('message-error').innerHTML =" Please Enter Message ";
        return false;
    }
    else if (message.length < 5) {
        document.getElementById('message-error').innerHTML = " Please Enter Valid Message ";
        return false;
    }
    else if (message.length < 30) {
        document.getElementById('message-error').innerHTML = " Please Enter More Than 30 Charachers ";
        return false;
    }
    else {
        document.getElementById('message-error').innerHTML = " ";
    }
}