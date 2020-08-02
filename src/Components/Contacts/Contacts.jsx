import React from 'react';
import s from './Contacts.module.css'
import LocationLogo from './img/location.svg'
import CallLogo from './img/turn-left.svg'
import MailLogo from './img/envelope (1).svg'

const Contacts = (props) => {
    return (
        <div className={s.MainDiv}>
            <div className={s.MainText}>
                <span>Зв'яжіться з нами !</span>
                <hr/>
            </div>
            <div className={s.SpanText}>
                <span>Ми надаємо послуги по оренді та прокату автомобілей – надійних та швидких!
                      Наша професійна та дружня команда всеукраїнської копанії "Rent Cars Com"
                      турбується про час та спокій клієнтів.За роки роботи, ми обслужили вже
                      декілька тисяч клієнтів. Ми пропонуємо в оренду гарні, стильні, комфортабельні
                      автомобілі, які оснащені найсучаснішими аксесуарами.</span>
            </div>
            <div className={s.MainBlock}>
                <div className={s.LocationBlock}>
                    <img src={LocationLogo} alt="IMAGE"/>
                    <span>Location</span>
                    <strong>м.Івано-Франківськ</strong>
                </div>
                <div className={s.CallBlock}>
                    <img src={CallLogo} alt="IMAGE"/>
                    <span>Call</span>
                    <strong>+380 50 159 6899</strong>
                </div>
                <div className={s.MailBlock}>
                    <img src={MailLogo} alt="IMAGE"/>
                    <span>Mail</span>
                    <strong>yurcik45mail@gmail.com</strong>
                </div>
                <hr/>
            </div>
        </div>
    )
};

export default Contacts;
