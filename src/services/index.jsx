import { baseUrl } from "../config";

const Registers = baseUrl + ('api/user/register');
const Logins = baseUrl + ('api/user/login');
const getProductList = baseUrl + ('api/product/getProduct');

export { Registers, Logins, getProductList }