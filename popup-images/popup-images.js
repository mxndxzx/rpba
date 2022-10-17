// Script for popping up images from a gallery or a carousel
// You got to play around with CSS classes. Those are detailed in popup-images.css

document.querySelectorAll('.image-container img').forEach(image => {
	image.onclick = () => {
		document.querySelector('.popup-image').style.display = 'block';
		document.querySelector('.popup-image img').src = image.getAttribute('src');
	};
});

document.querySelector('.popup-image span').onclick = () => {
	document.querySelector('.popup-image').style.display = 'none';
};
