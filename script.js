// 0 = rock, 1 = paper, 2 = scissors
let playerScore = 0, cpuScore = 0

for(let i = 0; i < 5; i++){
    let player = prompt("Rock, Paper or Scissors"), cpu = parseInt(Math.random() * 3)
    player = player.toLowerCase()
    
    if(player=='rock' || player=='paper' || player=='scissors') 
        console.log("You chose " + player)

    if(cpu == 0)
        console.log("CPU chose rock")
    if(cpu == 1)
        console.log("CPU chose paper")
    if(cpu == 2)
        console.log("CPU chose scissors")

    switch(player){
        case 'rock':
            if(cpu==0){
                console.log("It is a tie.")
                playerScore += 1
                cpuScore += 1
            }
            else if(cpu==1){
                console.log("You lost.")
                cpuScore += 1
            }
            else if(cpu==2){
                console.log("You won.")
                playerScore += 1
            }
            break;
        case 'paper':
            if(cpu==0){
                console.log("You won.")
                playerScore += 1
            }
            else if(cpu==1){
                console.log("It is a tie.")
                playerScore += 1
                cpuScore += 1
            }
            else if(cpu==2){
                console.log("You lost.")
                cpuScore += 1
            }
            break;
        case 'scissors':
            if(cpu==0){
                console.log("You lost.")
                cpuScore += 1
            }
            else if(cpu==1){
                console.log("You won.")
                playerScore += 1
            }
            else if(cpu==2){
                console.log("It is a tie.")
                playerScore += 1
                cpuScore += 1
            }
            break;
        default:
            console.log("Invalid input")
            i -= 1
    }
    
    console.log("The score is |PLAYER: " + playerScore + "| CPU: " + cpuScore + "|")
    console.log("-----------------------------------------------------------------")
}

