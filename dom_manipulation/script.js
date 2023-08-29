const container = document.querySelector('#container');
const controls = document.querySelector('.controls');
console.dir(container.firstElementChild); // select display
console.dir(controls.previousElementSibling); // select controls

// Create element
const div = document.createElement('div');

// assign class
div.classList.add('new')

// Append element
container.appendChild(div)

// add new p
const text = document.createElement("p");
text.classList.add("text")
text.textContent = "I\'m red"
text.style.cssText = "color: yellow"

container.appendChild(text)

const blueHeading = document.createElement("h3");
blueHeading.classList.add("blue")
blueHeading.textContent = "I am a blue h3!"
blueHeading.style.color = "pink"

container.appendChild(blueHeading)

// add div > h1 + p
const pinkbg = document.createElement("div")
pinkbg.setAttribute('style', 'background: orange; color: black')

const h1 = document.createElement("h1")
h1.textContent = "I am inside the div"

const p = document.createElement("p")
p.textContent = "Me TOO!"

pinkbg.appendChild(h1)
pinkbg.appendChild(p)
container.appendChild(pinkbg)

/* Events */

const btn = document.querySelector("#btn")

// method 1
// btn.onclick = () => alert ("Heyyy");

// method 2
// btn.addEventListener('click', () => { 
//     alert("ahoy")
// })

// btn.addEventListener('click', function (e) {
//     console.log(e.target);
//   });

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

// method 3
// function alertMsg() {
//     alert("WOOOHOOO");
// }

// btn.addEventListener('click', alertMsg)
