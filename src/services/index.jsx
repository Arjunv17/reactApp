import { baseUrl } from "../config";

const Registers = baseUrl + ('api/user/register');
const adminRegisters = baseUrl + ('api/admin/register');
const Logins = baseUrl + ('api/user/login');
const getProductList = baseUrl + ('api/product/getProduct');
const addToCart = baseUrl + ('api/cart/addtocart');
const getCart = baseUrl + ('api/cart/getcart');
const deleteCart = baseUrl + ('api/cart/removeCartItem');
const CheckoutPay = baseUrl + ('api/order/paywithstrip');
const globalSearch = baseUrl + ('api/product/productSearch');
const updateCart = baseUrl + ('api/cart/updateCartItem');


export { Registers, Logins, getProductList, addToCart, getCart, deleteCart ,CheckoutPay, globalSearch ,updateCart,adminRegisters}