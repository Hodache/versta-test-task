import { ChangeEvent, Component } from 'react';
import Navigation from "../../Components/Navigation/Navigation";
import { OrderInfo } from '../../Models/OrderInfo';
import { createOrder } from '../../Api/api';

interface State {
    cityFrom: string;
    addressFrom: string;
    cityTo: string;
    addressTo: string;
    weight: string;
    pickupDate: string;
}


class CreateOrderPage extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            cityFrom: "",
            addressFrom: "",
            cityTo: "",
            addressTo: "",
            weight: "",
            pickupDate: ""
        }
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value } as Pick<State, keyof State>);
    };

    handleSubmit = async () => {
        const order: OrderInfo = {
            id: "",
            cityFrom: this.state.cityFrom,
            addressFrom: this.state.addressFrom,
            cityTo: this.state.cityTo,
            addressTo: this.state.addressTo,
            weight: parseFloat(this.state.weight),
            pickupDate: new Date(this.state.pickupDate).toLocaleDateString()
        };

        const data = await createOrder(order);

        this.setState({
            cityFrom: "",
            addressFrom: "",
            cityTo: "",
            addressTo: "",
            weight: "",
            pickupDate: ""
        });

        if (typeof data === "string") {
            alert(data);
            return;
        }
    }

    render() {
        return (
            <div>
                <Navigation />

                <div className="row justify-content-center">
                    <div className="card p-3 col-lg-4">
                        <h2>Новый заказ на доставку</h2>
                        <div>
                            <form action={this.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="cityFrom" className="form-label">Город отправителя</label>
                                    <input name="cityFrom" type="text" className="form-control" id="cityFrom" required
                                        value={this.state.cityFrom}
                                        onChange={(e) => {
                                            this.handleChange(e)
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="addressFrom" className="form-label">Адрес отправителя</label>
                                    <input name="addressFrom" type="address" className="form-control" id="addressFrom"
                                        required
                                        value={this.state.addressFrom}
                                        onChange={(e) => {
                                            this.handleChange(e)
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cityTo" className="form-label">Город получателя</label>
                                    <input name="cityTo" type="text" className="form-control" id="cityTo" required
                                        value={this.state.cityTo}
                                        onChange={(e) => {
                                            this.handleChange(e)
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="addressTo" className="form-label">Адрес получателя</label>
                                    <input name="addressTo" type="text" className="form-control" id="addressTo" required
                                        value={this.state.addressTo}
                                        onChange={(e) => {
                                            this.handleChange(e)
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="weight" className="form-label">Вес груза (кг)</label>
                                    <input name="weight" type="number" min="0.01" step="0.01" className="form-control"
                                        id="weight"
                                        required
                                        value={this.state.weight}
                                        onChange={(e) => {
                                            this.handleChange(e)
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pickupDate" className="form-label">Дата забора груза</label>
                                    <input name="pickupDate" type="date" className="form-control" id="pickupDate"
                                        required
                                        value={this.state.pickupDate}
                                        onChange={(e) => {
                                            this.handleChange(e)
                                        }} />
                                </div>

                                <button type="submit" className="btn btn-success">Создать заказ</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateOrderPage;