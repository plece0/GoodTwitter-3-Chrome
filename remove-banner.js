let topBannerContainer = document.getElementById("banners");
if (topBannerContainer !== null) {
    topBannerContainer.classList.add("hidden")
}


let topSpacerBar = document.getElementsByClassName("topbar-spacer");
if (topSpacerBar !== null && topSpacerBar[0] !== undefined) {
    topSpacerBar[0].style.paddingTop = "50px";
}


let searchWarningContainer = document.getElementsByClassName("BannersContainer");
if (searchWarningContainer !== null && searchWarningContainer[0] !== undefined) {
    searchWarningContainer[0].classList.add("hidden");
}


let searchObserver = new MutationObserver(mutations => {
    let searchWarningContainer = document.getElementsByClassName("BannersContainer");
    if (searchWarningContainer !== null && searchWarningContainer[0] !== undefined) {
        searchWarningContainer[0].classList.add("hidden");
        searchObserver.disconnect();
    }
});
searchObserver.observe(document.body, {childList: true, subtree: true});
