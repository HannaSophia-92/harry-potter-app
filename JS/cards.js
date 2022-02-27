function cards() {
  fetchPeople();
  async function fetchPeople() {
    try {
      const response = await fetch(
        'http://hp-api.herokuapp.com/api/characters'
      );
      const Hogwarts = await response.json();
      console.log(Hogwarts);
      createCharacterList(Hogwarts);
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
      .filter(character => character.house.includes(currentFilter) || currentFilter === 'Hogwarts')
      .forEach(character => {
        const cardElement = document.createElement('li');
        cardElement.className = 'card__element';
console.log(character.house.includes(currentFilter))
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

// const gryffindor = document.querySelector('[data-js="gryffindor"]')
// const ravenclaw = document.querySelector('[data-js="ravenclaw"]')
// const hogwarts = document.querySelector('[data-js="hogwarts"]')
// const hufflepuff = document.querySelector('[data-js="hufflepuff"]')
// const slytherin = document.querySelector('[data-js="slytherin"]')
// const listElement = document.querySelector('[data-js="cards__container-list"]')
// let currentFilter = 'hogwarts'


// const houseList = document.querySelector('[data-js="house-list"]')
// houseList.addEventListener('click', () => {
//   currentFilter = gryffindor.value;
//   renderGryffindor();
// })


// renderGryffindor();

// function renderGryffindor(characters) {
//   //listElement.innerHTML = '';
//   characters
//      .filter(character => character.house.includes(currentFilter) || currentFilter === 'hogwarts')
//      .forEach(character => {
//        cardElement.innerHTML = `
//        <button data-js="listButton" class="cards__container-button"> 
//         <div data-js="character">
//            <img data-js="character__image" class="cards__container-image" aria-label="picture of" src="${character.image}"/> 
//            <h2 class="cards__characterName">${character.name}</h2>
//         </div>
//        <div data-js="character-infos" class="cards__character-infos-container" hidden>
//        <ul class="cards__character-infos"> 
//            <li> Date of Birth: ${character.dateOfBirth}</li>
//            <li> House: ${character.house}</li>
//            <li> Wizard: ${character.wizard}</li>
//            <li> Patronus: ${character.patronus}</li>
//            <li> Actor: ${character.actor}</li>
//        </ul>
//        </div>
//        </button>
//        `;
//       listElement.append(cardElement);
//     })
// }
}

export default cards;
