// Clothes Display

const clothes = [
    {
        id: 1,
        name: "Cotton Dress",
        price: 17.99,
        img: "/dist/img/dress.jpeg",
        type: 'dress',
    },
    {
        id: 2,
        name: "Cotton Dress",
        price: 17.99,
        img: "/dist/img/dress2.jpeg",
        type: 'dress',
    },
    {
        id: 3,
        name: "Cotton Dress",
        price: 17.99,
        img: "/dist/img/dress3.jpeg",
        type: 'dress',
    },
    {
        id: 4,
        name: "Bikini Top",
        price: 7.99,
        img: "/dist/img/bikini.jpeg",
        type: 'top',
    },
    {
        id: 5,
        name: "Cotton Blouse",
        price: 12.99,
        img: "/dist/img/blouse.jpeg",
        type: 'top',
    },
    {
        id: 6,
        name: "Hoodie",
        price: 27.99,
        img: "/dist/img/hoodie.jpeg",
        type: 'top',
    },
    {
        id: 7,
        name: "Jacket",
        price: 27.99,
        img: "/dist/img/jacket.jpeg",
        type: 'top',
    },
    {
        id: 8,
        name: "Pants",
        price: 15.99,
        img: "/dist/img/pants.jpeg",
        type: 'bottom',
    },
    {
        id: 9,
        name: "Pants",
        price: 15.99,
        img: "/dist/img/pants2.jpeg",
        type: 'bottom',
    },
    {
        id: 10,
        name: "Shorts",
        price: 15.99,
        img: "/dist/img/shorts.jpeg",
        type: 'bottom',
    },
    {
        id: 11,
        name: "Sweatshirt",
        price: 15.99,
        img: "/dist/img/sweatshirt.jpeg",
        type: 'top',
    },
    {
        id: 12,
        name: "Sweatshirt",
        price: 15.99,
        img: "/dist/img/sweatshirt2.jpeg",
        type: 'top',
    },
    {
        id: 13,
        name: "Top",
        price: 15.99,
        img: "/dist/img/top.jpeg",
        type: 'top',
    },
    {
        id: 14,
        name: "Top",
        price: 15.99,
        img: "/dist/img/top2.jpeg",
        type: 'top',
    },
    {
        id: 14,
        name: "Top",
        price: 15.99,
        img: "/dist/img/top3.jpeg",
        type: 'top',
    },
    {
        id: 15,
        name: "Top",
        price: 15.99,
        img: "/dist/img/top5.jpeg",
        type: 'top',
    },
    {
        id: 16,
        name: "Top",
        price: 15.99,
        img: "/dist/img/vest.jpeg",
        type: 'top',
    },
]

const clothesContainer = document.querySelector(".clothes");
const filterBtns = document.querySelectorAll(".filter");

window.addEventListener("DOMContentLoaded", () => {
    displayClothes(clothes);
    filterClothes(clothes);
})

function displayClothes(items) {
    let displayClothes = items.map(item => {
        return `<div class="clothes-card">
        <img class="clothes-photo" src=${item.img} alt=${item.name}>
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
}

// SORT / FILTER TOGGLE

const sortBtn = document.querySelector(".sort-btn");
sortBtn.addEventListener("click", () => {
    const sortToggle = document.querySelector(".sort-toggle");
    sortToggle.classList.toggle("open");
})

const filterBtn = document.querySelector(".filter-btn");
filterBtn.addEventListener("click", () => {
    const filterToggle = document.querySelector(".filter-toggle");
    filterToggle.classList.toggle("open");
})


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