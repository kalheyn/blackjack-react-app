import React from 'react';
import ReactDOM from 'react-dom';

class Hand extends React.Component {
    render() {
        return (
            <div className="hand">
                A♥
            </div>
        );
    }
}

class Player extends React.Component {
    render() {
        return (
            <div className="player">
                <div className="player-hand">
                    <Hand />
                </div>
                <div className="player-name">
                    Player 1
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-player">
                    <Player />
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />, 
    document.getElementById('root')
)