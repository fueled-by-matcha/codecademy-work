let team = {
  _players: [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  },
  {
    firstName: 'Richard',
    lastName: 'Scully',
    age: 29
  },
  {
    firstName: 'Fox',
    lastName: 'Mulder',
    age: 31
  }],
  _games: [{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Bruins',
    teamPoints: 7,
    opponentPoints: 0
  },
  {
    opponent: 'Capitals',
    teamPoints: 5,
    opponentPoints: 8
  }],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(player);  
  },
  addGame(name, teamPoints, opponentsPoints){
    let game = {
      name: name,
      teamPoints: teamPoints,
      opponentsPoints: opponentsPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Sens', 0, 3);
team.addGame('Leafs', 5, 0);
team.addGame('Sharks', 3, 3);
console.log(team.games);
