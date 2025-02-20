import { Component } from 'react';
import { OrderInfo } from '../../Models/OrderInfo';

interface Props {
    orders: OrderInfo[];
    onOrderClick?: (id: string) => void;
}

class OrdersList extends Component<Props> {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Город отправления</th>
                            <th scope="col">Город прибытия</th>
                            <th scope="col">Дата</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.orders.map((order) => (
                            <tr key={order.id}
                             onClick={() =>
                                    this.props.onOrderClick ? this.props.onOrderClick(order.id) : ""
                                }>
                                <th scope="row">{order.id}</th>
                                <td>{order.cityFrom}</td>
                                <td>{order.cityTo}</td>
                                <td>{new Date(order.pickupDate).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default OrdersList;