const inputElement = document.getElementById('search-input')
const searchButton = document.querySelector('button')
// const search = document.getElementsByClassName('search')

searchButton.addEventListener('click', function (event) {
    inputElement.classList.toggle('active');
    // input.focus()
})
