
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterSreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import ProductListScreen from './screens/ProductListScreen';
import AdminRoute from './components/AdminRoute';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import SellerScreen from './screens/SellerScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import { useEffect } from 'react';
import { listProductCategories } from './actions/productActions';

function App() {
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout())
  }
  useEffect(() => {
    dispatch(listProductCategories())
  }, [dispatch])
  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="row">
              <div>
                  <Link className="brand" to="/">Amazona</Link>
              </div>
              <div>
                <Route render={({history}) => <SearchBox history={history}></SearchBox>}></Route>
              </div>
              <div>
                  <Link to="/cart">Cart
                  {cartItems.length > 0 && (
                    <span className='badge'>{cartItems.length}</span>
                  )}
                  </Link>
                  {
                    userInfo ? (
                      <div className="dropdown">
                        <Link to="#">
                          {userInfo.name} <i className="fa fa-caret-down"></i>{''}
                        </Link>
                        <ul className="dropdown-content">
                          <li>
                            <Link to="/profile">Profile</Link>
                          </li>
                          <li>
                            <Link to="/orderhistory">Order History</Link>
                          </li>
                          <li>
                            <Link to="/" onClick={signoutHandler}>
                              Sign Out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <Link to="/signin">Sign In</Link>
                    )
                  }
                  {userInfo && userInfo.isSeller && (
                    <div className="dropdown">
                      <Link to="#admin">
                        Seller <i className="fa fa-caret-down"></i>
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/productlist/seller">Products</Link>
                        </li>
                        <li>
                          <Link to="/orderlist/seller">Orders</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                  {userInfo && userInfo.isAdmin && (
                    <div className="dropdown">
                      <Link to="#admin">
                        Admin <i className="fa fa-caret-down"></i>
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                          <Link to="/productlist">Products</Link>
                        </li>
                        <li>
                          <Link to="/orderlist">Orders</Link>
                        </li>
                        <li>
                          <Link to="/userlist">Users</Link>
                        </li>
                      </ul>
                    </div>
                  )}
              </div>
          </header>
          <main>
            <Route path="/seller/:id" component={SellerScreen}></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/product/:id" component={ProductScreen} exact></Route>
            <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/register" component={RegisterScreen}></Route>
            <Route path="/shipping" component={ShippingAddressScreen}></Route>
            <Route path="/payment" component={PaymentMethodScreen}></Route>
            <Route path="/placeorder" component={PlaceOrderScreen}></Route>
            <Route path="/order/:id" component={OrderScreen}></Route>
            <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
            <Route path="/search/name/:name?" component={SearchScreen} exact></Route>
            <Route path="/search/category/:category" component={SearchScreen} exact></Route>
            <Route path="/search/category/:category/name/:name" component={SearchScreen} exact></Route>
            <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
            <AdminRoute path="/productlist" component={ProductListScreen} exact></AdminRoute>
            <AdminRoute path="/orderlist" component={OrderListScreen} exact></AdminRoute>
            <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
            <AdminRoute path="/user/:id/edit" component={UserEditScreen}></AdminRoute>
            <SellerRoute path="/productlist/seller" component={ProductListScreen}></SellerRoute>
            <SellerRoute path="/orderlist/seller" component={OrderListScreen}></SellerRoute>
            <Route path="/" component={HomeScreen} exact></Route>
          </main>    
          <footer className="row center">
              All right reserved
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
