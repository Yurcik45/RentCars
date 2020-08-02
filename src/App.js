import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Contacts from "./Components/Contacts/Contacts";
import {Route} from "react-router-dom";
import UserOfferContainer from "./Components/UserOffer/UserOfferContainer";
import UserResponseContainer from "./Components/UserResponse/UserResponseContainer";
import HomeContainer from "./Components/Home/HomeContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exect path='/useroffer' render={ () => <UserOfferContainer/> }/>
                <Route path='/contacts' render={ () => <Contacts/> }/>
                <Route path='/home' render={ () => <HomeContainer/> }/>
                {/*<Route path='/rent' render={ () => <Rent/> }/>*/}
                {/*<Route path='/news' render={ () => <News/> }/>*/}
                <Route path='/userresponse' render={ () => <UserResponseContainer/> }/>
            </div>
        </div>
    );
}

export default App;
