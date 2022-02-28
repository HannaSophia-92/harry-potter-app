function cards() {
  fetchPeople();
  async function fetchPeople() {
    try {
      const response = await fetch(
        'http://hp-api.herokuapp.com/api/characters'
      );
      const hogwarts = await response.json();
      createCharacterList(hogwarts);
    } catch (error) {
      console.log(error);
    }
  }

  
  const filterForm = document.querySelector('[data-js="house-list"]')
  let currentFilter = 'Hogwarts'

  let apiUrl = 'http://hp-api.herokuapp.com/api/characters';

  fetch(apiUrl)
    .then(response => response.json())
    .then(characters => createCharacterList(characters));


  filterForm.addEventListener('change', () => {
    currentFilter = filterForm.elements['tag-filter'].value;
    createCharacterList(characters);
  })

  function createCharacterList(characters) {
    const main = document.querySelector('[data-js="main"]');
    const listElement = document.createElement('ul');
    listElement.className = 'cards__container-list';
    listElement.setAttribute("data-js", "cards__container-list");
    main.append(listElement);



    listElement.innerHTML = '';
    characters
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
          
          <ul data-js="character-infos" class="cards__character-infos" hidden> 
              <li> Date of Birth: ${character.dateOfBirth}</li>
              <li> House: ${character.house}</li>
              <li> Wizard: ${character.wizard}</li>
              <li> Patronus: ${character.patronus}</li>
              <li> Actor: ${character.actor}</li>
          </ul>
          
          </div>          
          `;
        listElement.append(cardElement);




      

      
    });
    
  }
}

export default cards;
