let burger = document.querySelector("#burger")
let burgerX = document.querySelector("#burgerX")
let left = document.querySelector("#left")

// SHOW NAVBAR
burger.addEventListener("click", hideBurger)

function hideBurger() {
    showNavBar()
    burgerHideLine()
    if (burgerHideLine === true){
        burger.style.display = "none"
    }
}

function showNavBar () {
    if(window.innerWidth > 480){
        left.style.display = "flex"
        left.classList.add("maxWidthShow")
        left.classList.remove("maxWidthShowFull")
    }else {
        left.style.display = "table"
        left.style.position = "absolute"
        left.classList.remove("maxWidthShow")
        left.classList.add("maxWidthShowFull")

        burgerCreateX2.classList.remove("burgerCreateX2")
        burgerCreateX2.classList.add("burgerCreateX2Mini")
    }
}

function burgerHideLine() {
    let hideLine1 = document.querySelector("#line1")
    hideLine1.classList.add("burgerHideLine1")

    let hideLine2 = document.querySelector("#line2")
    hideLine2.classList.add("burgerHideLine2")

    let hideLine3 = document.querySelector("#line3")
    hideLine3.classList.add("burgerHideLine3")
}


// HIDE NAVBAR
burgerX.addEventListener("click", hideBurgerX)

function hideBurgerX() {
    hideNavBar()
    showBurgerAgaine()
    leftDisplayNone()
}

function hideNavBar() {
    left.classList.remove("maxWidthShow")
}

function minWidthHide(){
    left.classList.add("minWidthHide")
}

function leftDisplayNone() {
    left.style.display = "none"    
}

function showBurgerAgaine() {
    let hideLine1 = document.querySelector("#line1")
    hideLine1.classList.remove("burgerHideLine1")

    let hideLine2 = document.querySelector("#line2")
    hideLine2.classList.remove("burgerHideLine2")

    let hideLine3 = document.querySelector("#line3")
    hideLine3.classList.remove("burgerHideLine3")
}

// BURGER X ANIMATION
let burgerCreateX1 = document.querySelector("#line1X")
burgerCreateX1.classList.add("burgerCreateX1")

let burgerCreateX2 = document.querySelector("#line2X")
burgerCreateX2.classList.add("burgerCreateX2")

let burgerCreateX3 = document.querySelector("#line3X")
burgerCreateX3.classList.add("burgerCreateX3")


//FADE ANIMATION
let navLinks = querySelector("#navLinks")

function fadeAnimation() {
    navLinks.classList.add("fadeAnimation")
}

