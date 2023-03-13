class Card {
    constructor (suit, rank, value) {
        this.suit=suit;
        this.rank=rank;
        this.value=value;
    }    
}

class Deck {
    constructor () {
        this.cards =[]
        this.createDeck()
    }
    createDeck() {
        let suits = ['hearts', 'spades', 'clubs','diamonds']
        let ranks = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace']
        for (let i = 0; i < suits.length; i++){
            for (let j=0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], j + 2))
            }
        }

        this.shuffle()
    }
    shuffle(){
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random())
    }
}    

class GameOfWar {
    constructor () {
        this.p1 = []
        this.p2 = []
        this.hand1 = []
        this.hand2 = []
        this.half()
        this.draw()
    }

    half() {
        let deck = new Deck()
        this.p1.push(...deck.cards.splice(0, 26))
        this.p2.push(...deck.cards.splice(0))
    }
    draw() {
        this.hand1.pop(this.p1)
        this.hand2.pop(this.p2)
    }

}
const game = new GameOfWar()
console.log(game)
console.log(game.p1.length)
console.log(game.p2.length)


