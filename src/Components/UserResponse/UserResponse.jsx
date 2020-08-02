import React from 'react' ;
import s from './UserResponse.module.css' ;

const UserResponse = (props) => {
    let state = props.UserResponsePage;
    let ResponseElements = state.Responses.map(m =>
        <div className={s.mainResponse}>
            <div key={m.id} className={s.ResponseElements}>
                {m.response}
                <hr/>
            </div>
        </div>
    );
    let newResponseElement = React.createRef();
    let onResponseChange = (e) => {
        let text = e.target.value;
        props.updateResponseText(text);
    };
    let addResp = () => {
        props.addResp();
    };
    return (
        <div className={s.response}>
            <div className={s.ResponseText}>
                Тут ви можете залишити свій відгук чи пропозицію:
            </div>
            <div className="addResponse">
                <input className={s.ResponseInput} onChange={onResponseChange} ref={newResponseElement}
                       value={props.newResponseText}/>
            </div>
            <div>
                <button className={s.ResponseAddButton} onClick={addResp}> Залишити відгук !</button>
            </div>
            <div className={s.responseItem}>
                {ResponseElements}
            </div>
        </div>
    )
};

export default UserResponse;

