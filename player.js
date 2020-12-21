class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;

    }

    getplayerCount(){
        var playerCountref = database.ref('playerCount')
        playerCountref.on ("value",function(data){
            playerCount = data.val()
        })

    }

    updateplayerCount(count){
        var playerCountref = database.ref('/')
        playerCountref.update({
            playerCount:count
        })
    }

    updateplayerInfo(){
        var playerindex = "players/player"+ this.index
        var playerref = database.ref(playerindex)
        playerref.set({
            playername:this.name,
            distance:this.distance
        })
    }

     static getallPlayerinfo(){
        var playerref = database.ref('players')
        playerref.on ("value",(data) => {
            allPlayers = data.val()
        })

    }













}