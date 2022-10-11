import { baseUrl } from "../config";

const Registers = baseUrl + ('api/user/register');
const Logins = baseUrl + ('api/user/login');
const getProductList = baseUrl + ('api/product/getProduct');
const addToCart = baseUrl + ('api/cart/addtocart');
const getCart = baseUrl + ('api/cart/getcart');
const deleteCart = baseUrl + ('api/cart/removeCartItem');
const CheckoutPay = baseUrl + ('api/order/paywithstrip');


export { Registers, Logins, getProductList, addToCart, getCart, deleteCart ,CheckoutPay }