import { useNavigate } from "react-router-dom";

import ContactForm from "../components/ContactUs/ContactForm";

export default function ContactUs() {
    const navigate = useNavigate();

    function sendFormHandler(userData) {

        console.log(userData);

        navigate('/');
    }

    return (<ContactForm sendForm={sendFormHandler} />);
}