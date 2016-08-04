import React, { Component, PropTypes } from 'react'
import styles from './styles.css'

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
      <div className={styles.orderCard}>
        <div className={styles.main}>
          <h2>Customer #{orderNumber}</h2>
          {
            items.map((item, i) => {
              return <div key={`item-${i}`}>{item}</div>
            })
          }
        </div>
        <div className={styles.checkMark}>Check</div>
      </div>
    )
  }
}
