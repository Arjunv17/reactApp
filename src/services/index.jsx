import { baseUrl } from "../config";

const Registers = baseUrl + ('api/user/register');
const Logins = baseUrl + ('api/user/login');
const getProductList = baseUrl + ('api/product/getProduct');
const addToCart = baseUrl + ('api/cart/addtocart');
const getCart = baseUrl + ('api/cart/getcart');

export { Registers, Logins, getProductList, addToCart, getCart }