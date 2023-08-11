document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.Header__burger');
	const jsBurger = document.querySelector('.jsBurger');
	const html = document.getElementsByTagName('html');
	const body = document.getElementsByTagName('body');
	const menu = document.querySelector(".Header__menu");
	const content = document.querySelector(".Header__content");
	const btns = document.querySelector(".Header__right");
	const w = window.innerWidth;
	const phone = document.querySelector(".Header__phone");
	const icon = phone.querySelectorAll("path");

	if (burger) {
		burger.addEventListener('click', function () {
			jsBurger.classList.toggle('jsBurgerOpen');
			menu.classList.toggle('active');
			html[0].classList.toggle('lock');
			body[0].classList.toggle('lock');
		});
	}
	if(w<1301){
		menu.classList.add('container')
	}else{
		menu.classList.remove('container')
	}

	if(w<768){
		menu.append(btns)
		for(let i = 0; i < icon.length; i++){
			icon[0].setAttribute('d','M0.711532 59.5L21.962 0.5H329.288L308.038 59.5H0.711532Z')
		}
	}else{
		content.append(btns)
	}

	window.addEventListener('resize',()=>{
		const menu = document.querySelector(".Header__menu");
		const content = document.querySelector(".Header__content");
		const btns = document.querySelector(".Header__right");
		const w = window.innerWidth;
		if(w<768){
			menu.append(btns)
		}else{
			content.append(btns)
		}
		if(w<1301){
			menu.classList.add('container')
		}else{
			menu.classList.remove('container')
		}
	})
})
