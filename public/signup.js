const signupButton = document.getElementById('signup');

signupButton.addEventListener('click', (e) => {
	e.preventDefault();

	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const verifiedPassword = document.getElementById('verifiedpassword').value;
	fetch('/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},

		body: JSON.stringify({
			username,
			email,
			password,
			verifiedPassword,
		}),
	})
		.then((response) => response.json())
		.then((res) => console.log('response', res.error.details[0].message))
		.catch((err) => console.log(err));
});
