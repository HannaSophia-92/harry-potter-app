
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
        <h2 class="list__characterName">${character.name}</h2>
        <img class="list__card-image" src="${character.image}"/> 
        <div>
        <p data-js="character-infos" hidden>Name: ${character.name}</p>
        </div>
        </button>
        
        `
        listElement.append(cardElement);

        const characterInfo = cardElement.querySelector('[data-js="character-infos"]')
        const listButton = cardElement.querySelector('[data-js="listButton"]')

        listButton.addEventListener('click', () => {
            characterInfo.toggleAttribute('hidden')
        })
    })
    }
}





export default cards