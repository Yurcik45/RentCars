import React from 'react' ;
import {addResponseActionCreator, updateResponseTextActionCreator} from "../../redux/user-respose-page-reducer";
import UserResponse from "./UserResponse";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        UserResponsePage: state.UserResponsePage,
        newResponseText: state.UserResponsePage.newResponseText
    }

};
const mapDispatchToProps = (dispatch) => {
    return {
        updateResponseText: (text) => {
            let action = updateResponseTextActionCreator(text);
            dispatch(action);
        },
        addResp: () => {
            dispatch(addResponseActionCreator());
        }
    }

};

const UserResponseContainer = connect(mapStateToProps, mapDispatchToProps)(UserResponse);

export default UserResponseContainer;

