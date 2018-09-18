// SMOOTH SCROLLING

// let links = document.querySelectorAll('a[href^="#"]');
let links = document.querySelectorAll('.navlink');

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

let navbar = document.querySelector('nav');
console.log(navbar);


window.onscroll = function(){
	console.log(window.pageYOffset || document.documentElement.scrollTop);

}



 // return window.pageYOffset || document.documentElement.scrollTop;