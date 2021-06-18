// AD BANNER

const banner = document.getElementById("banner");

const bannerDiv = document.createElement("div");
bannerDiv.classList.add("banner", "container", "flex", "flex-jc-c", "flex-ai-c");
const bannerAd = document.createElement("h2");
bannerAd.innerText = "Summer Sale: Up to 50% off online & in stores";
bannerDiv.appendChild(bannerAd);
banner.appendChild(bannerDiv);