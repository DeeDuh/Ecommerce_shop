// rce
import React, { Component } from 'react'
//Иконка Корзина в товаре:
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
        <div className='item'>
            <img src={"./img/" + this.props.item.img} />
            <h2>{this.props.item.title}</h2>              
            <b>{this.props.item.price}$</b>
            {/* 5 video <div className='add-to-cart' onClick={()=> this.props.onAdd(this.props.item)}></div> */}
          <FaTrash className='delete-icon'onClick={() => this.props.onDelete(this.props.item.id)}/>
        </div>
    )
  }
}

export default Order