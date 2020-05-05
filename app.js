document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'image1',
            img: 'images/image1.png'
        },
        {
            name: 'image2',
            img: 'images/image2.png'
        },

        {
            name: 'image3',
            img: 'images/image3.png'
        },
        {
            name: 'image4',
            img: 'images/image4.png'
        },
        {
            name: 'image5',
            img: 'images/image5.png'
        },
        {
            name: 'image6',
            img: 'images/image6.png'
        },
        {
            name: 'image1',
            img: 'images/image1.png'
        },
        {
            name: 'image2',
            img: 'images/image2.png'
        },
        {
            name: 'image3',
            img: 'images/image3.png'
        },
        {
            name: 'image4',
            img: 'images/image4.png'
        },
        {
            name: 'image5',
            img: 'images/image5.png'
        },
        {
            name: 'image6',
            img: 'images/image6.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())
    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []


    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank2.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank2.png')
            cards[optionTwoId].setAttribute('src', 'images/blank2.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! testing'
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})