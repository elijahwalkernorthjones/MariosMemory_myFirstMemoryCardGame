document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: '1UP!',
            img: 'pngs/1UP!.png'
        },
        {
            name: '1UP!',
            img: 'pngs/1UP!.png'
        },
        {
            name: 'evilMushroom',
            img: 'pngs/evilMushroom.png'
        },
        {
            name: 'evilMushroom',
            img: 'pngs/evilMushroom.png'
        },
        {
            name: 'Goomba!',
            img: 'pngs/Goomba.png'
        },
        {
            name: 'Goomba!',
            img: 'pngs/Goomba.png'
        },
        {
            name: 'Luigi!',
            img: 'pngs/Luigi.png'
        },
        {
            name: 'Luigi!',
            img: 'pngs/Luigi.png'
        },
        {
            name: 'magicMushroom',
            img: 'pngs/magicMushroom.png'
        },
        {
            name: 'magicMushroom',
            img: 'pngs/magicMushroom.png'
        },
        {
            name: 'Mario',
            img: 'pngs/Mario.png'
        }, 
        {
            name: 'Mario',
            img: 'pngs/Mario.png'
        }, 
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    // create your board
    
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            let card = document.createElement('img')
            card.setAttribute('src', 'pngs/backOfCard.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    
    // check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]){
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'pngs/BLANK.png');
            cards[optionTwoId].setAttribute('src', 'pngs/BLANK.png');
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'pngs/backOfCard.png')
            cards[optionTwoId].setAttribute('src', 'pngs/backOfCard.png')
            // alert('Sorry, try again.')
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }


    //flip your card
    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 650)
        }
    }


    // restart button

 document.querySelector('#restartButton').onclick = function(){
    document.querySelector('#board').innerHTML = '';
    document.querySelector('#result').innerHTML = '';
    cardsWon = [];
    createBoard()
 }

    
    createBoard()










})

