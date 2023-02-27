<script>
    let clicks = 0;
    let clickamount = 1;
    let upgradeCost = 100;
    let butchers = 0;
    let upgradeCostbuther = 100;
    let rebirthcost = 10000;
    let rebirthamount = 0;
    let coins = 0;
    let rebirthx5cost = 50000
    let coinsupgradeCost = 1000;
    let coinsamount = 1;
    function Click(){
        clicks += clickamount;
    }
    setInterval(() => {
        clicks += butchers * 10;
    }, 1000);

    function getRandomInt() {
        Math.floor(Math.random() * 10);
    }
    function Clickupgrade(){
        if(clicks >= upgradeCost){
            clickamount *= 2;
            clicks -= upgradeCost;
            upgradeCost = Math.floor(upgradeCost * 2.5);
        }
    }
    function butchermoney(){
        if(clicks >= upgradeCostbuther){
            clicks -= upgradeCostbuther;
            upgradeCostbuther = Math.floor(upgradeCostbuther * 1.02);
            butchers++;
        }
    }
    function rebirth(){
        if(clicks >= rebirthcost){
            clicks -= rebirthcost;
            rebirthcost = Math.floor(rebirthcost * 1.3);
            rebirthamount++;
            coins = coins + 1000;
            clicks = 0;
        }
    }
    function rebirthx5(){
        if(clicks >= rebirthx5cost){
            clicks -= rebirthx5cost;
            rebirthx5cost = Math.floor(rebirthx5cost * 1.3);
            rebirthamount+=5;
            coins = coins + 5000;
            clicks = 0;
        }
    }
    function Clickupgradecoins(){
        if(coins >= coinsupgradeCost){
            clickamount *= 2;
            coins -= coinsupgradeCost;
            coinsupgradeCost = Math.floor(coinsupgradeCost * 2.5);
        }
    }
</script>

<body>
    <main class="clicker">
        <div class="menu">
            <button class="home">Home</button>
            <h2  class="clicks">clicks = {clicks}</h2>
            
            <p class="upgrade">Upgradecost = {upgradeCost}</p>
            <button on:click={Click} class="salami"></button>
            <br>
           
        </div>
        
        <button on:click={butchermoney} class = "salami2"></button>
        <button on:click={Clickupgrade} class="salami3"></button>
        <button on:click={rebirth} class="salami4">rebirth</button>
        <button on:click={rebirthx5} class="salami5">rebirthx5</button>
        <button on:click={Clickupgradecoins} class="salami6">x2 coins</button>
    </main>
</body>

<style>
    .salami {
        width: 300px;
        height: 300px;
        border-radius: 1000px;
        background-color: rgb(255, 187, 0);
        border-width: 7px;
        text-align: center;
        transition: 0.15s;
        
    }
    .salami:hover{
        border: solid darkslategrey;
        border-width: 7px;

    }
    .salami:active {
        transform: scale(1.1);
    }
    .salami2 {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        
    }
    .salami3 {
        width: 200px;
        height: 200px;
        
        border-radius: 100px;
    }
    .salami4 {
        width: 100px;
        height: 100px;
        
        border-radius: 100px;
        
    }
    .salami5 {
        width: 100px;
        height: 100px;
        transform: translate(20px,-830px);
        border-radius: 100px;
        
    }
    .salami6 {
        width: 100px;
        height: 100px;
        transform: translate(20px,-830px);
        border-radius: 100px;
        
    }
    button:focus{
        outline: none;
    }

    /* .buttonImage {
        width: 220px;
        height: 220px;
        transform: translate(-10px,-10px);
    } */
    

    
    
    :global(body){
        background-color: rgb(255, 187, 0);
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .menu {
        
        
        
        border-radius: 30px;
        text-align: center;
        -ms-flex-align: center;
        flex-direction: column;
        -ms-flex-item-align: center;
    }
    .clicks {
        color: black;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .upgrade {
        color:black;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .home {
        text-align: center;
       
        background-color: rgb(255, 187, 0);
        color: black;
        border: none;
        border-radius: 10px;
        width: 80px;
        height: 40px;
        font-size: 20px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .home:hover {
        background-color: black;
        color: rgb(255, 187, 0);
    }
</style>