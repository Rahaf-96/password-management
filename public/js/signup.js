const signupButton = document.getElementById('signup');
const container = document.getElementById('container');
const errorMessage = document.createElement('div');

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
		.then((res) => {
			if (res.error) {
				errorMessage.innerHTML = 'make sure your email and password are valid';
				errorMessage.style.color = 'red';
				container.appendChild(errorMessage);
			} else {
				const welcomeMessage = document.createElement('div');
				welcomeMessage.innerHTML = 'Thanks for signing up ' + res.username;
				welcomeMessage.classList.add('welcome-message');
				container.appendChild(welcomeMessage);
				const loginButton = document.createElement('button');
				loginButton.innerHTML = 'Press Here to Log in!';
				loginButton.classList.add('login_button');
				loginButton.addEventListener('click', () => {
					window.location = '/';
				});
				welcomeMessage.appendChild(loginButton);
			}
		})
		.catch((err) => console.log(err));
});
