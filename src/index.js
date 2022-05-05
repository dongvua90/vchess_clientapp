import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './index.css'


function createTournament(mdata){
  axios.post('http://localhost:5000/maketour',mdata)
  .then(function (response) {
    console.log("CreatedTour:"+response.data.toString());
  })
  .catch(function (error) {
    console.log("Error Create tour!"+error);
    });
}


function game(whitename,blackname){
  this.playwhite=whitename;
  this.playblack=blackname;
  this.fens=[];
}
function round(){
  this.games=[];
}
function tournament(name,descript){
  this._id=0;
  this.name=name;
  this.descript=descript;
  this.rounds =[];
}

var game1 = new game("đặng văn phúc","đặng văn ninh");
game1.fens[5]="rnbqkbnrppppp1pp/8/7p1/8/8/PPPPPPPPRNBQKBNR";
game1.fens[0]="rnbqkbnrpppppppp/8/8/8/8/PPPPPPPPRNBQKBNR";
var game2 = new game("đặng văn tuẫn","đặng văn cương");
game2.fens[1]="rnbqkbnrppppp1pp/8/7p1/8/8/PPPPPPPPRNBQKBNR";
game2.fens[0]="rnbqkbnrpppppppp/8/8/8/8/PPPPPPPPRNBQKBNR";
var game3 = new game("đặng văn đồng","đặng văn quyết");
game3.fens[1]="rnbqkbnrppppp1pp/8/7p1/8/8/PPPPPPPPRNBQKBNR";
game3.fens[0]="rnbqkbnrpppppppp/8/8/8/8/PPPPPPPPRNBQKBNR";

var round1 = new round();
round1.games[0] = game1;
round1.games[1] = game2;
round1.games[5] = game3;
var round2 = new round();
round2.games[0] = game3;
round2.games[1] = game2;
round2.games[4] = game1;

var tour1 = new tournament("giai vo dich vu tru 7","tranh dauso tai");
tour1.rounds[0] = round1;
tour1.rounds[1] = round2;


function move(idTournament,idRound,idGame,idFen,fen){
  this.idTournament=idTournament;
  this.idRound =idRound;
  this.idGame=idGame;
  this.idFen = idFen;
  this.fen = fen;
}

var move1 = new move(1,3,3,7,"rn3333777bsssssssppp1pp/8/7p1/8/8/PPPPPPPPRNBQKBNR");

function makemove(mdata){
  axios.post('http://localhost:5000/makemove',mdata)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
    });
}
function handlerMakeMove(){
  // let tournament = document.getElementById('input_tournament').value;
  console.log("tour:");
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <h1>heloo</h1>
  <form>
  <label>Tournament ID:</label>
    <input className='inputnumber' type="number" id="input_tournament"></input>
    <label>Tournament Name:</label>
    <input type="text" ></input>
    <label>descript:</label>
    <input type="text" id="input_tourdes"></input>
    <button onClick={handlerMakeMove()}>make tournament</button>
    <br/>
    <hr/>
    <label>Round</label>
    <input className='inputnumber' type="number" ></input>
    <br/>
    <hr/>
    <label>No.Game:</label>
    <input type="number" className='inputnumber'></input>
    <br/>
    <label>White name:</label>
    <input type="text" className='inputtext' ></input>
    <label>Black name:</label>
    <input type="text" className='inputtext'  ></input>
    <br/>
    <label>No.Fen</label>
    <input type="number" className='inputnumber'></input>
    <label>Fen</label>
    <input type="text" className='inputfen'  ></input>
    <button>Send move</button>
    <hr/>
  </form>
  <button onClick={()=>createTournament(tour1)} >Create tournament</button>
  <button onClick={()=>{makemove(move1)}}>make move</button>
  <p>id:...</p>
  </div>
);