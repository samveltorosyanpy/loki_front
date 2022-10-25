import React from 'react';

const Header = () => {
    const tg = window.Telegram.WebApp;
    const user_name = tg.initDataUnsafe?.user?.username;

    const onClose = () => {
        tg.close()
    }
    return (
        <div className={'header'}>
            <button onClick={onClose}>Brock</button>
            <span className={'username'}>t{user_name}</span>
        </div>
    );
};

export default Header;