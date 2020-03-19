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
			if (res.error) alert('use valid email or password');
			else {
				if (res.message === 'logged in successfully') alert(res.message);
				else if (res.message === 'your email or password is incorrect')
					alert(res.message);
			}
		})
		.catch((err) => console.log(err));
});
