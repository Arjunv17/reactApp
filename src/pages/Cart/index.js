import React, { useState, useEffect } from "react";
import style from "../Home/home.css";
import Images from "../../Assets";
import axios from "axios";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { getCart, deleteCart } from "../../services";
import { Link, useNavigate } from "react-router-dom";
import { toastConfig, fireToast } from "../../helper";
import axiosfun from "../../config";
import BasicModal from "../../components/common/modal.jsx";
const Cart = () => {
  const [showCart, setShowCart] = useState([]);
  const navigate = useNavigate();

  function getCartItems() {
    axiosfun()
      .get(getCart)
      .then(function (response) {
        setShowCart(response.data.Data);
       fireToast("success", response.data.Result);
      })
      .catch(function (error) {
        fireToast("error", "This Item is not add in cart");
      });
  }

  function deleteCartItems(id) {
    axiosfun()
      .delete(deleteCart, {
        data: { id: id },
      })
      .then(function (response) {
        fireToast("success", response.data.Result);
        getCartItems();
      })
      .catch(function (error) {
        fireToast("error", "This Item is not add in cart");
      });
  }

  const [showModal, setshowModal] = useState(false);
  const [row, setrow] = useState({});

  const addWorkLog = (item) => {
    setshowModal(true);
    setrow(item);
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      <BasicModal
        visible={showModal}
        setVisible={setshowModal}
        title="Hello"
        footer="close"
        fetch={ getCartItems}
        data={row}
      />
      <section className="cartBody">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <div className="cartWrap">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">UserName</th>
                      <th scope="col">ProductName</th>
                      <th scope="col">ProductPrice</th>
                      <th scope="col">FinalPrice</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {showCart.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.userName}</td>
                        <td>{item.productName}</td>
                        <td>{item.productPrice}</td>
                        <td>{item.finalPrice}</td>
                        <td>{item.productQuantity}</td>
                        <td onClick={() => addWorkLog(item)}>
                          <i class="fa-solid fa-pen-to-square"></i>
                        </td>
                        <td onClick={() => deleteCartItems(item._id)}>
                          <i class="fa-solid fa-trash"></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
