let data = JSON.parse(localStorage.getItem("cartItems")) || [];
	let total = 0;
	totalAmount(data);
	if (data === []) {
		total = 0;
	}
	displaydata(data);
	function displaydata(data) {
		document.getElementById("items").innerHTML = "";
		data.forEach((ele,index) => {
			let div = document.createElement("div");
			let img = document.createElement("img");
			img.setAttribute("src", ele.image_url);
			let div2 = document.createElement("div");
			let h5 = document.createElement("h5");
			h5.innerText = ele.name;
			let newPrice = document.createElement("p");
			newPrice.innerText = "₹" + ele.price;
			let del = document.createElement("p");
			del.setAttribute("id", "delbutton");
			del.innerText = "X";
			del.addEventListener("click", () => {
				deletedata(index);
			});
			div2.append(h5, newPrice);
			div.append(img, div2, del);
			document.getElementById("items").append(div);
		});
	}
	function deletedata(index) {
		data.splice(index, 1);
		localStorage.setItem("cartItems", JSON.stringify(data));
		displaydata(data);
		totalAmount(data);
	}

	//Making enterCoupon live:
	document.getElementById("enterCoupon").addEventListener("click", (evt) => {
		if (document.querySelector("#coupon-code").value == "get30") {
			total = total * 0.7;
			total = total.toFixed(2);
		}
		document.querySelector("#totalamount").innerText = "₹" + total;
	});
	function totalAmount(data) {
		if (data.length === 0) {
			document.querySelector("#totalamount").innerText = "₹" + 0;
		} else {
			let temp = 0;
			data.forEach((ele) => {
				temp += +ele.price;
				total = temp;
				document.querySelector("#totalamount").innerText = "₹" + total;
			});
		}
	}

	//Sorting by price:
	document
		.getElementById("priceSorting")
		.addEventListener("change", sortByPrice);

	function sortByPrice() {
		let selectItems = document.querySelector("#priceSorting").value;
		if (selectItems === "Low to High") {
			data.sort((a, b) => a.price - b.price);
			displaydata(data);
		}
		if (selectItems === "High to Low") {
			data.sort((a, b) => b.price - a.price);
			displaydata(data);
		}
	}

	//Making payment button live:
	document.getElementById("placeOrder").addEventListener("click", makePayment);

function makePayment() { };