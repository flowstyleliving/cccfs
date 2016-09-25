//Constructor function for individual Card[s]
function Card(suit, name, rank) {
  this.suit = suit;
  this.name = name;
  this.rank = rank;
}

//Variable Object to create the Deck of Card[s]
var Deck = {
//deck array to load Cards to = Deck.deck[Cards]
  deck: [],
  val: 0,
  suit: ['&diams', '&clubs', '&hearts', '&spades'],
  name: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
  create: function () {
    for(var s = 0; s < this.suit.length; s++) {
        for(var n = 0; n < this.name.length; n++){
          switch (this.name[n]) {
            case "A":
                if (this.sum > 21) {
                  this.val = "1";
                          } 
                    else if (this.sum <= 21) {
                    this.val = "11";   
                          };
              break;
            case "K":
              this.val = "10";
              break;
            case "Q":
              this.val = "10";
              break;
            case "J":
              this.val = "10";
              break;
            default:
              this.val = this.name[n];
            }
            this.deck.push(new Card(this.suit[s], this.name[n], this.val));
        }
      }
    }
}

//Run this thing called Deck and create the .deck
Deck.create();
//Let us know that it was Deck.deck was created.
console.log("Cards made...");

//check wtf we made
//console.log(Deck);
//console.log(Deck.deck);


//shuffle that shit
//shuffle function
function shuffle(arr) {
    var i = arr.length, j, temp;
    while(i-- > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

//load that shuffle function into an actual deck
var shuffledDeck = shuffle(Deck.deck);

//var dealer = {
//    hand: hand,
//    chips: chips,
//      sum: function result() {
//        var result = 0;
//        for(var i = 0; i < this.hand.length; i++) {
//            result += parseInt(this.hand[i].rank);
//        }
//        return result;
//    }
//}

function Player(num, chips, hand) {
    this.playerNum = num;
    this.chips = chips;
    this.hand = hand;
    this.sum = function result() {
        var result = 0;
        for(var i = 0; i < this.hand.length; i++) {
            result += parseInt(this.hand[i].rank);
        }
        return result;
    }
};

//deal function
function dealCard(Player) {
//    turnCheck = !turnCheck;
    Player.hand.push(shuffledDeck.pop()); 
//    showCard(Player.hand);
}

//////////////
var playerArr = [];

var p0 = new Player(0, 100000000082, []);
var p1 = new Player(1, 100, []);
playerArr.push(p0, p1);

dealCard(p1);
dealCard(p0);
dealCard(p1);
dealCard(p0);

//////////////

//function showCard() { 
//    for(var i=0; i < Player.hand; i++){
//    div = document.createElement('div');
//    div.className = 'card';
//    var ascii_char = shuffledDeck[i].suit.toLowerCase() + ';';
//    div.innerHTML = '<span class="number">' + shuffledDeck[i].name + '</span><span class="suit">' + ascii_char + '</span>'; document.getElementById("game").appendChild(div);
//    }
//}

//$(function(){
//    playerArr.forEach(function(card, index) {
//        $(".playerArr").append($("<div/>"), {
//            html: div = document.createElement('div');
//    div.className = 'card';
//    var ascii_char = shuffledDeck[i].suit.toLowerCase() + ';';
//    div.innerHTML = '<span class="number">' + shuffledDeck[i].name + '</span><span class="suit">' + ascii_char + '</span>'; 
//        })
//    }
//)})


//Check for BlackJack || Bust
//function checkBJB(player) {
//    if(player.sum() == 21) {
//        win(player);
//    } else if(player.sum() > 21) {
//        lose(player);
//    } else {
//        console.log(player.hand);
//    }
//}

//hit function
function hitMe(Player) {
    dealCard(Player);
}

//Dealer's turn 
function getDealerDecision(player) {
    if(this.sum() >= 17) {
        stay();
    } else if(this.sum() < 17) {
        hitMe();
    }
}



//Score it out after gamePlay
function evalScore(p1, p0) {
    if(p1.sum() == p0.sum()) {
        console.log("it's a tie");
    } else if(p1.sum() > p0.sum()) {
        console.log("U win!");
    }  else if(p1.sum() < p0.sum()) {
        console.log("Dearler wins!");
    }
}