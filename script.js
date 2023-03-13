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
        this.p1 = [];
        this.p2 = [];
        this.hand1 = [];
        this.hand2 = [];
        this.half()
        this.draw()
        this.battle()
    }
 
    half() {
        let deck = new Deck();
        this.p1.push(...deck.cards.splice(0, 26));
        this.p2.push(...deck.cards.splice(0));
    }
    draw() {
        this.hand1.push(this.p1.shift());
        // console.log(this.hand1)
        this.hand2.push(this.p2.shift());
        // console.log(this.hand2)
    }
    war() {
        let warHand1 = this.p1.splice[0, 4]
        let warHand2 = this.p2.splice[0, 4]
        this.hand1.push(...warHand1)    
        this.hand2.push(...warHand2)    
        if (this.hand1[this.hand1.length-1].value > this.hand2[this.hand2.length-1].value) {
            console.log("p1 wins the war") 
            this.p1.push(...this.hand1, ...this.hand2)
        } else if (this.hand2[this.hand].value > this.hand1[4].value) {  
            console.log("p2 wins the war") 
            this.p2.push(...this.hand1, ...this.hand2)
        } else {

        }
    }
    battle() {
        if (this.hand1[0].value > this.hand2[0].value) {
            return (console.log("p1 wins round!") + this.p1.push(...this.hand1, ...this.hand2))
        } else if (this.hand2[0].value > this.hand1[0].value) {
            return (console.log("p2 wins round!") + this.p2.push(...this.hand1, ...this.hand2))
        } else {
            return this.war()
        }
            
    }

}
const game = new GameOfWar()
console.log(game)
console.log(game.p1.length)
console.log(game.p2.length)


