import { useNavigate } from "react-router-dom";

import ContactForm from "../components/ContactUs/ContactForm";

import { CONTACT_ULR } from "../resources/contactUrl";

export default function ContactUs() {
    const navigate = useNavigate();

    const submitFormHandler = async (userData) => {

        await fetch(CONTACT_ULR, {
            method: 'POST',
            body: JSON.stringify({
                user: userData
            }),
        });

        navigate('/');
    };

    return (<ContactForm sendForm={submitFormHandler} />);
}