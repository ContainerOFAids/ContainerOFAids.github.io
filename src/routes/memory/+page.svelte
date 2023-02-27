<script>
    let cards = [];
    let imgs = ["https://media.tenor.com/rV8mpdXgZpAAAAAd/i-show-speed-speed.gif",
     "https://media.tenor.com/GfVorHpvor0AAAAM/among-us-sus-gif.gif",
     "https://media.tenor.com/cUpVSPi9J6AAAAAC/halfcat-simdemocracy.gif",
     "https://media.tenor.com/fxlSft_ZEkwAAAAd/andrew-tate-tate.gif",
     "https://customsitesmedia.usc.edu/wp-content/uploads/sites/59/2020/11/16002124/TFM-WIN20-TMenzel-Computer-working.gif",
     "https://i.kym-cdn.com/photos/images/newsfeed/002/322/167/b9f.gif","https://media.tenor.com/tIFDxpId0EUAAAAC/osu-ohio-state-university.gif","https://media.tenor.com/_cXCMb80kW8AAAAC/family-guy-peter-griffin.gif"]
    for (let index = 0; index < 16; index++) {
      cards.push({
        id: index % (imgs.length), // TODO: unique ids per card card
        img: imgs[index % (imgs.length)],
      
        flipped: false,  // TODO: think
        completed: false,
      });
    }
    shuffleArray(cards)
    function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }
    let flipcount = 0;
    function flip(card) {
      // flip card over if two cards are not already flipped
      // TODO: and card is already not flipped
      if (!card.flipped && flipcount < 2) {
        // TODO: Probably do what?
        card.flipped = true;
        flipcount++;
        // flip the cards over after 2s from seeing both cards
        if (flipcount == 2) {
          setTimeout(() => {
            let card1 = null;
            let card2 = null;
            cards.forEach((card) => {
              if (card.flipped && card1 == null && !card.completed){
                card1 = card;
              }
              else if(card.flipped && card != card1 && card1 != null && card2 == null && !card.completed){
                card2 = card;
              }
            });
            console.log(card1.id)
            console.log(card2.id)
            if (card2.id == card1.id) {
              card1.completed = true;
              card2.completed = true;
            }
            // flip over cards that have not been marked as "completed"
            cards.forEach((card) => {
              card.flipped = card.completed;
            });
            flipcount = 0;
            cards = cards;
          }, 2000);
        }
        cards = cards;
      } else {
        alert("Is stress making you frustrated and irritable? Stress relievers can help restore calm and serenity to your chaotic life. You don't have to invest a lot of time or thought into stress relievers. If your stress is getting out of control and you need quick relief, try one of these tips. - eat -sleep - Use meditation - practice deep breathing - Maintain physicalexercise and good nutrition - manage social media time - Connect with others ");
      }
    }
  </script>
  
  <main class="background">
    <div class="row">
      {#each cards as card, i}
        <div
          on:click={() => {
            flip(card);
          }}
          on:keypress={() => {
            flip(card);
          }}
          class:flipped={card.flipped}
          class="card"
        >
          <img class="front" src={card.img} alt="" />
          <img class="back" src="https://cdnb.artstation.com/p/assets/images/images/012/681/457/large/kathryn-raccuglia-happening-card-back.jpg?1536001736" alt="" />
        </div>
      {/each}

    </div>
    <button class="restart" onClick="window.location.reload();">Restart</button>

  </main>
  
  <style>
    main {
      margin-top: 50px;
      display: flex;
      place-content: center;
      place-items: center;
    }
    .row {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(4, 100px);
      grid-template-rows: repeat(4, 100px);
    }
    .card {
      border: none;
      cursor: pointer;
      transition: transform 1s;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
    }
    .card.flipped {
      transform: rotateY(180deg);
    }
    .card .back {
      transform: rotateY(0deg);
    }
    .card .front {
      transform: rotateY(180deg);
    }
    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      position: absolute;
    }
    .restart {
      position: absolute;
      bottom: 25px;
      height: 70px;
      width: 150px;
      border-radius: 5px;
      background-color: skyblue;
      color: black;
      box-shadow: 3px 3px black;
      font-size: 16px;
    }
    .restart:active {
      box-shadow: 0 0 black;
      transform: translate(3px, 3px);
    }
    :global(body){
      overflow: hidden;
      padding: 0;
      margin: 0;
    }
    .background {
      background-color: aquamarine;
      width: 100vw;
      height: 100vh;
      margin: 0;
    }
  </style>