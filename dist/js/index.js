// Clothes Display

const clothes = [
    {
        id: 1,
        name: "Cotton Dress",
        price: 17.99,
        img: "/dist/img/dress.jpeg",
        type: 'dress',
        stars: 5,

    },
    {
        id: 2,
        name: "Cotton Dress",
        price: 17.99,
        img: "/dist/img/dress2.jpeg",
        type: 'dress',
        stars: 3.9,
    },
    {
        id: 3,
        name: "Cotton Dress",
        price: 17.99,
        img: "/dist/img/dress3.jpeg",
        type: 'dress',
        stars: 4.4,
    },
    {
        id: 4,
        name: "Bikini Top",
        price: 7.99,
        img: "/dist/img/bikini.jpeg",
        type: 'top',
        stars: 4.2,
    },
    {
        id: 5,
        name: "Cotton Blouse",
        price: 12.99,
        img: "/dist/img/blouse.jpeg",
        type: 'top',
        stars: 3.2,
    },
    {
        id: 6,
        name: "Hoodie",
        price: 27.99,
        img: "/dist/img/hoodie.jpeg",
        type: 'top',
        stars: 4.9,
    },
    {
        id: 7,
        name: "Jacket",
        price: 27.99,
        img: "/dist/img/jacket.jpeg",
        type: 'top',
        stars: 4,
    },
    {
        id: 8,
        name: "Pants",
        price: 15.99,
        img: "/dist/img/pants.jpeg",
        type: 'bottom',
        stars: 4.1,
    },
    {
        id: 9,
        name: "Pants",
        price: 15.99,
        img: "/dist/img/pants2.jpeg",
        type: 'bottom',
        stars: 3.8,
    },
    {
        id: 10,
        name: "Shorts",
        price: 15.99,
        img: "/dist/img/shorts.jpeg",
        type: 'bottom',
        stars: 4.6,
    },
    {
        id: 11,
        name: "Sweatshirt",
        price: 15.99,
        img: "/dist/img/sweatshirt.jpeg",
        type: 'top',
        stars: 3.1,
    },
    {
        id: 12,
        name: "Sweatshirt",
        price: 15.99,
        img: "/dist/img/sweatshirt2.jpeg",
        type: 'top',
        stars: 5,
    },
    {
        id: 13,
        name: "Top",
        price: 15.99,
        img: "/dist/img/top.jpeg",
        type: 'top',
        stars: 2.7,
    },
    {
        id: 14,
        name: "Top",
        price: 15.99,
        img: "/dist/img/top2.jpeg",
        type: 'top',
        stars: 4.2,
    },
    {
        id: 14,
        name: "Top",
        price: 15.99,
        img: "/dist/img/top3.jpeg",
        type: 'top',
        stars: 3.5,
    },
    {
        id: 15,
        name: "Top",
        price: 15.99,
        img: "/dist/img/top5.jpeg",
        type: 'top',
        stars: 4,
    },
    {
        id: 16,
        name: "Top",
        price: 15.99,
        img: "/dist/img/vest.jpeg",
        type: 'top',
        stars: 5,
    },
    {
        id: 18,
        name: "Pleated Skirt",
        price: 13.99,
        img: "/dist/img/skirt.jpeg",
        type: 'bottom',
        stars: 4.6,
    },
    {
        id: 19,
        name: "Cropped Sweatshirt",
        price: 23.99,
        img: "/dist/img/sweatshirt3.jpeg",
        type: 'top',
        stars: 4.9,
    },
    {
        id: 20,
        name: "Bodysuit",
        price: 23.99,
        img: "/dist/img/bodysuit.jpeg",
        type: 'top',
        stars: 4.1,
    },

]
window.addEventListener("DOMContentLoaded", () => {
    displayClothes(clothes);
    filterClothes(clothes);
    sortClothes(clothes);
})

// containers
const body = document.querySelector("body");
const clothesContainer = document.querySelector(".clothes");
const clothesDetails = document.querySelector(".clothes-details");

// Buttons
const filterBtns = document.querySelectorAll(".filter");
const sortBtns = document.querySelectorAll(".sort");


// SORT / FILTER TOGGLE
const sortBtn = document.querySelector(".sort-btn");
sortBtn.addEventListener("click", () => {

    const sortToggle = document.querySelector(".sort-toggle");
    const sortIcon = sortBtn.children[1];

    sortToggle.classList.toggle("open");
    sortIcon.classList.toggle("fa-chevron-down");
    sortIcon.classList.toggle("fa-chevron-up");
})

const filterBtn = document.querySelector(".filter-btn");
filterBtn.addEventListener("click", () => {
    const filterToggle = document.querySelector(".filter-toggle");
    const filterIcon = filterBtn.children[1];

    filterToggle.classList.toggle("open");
    filterIcon.classList.toggle("fa-chevron-down");
    filterIcon.classList.toggle("fa-chevron-up");
})


function displayClothes(items) {
    let displayClothes = items.map(item => {
        return `<div class="clothes-card">
        
        <div class="photo-wrapper">
        <img class="clothes-photo" src=${item.img} alt=${item.name}>
        <div class="overlay">
        <div class="details-btn"><a href="#">View</a></div>
        </div>
        </div>
        
        <div class="clothes-info flex flex-jc-sb">
        <div class="clothes-text">
        <p id="type">${item.name}</p>
        <p id="price">${item.price}</p>
        </div>
        <div class="clothes-icon"><i class="far fa-heart"></i></div>
            
        </div>       
    </div>`
    })
    displayClothes.join('');
    clothesContainer.innerHTML = displayClothes;

    const clothesCards = document.querySelectorAll(".clothes-card");
    clothesCards.forEach(card => card.addEventListener('click', (e) => {
        clothesDetails.classList.add('open');
        clothesDetails.innerHTML = `<div class="cross-icon">
        <i class="fas fa-times"></i>
    </div>
    <div class="details-container container">
        <div class="details-photo">
            <img src="/dist/img/hoodie.jpeg" alt="">
        </div>
        <div class="details-desc">
            <h2>Title</h2>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto odio voluptates corrupti.
                Exercitationem libero aspernatur aliquid nisi iste corporis quis!</p>
            <label for="size">Size:</label>

            <select id="size">
                <option value="volvo">Select Size</option>
                <option value="zero">0</option>
                <option value="two">2</option>
                <option value="four">4</option>
                <option value="six">6</option>
            </select>
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value="1" min="1" max="5">
            <button type="submit">Add To Cart</button>
        </div>
    </div>`;
        body.classList.add("no-scroll");
    }))
    addToFavorites();
}


function addToFavorites() {
    const heartIcons = document.querySelectorAll(".clothes-icon i");
    heartIcons.forEach(icon => icon.addEventListener('click', (e) => {
        e.target.classList.toggle("far");
        e.target.classList.toggle("fas");
    }))
}
function filterClothes(items) {

    filterBtns.forEach(btn => btn.addEventListener("click", () => {
        if (btn.innerText === "Tops") {
            let result = items.filter(item => item.type === "top");
            displayClothes(result);
        } else if (btn.innerText === "Bottoms") {
            let result = items.filter(item => item.type === "bottom");
            displayClothes(result);
        } else if (btn.innerText === "Dresses") {
            let result = items.filter(item => item.type === "dress");
            displayClothes(result);
        } else {
            displayClothes(clothes);
        }
    }))
}
function sortClothes(items) {

    sortBtns.forEach(btn => btn.addEventListener("click", () => {
        if (btn.innerText === "Trending") {
            let result = items.sort((item1, item2) => item2.stars - item1.stars);
            displayClothes(result);
        } else if (btn.innerText === "From Low to High") {
            let result = items.sort((item1, item2) => item1.price - item2.price);
            displayClothes(result);
            // filterClothes(result);
        } else if (btn.innerText === "From High to Low") {
            let result = items.sort((item1, item2) => item2.price - item1.price);
            displayClothes(result);
        } else {
            displayClothes(clothes);
        }
    }))
}



