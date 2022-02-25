
function cards() {
    fetchPeople();
    async function fetchPeople(){
        try{
            const response = await fetch('http://hp-api.herokuapp.com/api/characters');
            const data = await response.json();
            console.log(data);
            createCharacterList(data);
        }
        catch(error) { console.log(error)
        }
    }

    function createCharacterList(characters) {
        const main = document.querySelector('[data-js="main"]')
        const listElement = document.createElement('ul');
        listElement.className = 'main__list';
        main.append(listElement);
    
    characters.forEach(character => {
        const cardElement = document.createElement('li');
        cardElement.className = 'card__element';

        cardElement.innerHTML = `
        <button data-js="listButton" class="list__button"> 
        <div data-js="character" class="list__character">
        <h2 class="list__characterName">${character.name}</h2>
        <img data-js="character__image" class="list__card-image" src="${character.image}"/> 
        </div>
        <div data-js="character-infos" hidden>
        <ul class=> 
        <li> Date of Birth: ${character.dateOfBirth}</li>
        <li> House: ${character.house}</li>
        <li> Wizard: ${character.wizard}</li>
        <li> Patronus: ${character.patronus}</li>
        <li> Actor: ${character.actor}</li>
        </ul>
        </div>
        </button>
        
        `
        listElement.append(cardElement);

        const characterInfo = cardElement.querySelector('[data-js="character-infos"]')
        const listButton = cardElement.querySelector('[data-js="listButton"]')
        const characterHeader = cardElement.querySelector('[data-js="character"]')
        const characterImage = cardElement.querySelector('[data-js="character__image"]')

        listButton.addEventListener('click', () => {
            listButton.classList.toggle('card__element--active')
            characterHeader.classList.toggle('list__character--active')
            characterImage.classList.toggle('list__card-image--active')
            characterImage.classList.toggle('list__card-image')
            characterInfo.toggleAttribute('hidden')

            
        })
    })
    }
}





export default cards