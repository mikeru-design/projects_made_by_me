const domElements = {
  searchDrinksForm: searchForm,
}

export default searchDrinks = (e) => {
  e.preventDefault()

  const searchValue = domElements.searchDrinksForm.searchInput.value.toLowerCase()
  const drinks = document.querySelectorAll('.drink')

  drinks.forEach( drink => {
    const drinkText = drink.textContent.toLowerCase()
    if ( !drinkText.includes(searchValue)) {
      drink.classList.add('hide')
    } else if ( drinkText.includes(searchValue)){
      drink.classList.remove('hide')
    }
  })
}