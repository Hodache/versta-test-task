import { Component } from 'react';
import { OrderInfo } from '../../Models/OrderInfo';
import { getAllOrders } from '../../Api/api';
import Navigation from '../../Components/Navigation/Navigation';
import OrdersList from '../../Components/OrdersList/OrdersList';

interface State {
    orders: OrderInfo[];
}

class AllOrdersPage extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            orders: [],
        };
    }

    async componentDidMount() {
        const data = await getAllOrders();
        if (typeof data === "string") {
            alert(data);
            return;
        }

        this.setState({ orders: data });
    }

    handleOrderClick = (orderId: string) => {
        window.open(`/order/${orderId}`, "_blank");
        window.focus();
    }

    render() {
        return (
            <div>
                <Navigation />

                <div className="row justify-content-center justify-content-sm-between">
                    <div className="col-12">
                        <OrdersList orders={this.state.orders} onOrderClick={this.handleOrderClick} />
                    </div>
                </div>
            </div>
        );
    }
}

export default AllOrdersPage;