import axios from "axios";

const BASE_URL = 'http://localhost:8080';

export function fetchProducts() {
return axios(`${BASE_URL}/products`)
}