document.getElementById('myForm').addEventListener( 'submit' , function(a) {
	
	a.preventDefault();

	let f = document.getElementById('fname').value
	let l = document.getElementById('lname').value
	let p = document.getElementById('pno').value
	let e = document.getElementById('gmail').value

	alert(
		`First Name: ${f} ` +
		`Last Name: ${l} ` +
		`Phone Number: ${p} ` +
		`Email ID: ${e} ` 
	);
	
});
