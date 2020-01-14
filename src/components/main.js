import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';


export default class Main extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
       prodV : "", 
       metriV : "",
        produto: [],
        metrica: [],
        
        
        componentDidMount() {
          
        }
    }

   
   

     this.armazenar = this.armazenar.bind(this);
     this.handleChangeMetri = this.handleChangeMetri.bind(this);
     this.handleChangeProd = this.handleChangeProd.bind(this);
}


  render() {
  let rendo =  (localStorage.setItem("@metri-value/prod", JSON.stringify(this.state.metrica)));
  let rendu =  (localStorage.setItem("@prod-value/prod", JSON.stringify(this.state.produto)));  
  let prodResult = this.state.produto.map(prod => <li>de {prod}</li>);
  let metriResult = this.state.metrica.map(metri => <li>{metri}</li>);
    return (
       <div>
         <Header/>
     <main>
       
         <div className="actions">

           <button  className="CadPag">Cadastro</button>
           <button className="ListPage">Listar</button>  
             
         </div>
        <section>
           <form className="">
              <div><h3>Ingredientes</h3></div>
              <section>
                <div className="form-group ">
    <label className="Lab" >Produto</label>
                    <input onChange={this.handleChangeProd} type="text" className="inp form-control " id="inp"  placeholder="Produtos"/>
                    
                </div>
                <div className="form-group ">
                    <label>Metrica</label>
                         <select onChange={this.handleChangeMetri} id="met" class="form-control">
                             <option disabled selected>Escolha</option>
                             <option id="" value="Kg">Kg</option>
                             <option id="" value="Ml">Ml</option>
                             <option id="" value="Lt">L</option>
                             <option id="" value="Un">Un</option>
                             
                        </select>
                       
                     
                 </div>
                 <input value="Cadastrar" onClick = {this.armazenar} id="bt"  type="button" className= "botao btn btn-primary"/>
                </section>
                
            </form>
        <section className="pele container"  >
          <ul>
             
           {metriResult}
          </ul>
          <ul>
             
             {prodResult}
          </ul>
  
        </section>

        </section>
           
        </main>
        </div>
    )
  }

   handleChangeProd(event) {
      let  value = event.target.value;
      this.setState({prodV : value});
      // var arr = this.state.produto;
      // arr.push(value)
      // this.setState({produto: arr});
      // console.log(this.state.produto);
      
      
  }

  handleChangeMetri(event) {
    let  value = event.target.value;
    this.setState({metriV : value});
    // this.setState({metriV : event.target.value});
  
    
}




  armazenar() {  
    //  this.setState({metrica : [].concat(this.state.metrica, this.state.metriV)});
    //  this.setState({produto : [].concat(this.state.produto, this.state.prodV)});
    // console.log(this.state.produto);
       var arr = this.state.produto;
       arr.push(this.state.prodV)
       this.setState({produto: arr});
       console.log(this.state.produto);

       var arr2 = this.state.metrica;
       arr2.push(this.state.metriV)
       this.setState({metrica: arr2});
       console.log(this.state.metrica);
   
    
    
    
    
  };

  

}