// AD BANNER

const banner = document.getElementById("banner");

const bannerDiv = document.createElement("div");
bannerDiv.classList.add("banner", "container", "flex", "flex-jc-c", "flex-ai-c");
const bannerAd = document.createElement("h2");
bannerAd.innerText = "Summer Sale: Up to 50% off online & in stores";
bannerDiv.appendChild(bannerAd);
banner.appendChild(bannerDiv);

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
    }
]

const clothesContainer = document.querySelector(".clothes");

window.addEventListener("DOMContentLoaded", () => {
    displayClothes(clothes);
    // filterClothes();
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