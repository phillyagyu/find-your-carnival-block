// Filtering by name
const filterElement = document.querySelector('header input')
const cards = document.querySelectorAll('.cards .card')

filterElement.addEventListener('input', filterCards)

function filterCards() {
  if(filterElement.value != '') {
    for(let card of cards) {
      let title = card.querySelector('h3')
      title = title.textContent.toLowerCase()
      let filterText = filterElement.value.toLowerCase()
      if(!title.includes(filterText)) {
        card.style.display = 'none'
      } else {
        card.style.display = 'block'
      }
    }
  } else {
    for(let card of cards) {
      card.style.display = 'block'
    }
  }
}

// Filtering by city
const filterSelect = document.querySelector('header select')
const optionsCache = document.querySelectorAll('select option')

filterSelect.addEventListener('click', filterCardsBySelect)

function filterCardsBySelect() {
  let citySelected = filterSelect.value
  for (let card of cards) {
    let cityId = card.getElementsByClassName('location')[0].id
    if(citySelected != 0) {
      if(cityId === citySelected) {
        card.style.display = 'block'
      } else {
        card.style.display = 'none'
      }
    } else {
      for(let card of cards) {
        card.style.display = 'block'
      }
    }
  }
}

// Adding no submit event
const form = document.querySelector('form')
form.addEventListener('submit', function(event) {
  event.preventDefault()
})
