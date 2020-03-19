const loginButton = document.getElementById('login_btn');
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

loginButton.addEventListener('click', (e) => {
	e.preventDefault();

	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	fetch('/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify({
			email,
			password,
		}),
	})
		.then((response) => response.json())
		.then((res) => {
			if (res.error) console.log('response', res);
			else {
				console.log(res);
			}
		})
		.catch((err) => console.log(err));
});
