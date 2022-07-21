/** @format */

// Write SignIn page js code here:

let data = JSON.parse(localStorage.getItem("signUpData")) || [];
let nowSignIn = JSON.parse(localStorage.getItem("remainSignIn")) || [];

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (form.email.value === "" || form.pass.value === "") {
		alert("Please fill all the inputs!!");
		form.email.value = "";
		form.pass.value = "";
		return;
	}
	let obj = {
		email: form.email.value,
		pass: form.pass.value
	};
	let is_true = false;
	data.forEach((ele) => {
		if (ele.email === obj.email && ele.pass === obj.pass) {
			is_true = true;
			obj["name"] = ele.name;
		}
	});
	if (is_true) {
		alert("Sign in successful.");
		nowSignIn = [];
		nowSignIn.push(obj);
		localStorage.setItem("remainSignIn", JSON.stringify(nowSignIn));
		window.location.href = "../index.html";
	} else {
		alert("No such user is exist Please Sign up first!!!!");
		form.email.value = "";
		form.pass.value = "";
	}
});
