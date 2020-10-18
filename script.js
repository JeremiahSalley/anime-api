// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible
// Define our query variables and values that will be used in the query request

//meliodas id = 72921,, elizabeth id = 72923,, ban id = b77605,, diane id = n74653,, king id = 83801
//gowther id = 88823,, merlin id = 89180,, escanor id = b90202,, hawk id = n86683

class Character {
    constructor(firstName, lastName, image, description) {
        this.firstName = firstName
        this.lastName = lastName
        this.image = image
        this.description = description
    }
}
let characters = []
async function seven() {
    const variables = [72921, 72923, 77605, 74653, 83801, 88823, 89180, 90202, 86683]
    for (let i = 0; i < variables.length; i++) {

        let character = `
    {
        Character(id: ${variables[i]}) {
            image {
                large 
            }
            name {
                first
                last
            }
            description 
    }}`;



        // Define the config we'll need for our Api request
        let url = 'https://graphql.anilist.co',

            options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: character
                    // variables: variables[i]
                })
            };

        // Make the HTTP Api request
        const response = await fetch(url, options).then(handleResponse)
            .then(handleData)
            .catch(handleError);

        function handleResponse(response) {
            return response.json().then(function (json) {
                return response.ok ? json : Promise.reject(json);
            });
        }

        function handleData(data) {
            let charData = new Character(data.data.Character.name.first, data.data.Character.name.last, data.data.Character.image, data.data.Character.description)
            // characters.push(charData)
            characters = [...characters, charData]
            // let sirMeliodas = document.querySelector(".sir-meliodas")
            // sirMeliodas.style.backgroundImage = `url('${characters[0].image.large}')`
            // console.log(characters)
            // console.log(characters.length)
            // console.log(data)
        }

        function handleError(error) {
            // alert('Error, check console');
            console.error(error);
        }


    }
    console.log(characters)
    let sirMeliodas = document.querySelector(".sir-meliodas")
    sirMeliodas.style.backgroundImage = `url('${characters[0].image.large}')`

    let elizabethLiones = document.querySelector(".elizabeth-liones")
    elizabethLiones.style.backgroundImage = `url('${characters[1].image.large}')`

    let ban = document.querySelector(".ban")
    ban.style.backgroundImage = `url('${characters[2].image.large}')`

    let diane = document.querySelector(".diane")
    diane.style.backgroundImage = `url('${characters[3].image.large}')`

    let king = document.querySelector(".king")
    king.style.backgroundImage = `url('${characters[4].image.large}')`

    let gowther = document.querySelector(".gowther")
    gowther.style.backgroundImage = `url('${characters[5].image.large}')`

    let merlin = document.querySelector(".merlin")
    merlin.style.backgroundImage = `url('${characters[6].image.large}')`

    let escanor = document.querySelector(".escanor")
    escanor.style.backgroundImage = `url('${characters[7].image.large}')`

    let hawk = document.querySelector(".hawk")
    hawk.style.backgroundImage = `url('${characters[8].image.large}')`

    let modal = document.querySelector(".modal");

    firstRow = document.querySelector(".first-img-row")

    let characterDescription = document.querySelector("#characterInfo")

    sirMeliodas.addEventListener("click", function () {
        modal.classList.toggle("show-modal");
        sirMeliodasContent()
        // modal.style.display = "block";
    })
    elizabethLiones.addEventListener("click", function () {
        modal.classList.toggle("show-modal");
        elizabethLionesContent()
        // modal.style.display = "block";
    })
    ban.addEventListener("click", function () {
        modal.classList.toggle("show-modal");
        banContent()
        // modal.style.display = "block";
    })
    diane.addEventListener("click", function () {
        modal.classList.toggle("show-modal");
        dianeContent()
        // modal.style.display = "block";
    })
    king.addEventListener("click", function () {
        modal.classList.toggle("show-modal");
        kingContent()
        // modal.style.display = "block";
    })
    gowther.addEventListener("click", function () {
        modal.classList.toggle("show-modal");
        gowtherContent()
        // modal.style.display = "block"; 
    })
    merlin.addEventListener("click", function () {
        modal.classList.toggle("show-modal");
        merlinContent()
        // modal.style.display = "block";
    })
    escanor.addEventListener("click", function () {
        modal.classList.toggle("show-modal");
        escanorContent()
        // modal.style.display = "block";
    })
    hawk.addEventListener("click", function () {
        modal.classList.toggle("show-modal");
        hawkContent()
        // modal.style.display = "block";
    })



    function sirMeliodasContent() {
        characterDescription.innerText = `${characters[0].description}`
    }
    function elizabethLionesContent() {
        characterDescription.innerText = `${characters[1].description}`
    }

    function banContent() {
        characterDescription.innerText = `${characters[2].description}`
    }

    function dianeContent() {
        characterDescription.innerText = `${characters[3].description}`
    }
    function kingContent() {
        characterDescription.innerText = `${characters[4].description}`
    }
    function gowtherContent() {
        characterDescription.innerText = `${characters[5].description}`
    }
    function merlinContent() {
        characterDescription.innerText = `${characters[6].description}`
    }
    function escanorContent() {
        characterDescription.innerText = `${characters[7].description}`
    }
    function hawkContent() {
        characterDescription.innerText = `${characters[8].description}`
    }

    let sirList = document.querySelector(".sir2")
    sirList.addEventListener("click",function(){
        modal.classList.toggle("show-modal");
        sirMeliodasContent()
    })

    let elizabethList = document.querySelector(".elizabeth2")
    elizabethList.addEventListener("click",function(){
        modal.classList.toggle("show-modal");
        elizabethLionesContent()
    })

    let banLlist = document.querySelector(".ban2")
    banLlist.addEventListener("click",function(){
        modal.classList.toggle("show-modal")
        banContent()
    })


    let hawkList = document.querySelector(".hawk2")
    hawkList.addEventListener("click", function () {
        modal.classList.toggle("show-modal");
        hawkContent()
    })

    let dianeList = document.querySelector(".diane2")
    dianeList.addEventListener("click",function(){
        modal.classList.toggle("show-modal")
        dianeContent()
    })

    let kingList = document.querySelector(".king2")
    kingList.addEventListener("click",function(){
        modal.classList.toggle("show-modal")
        kingContent()
    })

    let gowtherList = document.querySelector(".gowther2")
    gowtherList.addEventListener("click",function(){
        modal.classList.toggle("show-modal")
        gowtherContent()
    })

    let merlinList = document.querySelector(".merlin2")
    merlinList.addEventListener("click",function(){
        modal.classList.toggle("show-modal")
        merlinContent()
    })

    let escanorList = document.querySelector(".escanor2")
    escanorList.addEventListener("click",function(){
        modal.classList.toggle("show-modal")
        escanorContent()
    })





}
// let hawkList = document.querySelector(".hawk2")
// hawkList.addEventListener("click",function(){
//     modal.classList.toggle("show-modal");
//     hawkContent()
// })
seven()




let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");



console.log(characters)





