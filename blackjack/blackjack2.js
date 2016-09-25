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
//console.log(shuffledDeck)
//console.log(shuffledDeck[0])



//Nitty Gritty

//upload to array
//data that represents the game
//Player Object
function Player(num, chips, hand) {
    this.playerNum = num;
    this.chips = chips;
    this.hand = hand;
    this.sum = function result() {
        debugger;
        var result = 0;
//        sum += this.hand[0] + this.hand[1]; //wasn't necessary
        for(var i = 0; i < this.hand.length; i++) {
            result += parseInt(this.hand[i].rank);
        }
        return result;
    }
};


//GLOBAL$
//topCard of shuffledDeck for handing out
//var topCard = 0;
var turnCheck = false;

//deal function
function dealCard(Player) {
    turnCheck = !turnCheck;
    Player.hand.push(shuffledDeck.pop()); 
    showCard(Player.hand);
}

//show cards in DOM
function showCard() {
console.log("I ran");
    for(var i=0; i < shuffledDeck.length; i++){
//    this.hand.forEach(function() {
        div = document.createElement('div');
        div.className = 'card';
        var ascii_char = shuffledDeck[i].suit.toLowerCase() + ';';
        div.innerHTML = '<span class="number">' + shuffledDeck[i].name + '</span><span class="suit">' + ascii_char + '</span>'; document.getElementById("game").appendChild(div);
    }
}





//Gameplay Logistics

//chips system
var chipsPot = 0;
function chips() {
//Player.chips
//p1.chips
//button for adding chips amount
//game is played
//find out who won
    if(win(Player)) {
        //chips are distributed
        chipsPot.reduce(Player.chips);
    }
}

//Dealer's turn 
function getDealerDecision(player) {
    if(player.sum() >= 17) {
        stay();
    } else if(player.sum() < "17") {
        hitMe();
    }
}

//turn switcher
//function playerTurnswitch(Player) {
//    //start from p1 and go through
//    Player.forEach(turnCheck === "false") {
//            turnCheck = true;
//    }
//    //in the end get dealer's play
//    getDealerDecision();
//}
//  

//hit function
function hitMe(Player) {
    dealCard(Player);
    checkBJB(Player);
}


//stay function
function stay(Player) {
    turnCheck = false;
}

    var p0 = new Player(0, 100000000082, []);
    var p1 = new Player(1, 100, []);
        dealCard(p1);
    dealCard(p0);
    dealCard(p1);
    dealCard(p0);

//Actual Gameplay
function gamePlay() {
    var p0 = new Player(0, 100000000082, []);
    var p1 = new Player(1, 100, []);
    
    //deal cards to Players
    dealCard(p1);
    dealCard(p0);
    dealCard(p1);
    dealCard(p0);
    
    //start game on p1
    //Player.forEach
    //check BJB
    Player.forEach(checkBJB(Player));
    
    //option to hit or stay
    
    //next turn //dealer's turn
    getDealerDecision();
    
    //evaluate score
    evalScore()
    //end game
}



//jQuery
//$(document).ready(function(){
//    $("button").click(function(){
//        $(this).hide();
//    });
//});

//Check for BlackJack || Bust
function checkBJB(player) {
    if(player.sum() == 21) {
        win(player);
    } else if(player.sum() > 21) {
        lose(player);
    } else {
        console.log(player.hand);
    }
}


//Score it out after gamePlay
function evalScore(p1, p0) {
    if(p1.sum() == p0.sum()) {
        tie(p1, p0);
    } else if(p1.sum() > p0.sum()) {
        win(p1);
    }  else if(p1.sum() < p0.sum()) {
        lose(p1);
    }
}
    
//win function
function win(player) {
    //something about chips
    console.log("U won!");
}

//lose function
function lose(player) {
        //something about chips
    console.log("Dealer won!");
    }
    
//tie function
function tie(playerNum) {
    //something about chips
    console.log("It was a tie ;/")
}
    
