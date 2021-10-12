import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartAction';
import CheckoutSteps from '../components/CheckoutSteps'

function PaymentMethodScreen(props) {
    const cart = useSelector(state => state.cart);
    const { shippingAdress } = cart;
    if(!shippingAdress.adress){
        props.history.push('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3 ></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div>
                        <input 
                            type="radio" 
                            id="paypal" 
                            value="paypal" 
                            name="paymentMethod" 
                            required 
                            checked 
                            onChannge={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="paypal" >Paypal</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input 
                            type="radio" 
                            id="stripe" 
                            value="stripe" 
                            name="paymentMethod" 
                            required 
                            onChannge={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="stripe" >stripe</label>
                    </div>
                </div>
                <div>
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PaymentMethodScreen
