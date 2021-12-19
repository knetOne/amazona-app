import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

function SellerRoute({component: Component, ...rest}) {
    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin
    return (
        <div>
            <Route 
                {...rest} 
                render={(props) => userInfo && userInfo.isSeller
                    ? (<Component {...props}></Component>) 
                    : (<Redirect to="/signin" />)
                }>
            </Route>
        </div>
    )
}

export default SellerRoute