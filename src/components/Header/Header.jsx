import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";


const Header = () => {
    const {user, onClose} = useTelegram();


    return (
        <div className={'header'}>
            <button onClick={onClose}>Brock</button>
            <span className={'username'}>t{user?.username}</span>
        </div>
    );
};

export default Header;