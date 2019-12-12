import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './filter';
import Pagination from './pagination';
import { Paginate } from '../utils/paginate';

class Order extends Component {

  constructor() {
    super();
    this.state = {
      orders: [],
      currentPage: 1,
      pageSize: 50
    }
  }

  componentDidMount() {
    fetch('/api/orders')
      .then(res => res.json())
      .then(orders => this.setState({ orders }));
  }

  filterPin(event) {
    if (event.key === "Enter") {
      const pin = this.state.orders.filter((m) => m.deliveryPincode === event.target.value)
      this.setState({ orders: pin })

    }
  }

  filterDate(event) {
    if (event.key === "Enter") {
      const dt = this.state.orders.filter((m) => m.orderDate === event.target.value)
      this.setState({ orders: dt })
    }

  }
  handlePageChange(page) {
    this.setState({ currentPage: page })
  }

  render() {
    const allOrder = Paginate(this.state.orders, this.state.pageSize, this.state.currentPage)
    return (
      <div>
        <Filter filterPin={(event) => this.filterPin(event)} filterDate={(event) => this.filterDate(event)} />
        <table className="table table-light table-bordered">
          <thead>
            <tr>
              <th>Order id</th>
              <th>customer id</th>
              <th>Delivery Pin Code</th>
              <th >Order Date</th>
              <th>Order Items</th>
            </tr>
          </thead>
          <tbody>
            {allOrder.map(orders =>
              <tr key={orders.orderId}>
                <td>{orders.orderId}</td>
                <td>{orders.customerId}</td>
                <td>{orders.deliveryPincode}</td>
                <td>{orders.orderDate} </td>
                <td>{orders.items} </td>
              </tr>
            )}
          </tbody>
        </table>
        <ul>

        </ul>
        <Pagination
          itemsCount={this.state.orders.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={(page) => this.handlePageChange(page)} />
      </div>
    );
  }
}

export default Order;