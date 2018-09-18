// SMOOTH SCROLLING
let links = document.querySelectorAll('a[href^="#"]');

for (let item of links) {
	item.addEventListener('click', (e)=> {
		let hashValue = item.getAttribute('href');
		let target = document.querySelector(hashValue);
		target.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
		history.pushState(null, null, hashValue);
		e.preventDefault();
	})
}