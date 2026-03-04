import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';
import Items from "./components/Items";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      items: [
        {
          id: 1,
          title: 'Стул белый',
          img: 'white-chair.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '49.99'
        },

        {
          id: 2,
          title: 'Стол',
          img: 'table.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'tables',
          price: '149.00'
        },

        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'sofa',
          price: '549.99'
        },

        {
          id: 4,
          title: 'Лампа',
          img: 'light.jpg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'light',
          price: '25.00'
        },

        {
          id: 5,
          title: 'Стул черный',
          img: 'black-chair.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '49.99'
        },
      ]
    }
  }
  render(){
  return (
  <div className="wrapper">
    <Header />
    <Items items={this.state.items}/>
    <Footer />
  </div>
  );
}
}
export default App;
