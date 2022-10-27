import React from "react";
import Button from "../button/Button";
import './Header.css';
import {useTelegram} from "../../hooks/useTelegram";


const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button className={onClose}>Brock</Button>
            <span className={'username'}>
                {user.username}
            </span>
        </div>
    );
};

export default Header;