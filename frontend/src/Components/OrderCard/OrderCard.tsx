import {Component} from 'react';
import { OrderInfo } from '../../Models/OrderInfo';

interface Props {
    order: OrderInfo;
}

class OrderCard extends Component<Props> {
    render() {
        let order = this.props.order;

        return (
            <div className="card p-3">
                <h5>Заказ {order.id}</h5>
                <p>Город отправления: {order.cityFrom}</p>
                <p>Адрес отправления: {order.addressFrom}</p>
                <p>Город прибытия: {order.cityTo}</p>
                <p>Адрес прибытия: {order.addressTo}</p>
                <p>Вес: {order.weight}</p>
                <p>Дата забора: {new Date(order.pickupDate).toLocaleDateString()}</p>
            </div>
        );
    }
}

export default OrderCard;