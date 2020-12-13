import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { faChess, faChessBishop, faChessKing, faChessKnight, faChessPawn, faChessQueen, faChessRook } from '@fortawesome/free-solid-svg-icons'
import './Die.css';
export class Die extends Component {
    render() {
        return (
            <div>
                               
                <i className={`Die fas fa-chess-${this.props.face} ${this.props.rolling? 'shaking': ''}` }></i>
               
            </div>
        )
    }
}

export default Die
