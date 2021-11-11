let players = {}

function modifyScore(player, modifier) {
  if (modifier == '+') {
    players[player].score++
  } else {
    players[player].score--
  }
  drawScore()
}

function addPlayer() {
  let newPlayerIndex = Object.keys(players).length + 1
  players[newPlayerIndex] = {
    score: 0
  }
  drawPlayers(newPlayerIndex)
}

function drawScore() {
  for (let player in players) {
    let score = players[player].score
    let playerElement = document.getElementById(player)
    playerElement.innerHTML = score
  }
}

function drawPlayers() {
  let template = ''
  for (p in players) {
    template += `
      <div class="col">
        <div class="card-body">
            <div class="d-flex flex-row justify-content-between">
                <div>
                    <h6>Player ${p}</h6>
                </div>
              <div>
            <button class="btn btn-danger" onclick="modifyScore('${p}', '-')">-</button>
            <span id="${p}">0</span>
            <button class="btn btn-success" onclick="modifyScore('${p}', '+')">+</button>
            </div>
          </div>
        </div>
      </div>`
  }
  document.getElementById('players').innerHTML = template
  drawScore()
}

