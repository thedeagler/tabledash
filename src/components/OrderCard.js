import React, { Component, PropTypes } from 'react';

export default class OrderCard extends Component {
  static propTypes = {
    orderNumber: PropTypes.number,
    items: PropTypes.array
  }

  render() {
    const {
      orderNumber,
      items,
    } = this.props
    return (
      <div>
        <h2>Order #{orderNumber}</h2>
        {
          items.map((item) => {
            return <div>{item.name}</div>
          })
        }
      </div>
    )
  }
}
