function cards() {
  fetchPeople();
  async function fetchPeople() {
    try {
      const response = await fetch(
        'http://hp-api.herokuapp.com/api/characters'
      );
      const data = await response.json();
      console.log(data);
      createCharacterList(data);
    } catch (error) {
      console.log(error);
    }
  }

  function createCharacterList(characters) {
    const main = document.querySelector('[data-js="main"]');
    const listElement = document.createElement('ul');
    listElement.className = 'cards__container-list';
    main.append(listElement);

    characters.forEach(character => {
      const cardElement = document.createElement('li');
      cardElement.className = 'card__element';

      cardElement.innerHTML = `
        <button data-js="listButton" class="cards__container-button"> 
         <div data-js="character">
            <img data-js="character__image" class="cards__container-image" aria-label="picture of" src="${character.image}"/> 
            <h2 class="cards__characterName">${character.name}</h2>
         </div>
        <div data-js="character-infos" class="cards__character-infos-container" hidden>
        <ul class="cards__character-infos"> 
            <li> Date of Birth: ${character.dateOfBirth}</li>
            <li> House: ${character.house}</li>
            <li> Wizard: ${character.wizard}</li>
            <li> Patronus: ${character.patronus}</li>
            <li> Actor: ${character.actor}</li>
        </ul>
        </div>
        </button>
        
        `;
      listElement.append(cardElement);

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
    });
  }
}

export default cards;
