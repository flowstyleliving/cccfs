// OBJECTS
var deck = [];

function Card(value, suit, name) {
  this.val = value,
  this.suit = suit,
  this.name = name
}

var Deck = {
  deck: [],
  values: "values",
  suits: ['&diams', '&clubs', '&hearts', '&spades'],
  names: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
  create: function () {
    for(var s = 0; s < this.suits.length; s++) {
    for(var n = 0; n < this.names.length; n++){
      switch (this.names[n]) {
        case "K":
          this.values = "10";
          break;
        case "Q":
          this.values = "10";
          break;
        case "J":
          this.values = "10";
          break;
        case "A":
          this.values = "11";
          break;
        case n <= 10:
          this.values = this.names[n];
        }
        Deck.deck.push(new Card(this.values, this.suits[s], this.names[n]));
      }
    }
  }
}


Deck.create()

console.log(Deck);
console.log("Cards made...");




  // console.log(this.cards.val);


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

  var shuffledDeck = shuffle(Deck.deck);
  console.log(Deck.deck.names);
// New Deck
// var myDeck = new Deck();
// console.log(myDeck.cards);

// console.log(myDeck[card.value])
// var curDeck = [];
//
 function showCard() {

     myDeck = shuffle(myDeck);
     for(var i=0; i < myDeck.length; i++){
         div = document.createElement('div');
         div.className = 'card';

       
             var ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
         }
 div.innerHTML = '<span class="number">' + myDeck[i].name + '</span><span class="suit">' + ascii_char + '</span>';
 document.getElementById("cardDeck").appendChild(div);
}

 
//
//

function Player(hand, chips, num) {
    this.num = PlayerNum,
    this.chips = 100,
  this.hand = hand
};

 function createPlayer() {
   var p0 = new Player (10000000000000082, 0, hand)
   var p1 = new Player (100, 1, hand)
   }

// gamePlay
var check = false;
var serve = false;

function deal(Player) {
    check = true;
    this.Player.hand.slice(Deck);
    check = false;
}

 function gamePlay() {
   //createPlayers
   createPlayers();
     
   //player's first card is dealt showing
     deal(p1);
     console.log(p1.Player.hand);
     //dealer's card is dealt down
     deal(p0);
   //player's card is dealt showing
     deal(p1);
     console.log(p1.Player.hand);
 }


//built in function for checking bJ
//   //players' hand total is added up + check for blackJack

//   //player is required to stand, hit or bet
function hit() {
 deal(Player);
}
    
function stay() {
    check = false;
}

function turns() {
    if(!serve) { 
        p1.Player
    }
}


function counter() {
    
}
//   //houseplayer goes: if <= 16 { must hit, 17=> {must_stand}
//
//   //function keeps in loop as long as players are <= 21
//
//   //decide winner ++chips
// }
