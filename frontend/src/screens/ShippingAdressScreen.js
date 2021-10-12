import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAdress } from '../actions/cartAction';
import CheckoutSteps from '../components/CheckoutSteps'

function ShippingAdressScreen(props) {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const cart  = useSelector(state => state.cart);
    const {shippingAdress} = cart;
    if(!userInfo){
        props.history.push('/signin')
    }
    const [fullName, setFullName] = useState(shippingAdress.fullName);
    const [adress, setAdress] = useState(shippingAdress.adress);
    const [city, setCity] = useState(shippingAdress.city);
    const [postalCode, setPostalCode] = useState(shippingAdress.postalCode);
    const [country, setCountry] = useState(shippingAdress.country);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAdress({fullName, adress, city, postalCode, country}));
        props.history.push('/payment');
        // TODO: dispatch save shipping adress action
    } 
    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Adress</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Full name</label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Enter full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="adress">Adress</label>
                    <input
                        type="text"
                        id="adress"
                        placeholder="Enter adress"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                        type="text"
                        id="postalCode"
                        placeholder="Enter postal code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        placeholder="Enter Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ShippingAdressScreen
