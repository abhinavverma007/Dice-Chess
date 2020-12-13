import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'
export class RollDice extends Component {
    static defaultProps = { 
        sides : ['bishop', 'queen', 'king',  
                 'pawn', 'rook', 'knight'] 
      };
    constructor(props){
        super(props);
        this.state={die1: 'bishop',die2: 'bishop', die3: 'bishop',rolling: false};
        this.roll = this.roll.bind(this);
    }
    roll(){
        const {sides} = this.props 
    this.setState({ 
      
      // Changing state upon click 
      die1 : sides[Math.floor(Math.random() * sides.length)], 
      die2 : sides[Math.floor(Math.random() * sides.length)],
      die3 : sides[Math.floor(Math.random() * sides.length)],
      rolling: true
      
    });

    setTimeout(() => { 
      
        // Set rolling to false again when time over 
        this.setState({rolling:false}) 
      },1000) 
    }
    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die1} rolling={this.state.rolling}/>
                    <Die face={this.state.die2} rolling={this.state.rolling}/>
                    <Die face={this.state.die3} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>  {this.state.rolling ? 'Rolling....' : 'Roll Dice!'}</button>
            </div>
        )
    }
}

export default RollDice
