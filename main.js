const slideList = [{
        img: "italy.jpg",
        text: "Italy"

    }, {
        img: "japan.jpg",
        text: "Japan"
    }, {
        img: "Hungary.jpg",
        text: "Hungary"
    },
    {
        img: "France.jpg",
        text: "France"
    },
    {
        img: "Czech.jpg",
        text: "Czech Republic"
    },
    {
        img: "USA.jpg",
        text: "USA"
    }
];

const imgHtml = document.querySelector("img")
const h1 = document.querySelector("h1")
const dots = [...document.querySelectorAll(".dots span")]


// Interfejs
const time = 4000;
let active = 0;


// Implementacja
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active");
    dots[active].classList.add("active")
}


const changePhoto = () => {
    active++;
    if (active === slideList.length) {
        active = 0
    }
    imgHtml.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}


let indexInterval = setInterval(changePhoto, time)

const keyChangeSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval)

        e.keyCode == 37 ? active-- : active++;

        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }

        imgHtml.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot()
        indexInterval = setInterval(changePhoto, time)
    }
}

window.addEventListener('keydown', keyChangeSlide)