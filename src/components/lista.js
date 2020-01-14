import React, { Component } from 'react';
import Main from './main';
import MainCss from './lista.css';


export default class lista extends Component  {
    constructor(props) {
        super(props);

        this.state = {
            produto: ["Mariel"],
            metrica: ["Pelé"],
        }

       

    }
    componentDidMount() {
         let rendo =  JSON.parse(localStorage.getItem("@metri-value/prod")) || [];
         let rendu =  JSON.parse(localStorage.getItem("@prod-value/prod")) || [];  
         this.setState({produto: rendu});
         this.setState({metrica: rendo})
    }


    inputar() {
        var met = document.getElementsByClassName("met");
        var input = document.createElement("input");
        met.appendChild(input);
    }

    render() {
  let prodResult = this.state.produto.map(prod => <li>de {prod}</li>);
  let metriResult = this.state.metrica.map(metri => <li className="met">{metri}</li>);
  return (
            <div>
            <h1>Pelé Herói Nacional dos Mundos </h1>
            <section className="ul"  >
          <ul>
            {/* <li>Eae</li>
            <li>coe</li> */}
           {metriResult}
          </ul>
          <ul>
            {/* <li>Pedro</li>
            <li>Léo</li> */}
             {prodResult}
          </ul>
  
        </section>
        </div>
        )
    }
}