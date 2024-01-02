const flavor = [
    {
        img: "./Image/design/svg1.png"
    },

    {
        img: "./Image/design/svg2.png"
    },

    {
        img: "./Image/design/svg3.png"
    },

    {
        img: "./Image/design/svg4.png"
    }
]

const pizzaWheel = document.getElementById("pizzaWheel");
const pizzaListItems = document.querySelectorAll("#pizzaList li");
const flavorContainer = document.querySelector(".flavor"); // Assuming the container has the class 'flavor'


const svg= document.querySelector("#svg")

function rotateWheel(deg) {
    pizzaWheel.style.transform = `rotate(${deg}deg)`;
}

pizzaListItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        const angle = (index * -1) * 90; // Each pizza is positioned at 90-degree intervals
        rotateWheel(angle);

        // Scroll the entire flavor container to show the corresponding flavor image with smooth scrolling
        const flavorImageHeight = flavorContainer.clientHeight;
        flavorContainer.scrollTo({
            top: index * flavorImageHeight,
            behavior: 'smooth'
        });

        svg.src= flavor[index].img;
    });
});
