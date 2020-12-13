import React, { Component } from 'react'
import './Footer.css'
export class Footer extends Component {
    render() {
        let url="https://www.linkedin.com/in/abhinavverma2";
        return (
            <div>
                <h4 className="myname"> Made with <i className="fa fa-heart-o"></i> by <a href={url} target="_blank" rel="noopener noreferrer">Abhinav Verma  </a> </h4>
                <h6> Inspired by Colt Steele</h6>
            </div>
        )
    }
}

export default Footer
