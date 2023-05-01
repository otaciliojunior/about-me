// Selecionando elementos do DOM
const toggleButton = document.getElementById('toggle-button');
const animatedContainer = document.getElementById('animated-container');

// Adicionando evento de clique ao botão
toggleButton.addEventListener('click', function() {
	// Alternando classe no container animado para mostrar ou esconder
	animatedContainer.classList.toggle('open');
	// Alterando texto do botão de acordo com o estado do container
	if (animatedContainer.classList.contains('open')) {
		toggleButton.textContent = 'Fechar';
	} else {
		toggleButton.textContent = 'Abrir';
	}
});
