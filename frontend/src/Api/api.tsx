import axios from "axios";
import {OrderInfo} from '../Models/OrderInfo';

const url = 'http://localhost:8080/api/';

export const getAllOrders = async (): Promise<OrderInfo[] | string> => {
    try {
        const response = await axios.get<OrderInfo[]>(url + "orders");
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            console.error('API error: ', error.response.data?.errorMessage);
            return error.response.data?.errorMessage;
        }
    
        return "Unknown error";
    }
}

export const getOrderById = async (id: string): Promise<OrderInfo | string> => {
    try {
        const response = await axios.get<OrderInfo>(url + `orders/${id}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            console.error('API error: ', error.response.data?.errorMessage);
            return error.response.data?.errorMessage;
        }
    
        return "Unknown error";
    }
}

export const createOrder = async (order: OrderInfo): Promise<string> => {
    try {
        await axios.post(url + "orders", order);
        return "Order created successfully";
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            console.error('API error: ', error.response.data?.errorMessage);
            return error.response.data?.errorMessage;
        }
    
        return "Unknown error";
    }
}