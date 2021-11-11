let score1 = 0

let score2 = 0

function increaseScore(player){
  if(player == '1'){
    score1 ++
  } else {
    score2 ++
  }
  draw()
}

function draw(){
  document.getElementById('score1').innerHTML = score1
  document.getElementById('score2').innerHTML = score2
}

function reset(){
  score1 = 0
  score2 = 0
  draw()
}

draw()