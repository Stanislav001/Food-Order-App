import Modal from '../Modal/Modal';
import './MyCart.css';

const MyCart = (props) => {
    const cartItems = <ul>{[{ id: 'pesho', name: 'dasdsa' }].map(item => {
        <li>{item.name}</li>
    })}</ul>

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onClose}>
                    Close
                </button>
                <button className='button'>Order</button>
            </div>
        </Modal>
    );
}
export default MyCart;