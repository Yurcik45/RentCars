import React from 'react';
import './UserOffer.css'
import {
    addUserOfferActionCreator,
    updateOfferAVAPostActionCreator,
    updateOfferCITYPostActionCreator,
    updateOfferIDPostActionCreator,
    updateOfferMESSAGEPostActionCreator,
    updateOfferMODELPostActionCreator,
    updateOfferSURNAMEPostActionCreator,
    updateOfferTERMPostActionCreator,
    updateOfferYEARPostActionCreator
} from "../../redux/user-offer-page-reducer";
import UserOffer from "./UserOffer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newIDText: state.UserOfferPage.newIDText,
        newAVAText: state.UserOfferPage.newAVAText,
        newSURNAMEText: state.UserOfferPage.newSURNAMEText,
        newMODELText: state.UserOfferPage.newMODELText,
        newYEARText: state.UserOfferPage.newYEARText,
        newTERMText: state.UserOfferPage.newTERMText,
        newCITYText: state.UserOfferPage.newCITYText,
        newMESSAGEText: state.UserOfferPage.newMESSAGEText,
        UserOfferPage: state.UserOfferPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        onIdChange: (textID) => {
            dispatch(updateOfferIDPostActionCreator(textID));
        },
        onAvaChange: (textAVA) => {
            dispatch(updateOfferAVAPostActionCreator(textAVA));
        },
        onSurnameChange: (textSURNAME) => {
            dispatch(updateOfferSURNAMEPostActionCreator(textSURNAME));
        },
        onModelChange: (textMODEL) => {
            dispatch(updateOfferMODELPostActionCreator(textMODEL));
        },
        onYearChange: (textYEAR) => {
            dispatch(updateOfferYEARPostActionCreator(textYEAR));
        },
        onTermChange: (textTERM) => {
            dispatch(updateOfferTERMPostActionCreator(textTERM));
        },
        onCityChange: (textCITY) => {
            dispatch(updateOfferCITYPostActionCreator(textCITY));
        },
        onMessageChange: (textMESSAGE) => {
            dispatch(updateOfferMESSAGEPostActionCreator(textMESSAGE));
        },
        addOffer: () => {
            dispatch(addUserOfferActionCreator());
        }
    }
};

const UserOfferContainer = connect(mapStateToProps,mapDispatchToProps)(UserOffer);

export default UserOfferContainer;