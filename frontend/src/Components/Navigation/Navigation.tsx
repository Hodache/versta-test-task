import React, {Component} from 'react';
import {NavLink} from "react-router";

class Navigation extends Component {
    render() {
        return (
            <header className="pt-4 mb-5">
                <NavLink to="/create-order">
                    <span className="btn btn-success">Создание заказа</span>
                </NavLink>
                <NavLink to="/orders">
                    <span className="btn btn-info ms-4">Просмотр заказов</span>
                </NavLink>
            </header>
        );
    }
}

export default Navigation;