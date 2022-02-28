function cards() {

  let characters

  fetchPeople();
  async function fetchPeople() {
    try {
      const response = await fetch(
        'http://hp-api.herokuapp.com/api/characters'
      );
      const data = await response.json();
      characters = data;
      createCharacterList(characters);
    } catch (error) {
      console.log(error);
    }
  }

  
  const filterForm = document.querySelector('[data-js="house-list"]')
  let currentFilter = 'Hogwarts'

  filterForm.addEventListener('change', () => {
    currentFilter = filterForm.elements['tag-filter'].value;
    createCharacterList(characters);
  })

  function createCharacterList(characters) {
const container = document.querySelector('[data-js="cards-container"]')

    container.innerHTML = '';
    
    characters
    .filter(character => character.house.includes(currentFilter) || currentFilter === 'Hogwarts')
      .forEach(character => {
        const cardElement = document.createElement('li');
        cardElement.className = 'card__element';
        cardElement.innerHTML = `
        <button class="cards__bookmark-button ${character.isBookmarked ? 'cards__bookmark-button--active' : ''} " data-js="bookmark" aria-label="bookmark"><i class="fas fa-bookmark fa-2x"></i></button>  
        <div data-js="listButton" class="cards__container-button"> 
          <div data-js="character">
              <img data-js="character__image" class="cards__container-image" aria-label="picture of" src="${character.image}"/> 
              <h2 class="cards__characterName">${character.name}</h2>
          </div>
          <div data-js="character-infos" class='cards__characters__info__container' hidden>
          <ul  class="cards__character-infos"> 
              <li> Date of Birth: ${character.dateOfBirth}</li>
              <li> House: ${character.house}</li>
              <li> Wizard: ${character.wizard}</li>
              <li> Patronus: ${character.patronus}</li>
              <li> Actor: ${character.actor}</li>
          </ul>
          </div>
          </div>          
          `;
        container.append(cardElement);

        const characterInfo = cardElement.querySelector(
          '[data-js="character-infos"]'
        );
        const listButton = cardElement.querySelector('[data-js="listButton"]');
        const characterHeader = cardElement.querySelector(
          '[data-js="character"]'
        );
        const characterImage = cardElement.querySelector(
          '[data-js="character__image"]'
        );
  
        listButton.addEventListener('click', () => {
          listButton.classList.toggle('card__element--active');
          characterHeader.classList.toggle('cards__character--active');
          characterImage.classList.toggle('cards__image--active');
          characterImage.classList.toggle('cards__container-image');
          characterInfo.toggleAttribute('hidden');
        });
        const bookmark = cardElement.querySelector('[data-js="bookmark"]');
          bookmark.addEventListener('click', () => {
          character.isBookmarked = !character.isBookmarked;
          bookmark.classList.toggle('cards__bookmark-button--active');
        });
    });
    
  }
}

export default cards;
