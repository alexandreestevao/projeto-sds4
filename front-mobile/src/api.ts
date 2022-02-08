import axios from "axios";

const BASE_URL = 'https://sds4-estevao.herokuapp.com';

export function fetchOrders() {
    return axios(`${BASE_URL}/orders`);
}

export function confirmDelivery(id: number) {
    return axios.put(`${BASE_URL}/orders/${id}/delivered`)
}