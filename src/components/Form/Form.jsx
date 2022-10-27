import React, {useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState();
    const [street, setStreet] = useState();
    const [subject, setSubject] = useState();
    const {tg} = useTelegram();

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    useEffect( () => {
        tg.MainButton.setparams({
            text: 'Open the site'
        })
    })

    useEffect( () => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    })

    return (
        <div>
            <h3>write your info</h3>
            <input value={country} onClick={onChangeCountry} className={'input'} type="text" placeholder={"login"}/>
            <input value={street} onClick={onChangeStreet} className={'input'} type="text" placeholder={"password"}/>
            <select value={subject} onClick={onChangeSubject} className={'select'}>
                <option value={'legal'}>fiz</option>
                <option value={'legal'}>ur</option>
            </select>
        </div>);
};

export default Form;