const restaurants = [`https://www.spoonbillrestaurant.com/`, `https://pamplonatapas.com/`, `https://tcoons.com/`, `http://www.oldetymegrocery.com/`, `https://www.popspoboys.com/`, `http://lagneauxsseafood.com/`, `https://prejeans.com/`, `https://www.judiceinn.com/`, `https://broaddusburger.com/`];
const foodButton = document.querySelector(`#food-button`);

foodButton.addEventListener(`click`, () => {
    const random = Math.floor(Math.random() * restaurants.length);
    window.open(restaurants[random], `_blank`);
})