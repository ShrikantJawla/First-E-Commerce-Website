/** @format */

let data = JSON.parse(localStorage.getItem("signUpData")) || [];

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	let obj = {
		name: form.name.value,
		email: form.email.value,
		pass: form.pass.value
	};
	let is_true = false;
	data.forEach((ele) => {
		if (ele.name === obj.name || ele.email === obj.email) {
			is_true = true;
		}
	});
	if (is_true === true) {
		alert("You have already signed up!!");
		form.name.value = "";
		form.email.value = "";
		form.pass.value = "";
		return;
	}

	//I can use for loop if I do not want to use boolean value bcz in map function even if  I put return
	// it return values for number of elements present in array

	// for(let i=0; i<data.length;i++){
	// 	if (data[i].name === obj.name || data[i].email === obj.email) {
	// 		alert("You have already signed up!!");
	// 		is_true = true;
	// 		form.name.value = "";
	// 		form.email.value = "";
	// 		form.pass.value = "";
	// 		return;
	// 	}
	// }

	data.push(obj);
	localStorage.setItem("signUpData", JSON.stringify(data));
	form.name.value = "";
	form.email.value = "";
	form.pass.value = "";
	window.location.href = "../signIn/signIn.html";
});

function submitEnable() {
	if (
		form.name.value !== "" &&
		form.email.value !== "" &&
		form.pass.value !== ""
	) {
		document.getElementById("sub").disabled = false;
	} else {
		document.getElementById("sub").disabled = true;
	}
}
