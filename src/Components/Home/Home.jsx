import React from 'react';
import s from './Home.module.css'
import TelSvg from './speech-bubble.svg'
import LocSvg from './location.svg'

const Home = (props) => {
    let state = props.UserOfferPage;
    let AllUserItems = state.UserItem.map(u =>
        <div>
            <div key={u.id} className={s.UserOfferItemColumns}>
                <div className={s.UsOfItems}>
                    <ul type="circle">
                        <li><strong> Ціна, $: </strong> {u.id} </li>
                        <li><strong> Ім'я: </strong> {u.ava} </li>
                        <li><strong> Прізвище: </strong> {u.surname} </li>
                        <li><strong> Модель: </strong> {u.model} </li>
                        <li><strong> Рік випуску авто: </strong> {u.year} </li>
                        <li><strong> Термін користування: </strong> {u.term} </li>
                        <li><strong> Місто: </strong> {u.city} </li>
                    </ul>
                </div>
                <div className={s.UsOfMessage}>
                    <strong> Інформація про автомобіль: </strong> <br/> <br/> <span> {u.message}  </span>
                </div>
                <div className={s.UsOfPhoto}>
                    <strong> Фото авто: </strong> <br/> <span> В розробці...</span>{u.photo}
                </div>
            </div>
            <div className={s.hrr}>
                <hr/>
            </div>
            <br/>
        </div>
    );

    const allUserOffer = () => {
        return (
            <div className={s.Offer}>
                {AllUserItems}
            </div>
        )
    };
    return (
        <div>
            <div className={s.mainDiv}>
                <div className={s.mainDiv}>
                    <div className={s.firstImg}>
                        <div className={s.BLOCK}>
                            <div className={s.opacity}>
                                <div className={s.textLeft}>
                                    <strong>Замов авто у подорож</strong> <br/>
                                    <span>Надійні автомобілі за низькою ціною, від ₴400 / день</span>
                                </div>
                                <div className={s.textRight}>
                                    <div className={s.rightBlockOne}>
                                        <div className={s.TelImg}>
                                            <img className={s.TelImg} src={TelSvg} alt="" align="middle"/>
                                        </div>
                                        <di>
                                            <div className={s.spanOne}>Легкий спосіб зв'язатись з нами</div>
                                            <div className={s.spanTwo}>+380666660708</div>
                                        </di>
                                    </div>
                                    <div className={s.rightBlockTwo}>
                                        <div className={s.LocImg}>
                                            <img className={s.LocImg} src={LocSvg} alt="" align="middle"/>
                                        </div>
                                        <div className={s.LocationDiv}>Місцезнаходження</div>
                                        <div className={s.spanThree}>Івано-Франківськ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={s.mainImg}>
                        {allUserOffer()}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;