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
        const listElement = document.createElement('ul');
        listElement.className = 'card__list';
        document.main.append(listElement);
    
    characters.forEach(character => {
        const cardElement = document.createElement('li');
        cardElement.className = 'card__element';

        cardElement.innerHTML = `
        <button data-js="listButton" class="list__button"> 
        <h2 class="list__characterName">${character.name}</h2>
        <img src="${character.image}"/> </button>
        
        `
        listElement.append(cardElement);
    })
    }
}





export default cards