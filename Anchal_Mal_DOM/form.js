function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}



function sync(input) {
	var t1 = document.getElementById('t1');
	var t2 = document.getElementById('t2');
	t2.value = t1.value;
}


function validateform() {

	if (validatefunc()) {
		return addtolist();
	}
}


function validatefunc() {

	if (validatename() && validateemail() && validatephone() && validatepassword()) {
		return true;
	}
	return false;
}

function validatephone() {
	var phoneno = document.forms["myform"]["phone"].value;
	re = /^\d{10}$/;
	if (!re.test(document.myform.phone.value)) {
		alert("Error: Not a valid phone number!");
		document.myform.phone.focus();
		return false;
	}
	return true;
}


function validatepassword() {
	var password = document.forms["myform"]["password1"].value;
	if (document.myform.password1.value.length < 8) {
		alert("Password must be 8 characters long");
		document.myform.password1.focus();
		return false;
	}

	re = /[0-9]/;
	if (!re.test(document.myform.password1.value)) {
		alert("Password must contain at least one number (0-9)!");
		document.myform.password1.focus();
		return false;
	}

	re = /[A-Z]/;
	if (!re.test(document.myform.password1.value)) {
		alert("Error: password must contain at least one uppercase letter (A-Z)!");
		document.myform.password1.focus();
		return false;
	}

	if (document.myform.password1.value == document.myform.password2.value) {
		return true;
	} else {
		alert("Error: Please check that you have entered same password!");
		document.myform.password2.focus();
		return false;
	}
	return true;

}


function validatename() {

	var firstname = document.forms["myform"]["firstname"].value;

	if (firstname == "") {
		alert("Error: Name must be filled out");
		document.myform.firstname.focus();
		return false;
	}

	re = /^[a-zA-Z\s]+$/;
	if (!re.test(document.myform.firstname.value)) {
		alert("Error: First name must contain only alphabets!");
		document.myform.firstname.focus();
		return false;
	}

	re = /^[a-zA-Z\s]+$/;
	if (!re.test(document.myform.lastname.value)) {
		alert("Error: Last name must contain only alphabets!");
		document.myform.lastname.focus();
		return false;
	}
	return true;
}


function validateemail() {

	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(document.myform.email.value)) {
		alert("You have entered an invalid email address!")
		return false;
	}
	return true;
}



function addtolist() {

	var node = document.createElement("li");
	var text = document.getElementById("firstname").value;
	var email = document.getElementById("email").value;
	node.setAttribute('title', email);
	node.innerHTML = text; //it is not textNode it is only text value that will be returned
	document.getElementById("mylist").appendChild(node);

}



//var btn = document.getElementById.value("btn3");