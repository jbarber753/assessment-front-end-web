console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Form was successfully submitted!`);
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector(`img`).addEventListener(`mouseover`, () => alert(`You're a cool cat`))