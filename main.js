const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
	const card = cards[i];
	card.addEventListener('mousemove', startRotate);
	card.addEventListener('mouseout', stopRotate);
}

function startRotate(e) {
	const cardItem = this.querySelector('.card-item');
	const halfHeight = cardItem.offsetHeight / 2;
	const HalfWidth = cardItem.offsetWidth / 2;
	cardItem.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (e.offsetX - HalfWidth) / 5 + 'deg)';
}

function stopRotate(e) {
	const cardItem = this.querySelector('.card-item');
	cardItem.style.transform = 'rotate(0)';
}