const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();

	const input = document.querySelector('#link');
	const link = input.value;
	const apiKey = 'SUA_API_KEY'; // Substitua pela sua chave da API do Bitly
	const endpoint = `https://api-ssl.bitly.com/v4/shorten?long_url=${link}`;

	fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${apiKey}`
		}
	})
		.then(response => response.json())
		.then(data => {
			const shortenedLink = data.link;
			console.log(shortenedLink);
			// Aqui você pode fazer alguma coisa com o link encurtado, como exibi-lo na página
		});
});
