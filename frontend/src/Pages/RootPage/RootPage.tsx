import { Component } from 'react';
import Navigation from "../../Components/Navigation/Navigation";

class RootPage extends Component {
    render() {
        return (
            <div>
                <h2>Система приемки заказов на доставку</h2>
                <p>Создайте новый заказ или перейдите к списку уже существующих</p>
                <Navigation />
            </div>
        );
    }
}

export default RootPage;