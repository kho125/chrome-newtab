const searchInput = document.getElementById("search-input")

const showSearchResult =() => {
    let searchWord = searchInput.value
    window.location.href = `https://www.google.com/search?q=${searchWord}`
    searchWord=""
}

const enterkey = (event) => {
    if(event.code === "Enter"){
        showSearchResult()
    }
}
searchInput.addEventListener("keypress", (event) => {
    enterkey(event)
})