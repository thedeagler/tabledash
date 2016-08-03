import React, { Component } from 'react'
import OrderCard from './components/OrderCard.js'

export default class TableView extends Component {
  render() {
    return (
      <OrderCard
        orderNumber={1}
        items={[
          {name: 'Best fish'},
          {name: 'Okay fries'},
          {name: 'Shit dessert'},
        ]}
      />
    );
  }
}
