import { useState, useEffect, useRef } from "react";

import styles from './ContactForm.module.css';

import pizzaImage from '../../assets/pizza.jpg';

const isEmpty = (value) => value.trim() === '';

export default function ContactForm({ sendForm }) {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        email: true,
        phone: true,
        text: true,
    });

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef();
    const textInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredText = textInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredEmailIsValid = !isEmpty(enteredEmail);
        const enteredPhoneIsValid = !isEmpty(enteredPhone);
        const enteredTextIsValid = !isEmpty(enteredText);

        setFormInputsValidity({
            name: enteredNameIsValid,
            email: enteredEmailIsValid,
            phone: enteredPhoneIsValid,
            text: enteredTextIsValid,
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredEmailIsValid &&
            enteredPhoneIsValid &&
            enteredTextIsValid;

        if (!formIsValid) {
            return;
        }

        sendForm({
            name: enteredName,
            email: enteredEmail,
            phone: enteredPhone,
            text: enteredText,
        });
    }

    return (
        <form className={styles.container} onSubmit={submitFormHandler}>
            <div className={styles['contactBox']}>
                <div className={styles.left}>
                    <img src={pizzaImage} alt='Pizza Image' />
                </div>

                <div className={styles.right}>
                    <h2>Contact Us</h2>
                    <input
                        id="name"
                        ref={nameInputRef}
                        type="text"
                        className={styles.field}
                        placeholder="Your Name" />
                    {!formInputsValidity.name && <p className={styles.invalid}>Please enter a valid name!</p>}
                    <input
                        id="email"
                        ref={emailInputRef}
                        type="text"
                        className={styles.field}
                        placeholder="Your Email" />
                    {!formInputsValidity.email && <p className={styles.invalid}>Please enter a valid email!</p>}

                    <input
                        id="phone"
                        ref={phoneInputRef}
                        type="text"
                        className={styles.field}
                        placeholder="Phone" />
                    {!formInputsValidity.phone && <p className={styles.invalid}>Please enter your phone!</p>}

                    <input
                        id="textInput"
                        ref={textInputRef}
                        type="text"
                        className={styles.field}
                        placeholder="Message" />
                    {!formInputsValidity.text && <p className={styles.invalid}>Please enter some text!</p>}


                    <button className={styles.btn}>Send</button>
                </div>
            </div>
        </form >
    );
}