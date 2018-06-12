function init() {
	// Buttons
	const nextButton = document.querySelector('.banner-next');
	const prevButton = document.querySelector('.banner-prev');
	
	// Actual image index
	let pictureIndex = 0;

	// Images list
	const imagesList = document.querySelectorAll('.banner-slides li');

	// Init layout settings
	const actualImage = imagesList[0];	
	imagesList[pictureIndex].classList.add('banner-slide--active');

	function prevElement(event) {
		pictureIndex--;
		
		if (pictureIndex >= 0) {
			imagesList[pictureIndex + 1].classList.remove('banner-slide--active');			
			imagesList[pictureIndex].classList.add('banner-slide--active');
		} else {
			imagesList[pictureIndex + 1].classList.remove('banner-slide--active');
			pictureIndex = imagesList.length - 1;
			imagesList[pictureIndex].classList.add('banner-slide--active');
		}			
	}

	function nextElement(event) {
		pictureIndex++;

		if (pictureIndex < imagesList.length) {
			imagesList[pictureIndex - 1].classList.remove('banner-slide--active');			
			imagesList[pictureIndex].classList.add('banner-slide--active');
		} else {
			imagesList[pictureIndex - 1].classList.remove('banner-slide--active');
			pictureIndex = 0;			
			imagesList[pictureIndex].classList.add('banner-slide--active');			
		}
	}

	nextButton.addEventListener('click', nextElement)
	prevButton.addEventListener('click', prevElement)

}

document.addEventListener('DOMContentLoaded', init);