document.getElementById('reviewForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = event.target;
    // let companyData = {};
    const companyName = formData.companyname.value;
    const companyPros = formData.pros.value;
    const companyCons = formData.cons.value;
    const companyStar = document.getElementById("output").innerText;
    const companyData={
        companyName:companyName,
        companyPros : companyPros,
        companyCons : companyCons,
        companyStar : companyStar
    }
    axios.post('http://127.0.0.1:3000/review/add-reviews', companyData)
        .then(response => {
            console.log('Company Review data sent successfully:', response.data);
        })
        .catch(error => {
            console.error('Error sending review data:', error);
        });
});

document.getElementById('searchButton').addEventListener('click', function () {
    const searchCompany = document.getElementById('searchCompany').value;
    axios.get(`http://127.0.0.1:3000/review/get-reviews?companyname=${searchCompany}`)
        .then(response => {
            const companyInfo = response.data;
            document.getElementById("company-review").classList.add("displayInfo");
            document.getElementById("company-review").classList.remove("hiddenInfo");
            document.getElementById('companyName').innerText = companyInfo.companyname;
            document.getElementById('companyPros').innerText = companyInfo.pros;
            document.getElementById('companyCons').innerHTML = companyInfo.cons;
            document.getElementById('companyRatings').innerText = companyInfo.star;
        })
        .catch(error => {
            console.log('Error searching company:', error);
        });
});


// script.js

// To access the stars
let stars = 
	document.getElementsByClassName("star");
let output = 
	document.getElementById("output");

// Funtion to update rating
function handleRatings(n) {
	remove();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one";
		else if (n == 2) cls = "two";
		else if (n == 3) cls = "three";
		else if (n == 4) cls = "four";
		else if (n == 5) cls = "five";
		stars[i].className = "star " + cls;
	}
	output.innerText =  n ;
}

// To remove the pre-applied styling
function remove() {
	let i = 0;
	while (i < 5) {
		stars[i].className = "star";
		i++;
	}
}




