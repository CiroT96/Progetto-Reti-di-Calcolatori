import Navbar from "./componets/navbar";
import Card from "./componets/card";
import React, { Component } from "react";
import Federer from './Images/Federer.png'
import Diego from './Images/Diego.jpg'
import Mercury from './Images/Mercury.jpg'
import Lebron from './Images/Lebron.png'
import Connect from "./componets/connect"; 
//import Alert from "./componets/alert"

var shoppingcartnames = "Empty";
var shoppingcartprices = "Null";
//var error = false;

class App extends Component {

  state = {cards: [
    { id: 0, name: "Federer", price: 10, image: Federer   },
    { id: 1, name: "Diego",   price: 20, image: Diego     },
    { id: 2, name: "Mercury", price: 30, image: Mercury   },
    { id: 3, name: "Lebron",  price: 40, image: Lebron   }
  ]}
  
  handleDelete = card => {
    const cards = [...this.state.cards];
    const id = card.id;
    cards[id] = {...card};
    /*if(cards[id].amount > 0)
    {*/
      shoppingcartnames = "Empty";
      shoppingcartprices= "Null";
      //cards[id].amount--;
      /*if(cartId >= 0)
        cards[id].availableQuantity++;*/

      this.setState({cards});
    /*}
    else
    {
      //error = true;
    }*/
  }

  handleIncrement = card => {
    const cards =[...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};

      /*if(cards[id].amount <= cards[id].availableQuantity)
      {*/
        shoppingcartnames = cards[id].name;
        shoppingcartprices = cards[id].price;
        //cards[id].amount++;
        //cards[id].availableQuantity--;
        this.setState({cards});
      /*}
      else
      {
        //error = true;
      }*/
  }
  handleAdd = () =>{
    if(shoppingcartprices === "Null")
      console.log("Shopping Cart Empty");

  }
  render() {
    return (
    <>
    <Connect/>
    <Navbar
      onAdd={this.handleAdd}
      shopNames={shoppingcartnames}
      shopPrices={shoppingcartprices}/>
    <div className="container">
      <h1>What would you like to buy?</h1>
      <hr/>
      <div className="row"> 
        {
          this.state.cards.map(card => (
            <Card
            key={card.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            card={card} />
          ))}
      </div>
    </div>
    </>
    );
  }
}

export default App;