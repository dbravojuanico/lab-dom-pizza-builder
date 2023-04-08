// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  //renderButtons();
  renderPrice();
}

let buttonPeperoni = document.querySelector('.btn.btn-pepperoni')
let buttonMusroms = document.querySelector('.btn.btn-mushrooms')
let buttonGreenPeppers = document.querySelector('.btn.btn-green-peppers')
let buttonWhiteSauce = document.querySelector('.btn.btn-sauce')
let buttonGlutenFreeCrust = document.querySelector('.btn.btn-crust')

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
      buttonPeperoni.classList.add("active")
    } else {
      onePep.style.visibility = 'hidden';
      buttonPeperoni.classList.remove("active")
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
      buttonMusroms.classList.add("active")
    } else {
      oneMush.style.visibility = 'hidden';
      buttonMusroms.classList.remove("active")
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPeper) => {
    if (state.greenPeppers) {
      oneGreenPeper.style.visibility = 'visible';
      buttonGreenPeppers.classList.add("active")
    } else {
      oneGreenPeper.style.visibility = 'hidden';
      buttonGreenPeppers.classList.remove("active")
    }
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white')
    buttonWhiteSauce.classList.add("active")
  } else {
    sauce.classList.remove('sauce-white')
    buttonWhiteSauce.classList.remove("active")
  }
}

function renderGlutenFreeCrust() {
  let crust =  document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free')
    buttonGlutenFreeCrust.classList.add("active")
  } else {
    crust.classList.remove('crust-gluten-free')
    buttonGlutenFreeCrust.classList.remove("active")
  }
}

//function renderButtons() {}

function renderPrice() {
  let peperoniTag = document.querySelector(".peperoni-tag")
  let mushromsTag = document.querySelector(".mushrooms-tag")
  let peppersTag = document.querySelector(".peppers-tag")
  let sauceTag = document.querySelector(".sauce-tag")
  let crustTag = document.querySelector(".crust-tag")
  let totalPrice = 10
  if(state.pepperoni) {
    peperoniTag.style.display = "block"
    totalPrice += 1
  } else {
    peperoniTag.style.display = "none"
  }
  if(state.mushrooms) {
    mushromsTag.style.display = "block"
    totalPrice += 1
  } else {
    mushromsTag.style.display = "none"
  }
  if(state.greenPeppers) {
    peppersTag.style.display = "block"
    totalPrice += 1
  } else {
    peppersTag.style.display = "none"
  }
  if(state.whiteSauce) {
    sauceTag.style.display = "block"
    totalPrice += 3
  } else {
    sauceTag.style.display = "none"
  }
  if(state.glutenFreeCrust) {
    crustTag.style.display = "block"
    totalPrice += 5
  } else {
    crustTag.style.display = "none"
  }
  document.querySelector(".total-price").innerText = `$${totalPrice}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

buttonPeperoni.addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
