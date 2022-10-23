const btn = document.querySelector('.btn');
const regModal = document.querySelector('.modal-register');

btn.addEventListener('click', showModal);

function showModal() {
	regModal.style.display = 'block';
	btn.setAttribute('disabled', 'disabled');
	btn.style.transition = "unset";
	btn.style.cursor = "not-allowed";
	btn.style.backgroundColor = "#8d8d8d";
}