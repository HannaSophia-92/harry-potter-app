function cards() {
    async function fetchPeople(){
        try{
            const response = await fetch('http://hp-api.herokuapp.com/api/characters');
            const data = await response.json();
            console.log(data);
        }
        catch(error) { console.log(error)
        }
    }
}


export default cards