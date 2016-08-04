import React, { Component, PropTypes } from 'react'
import styles from './styles.css'

export default class OrderCard extends Component {
  static propTypes = {
    orderNumber: PropTypes.number,
    items: PropTypes.array,
    status: PropTypes.number
  }

  render() {
    const {
      orderNumber,
      items,
      status
    } = this.props

    return (
      <div className={styles.orderCard}>
        <div className={styles.orderCardHeader}>
          <h2 className={styles.customerName}>Customer #{orderNumber}</h2>
          {this.renderOrderStatus(status)}
        </div>
        {
          items.map((item, i) => {
            return <div key={`item-${i}`}>{item}</div>
          })
        }
      </div>
    )
  }

  renderOrderStatus(statusCode) {
    const orderStatus = {
      IN_PROGRESS: 0,
      COMPLETE: 1,
    }

    switch(statusCode) {
      // case orderStatus.IN_PROGRESS:
      case orderStatus.COMPLETE:
        return <div className={styles.ready}>Ready</div>
      default:
        return <div className={styles.notReady}>Ordering</div>
    }
  }
}
