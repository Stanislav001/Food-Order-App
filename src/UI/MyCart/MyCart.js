import './MyCart.css';

const MyCart = (props) => {
    const cartItems = <ul>{[{ id: 'c1', name: 'das', amount: 2, price: 2312 }].map(item => {
        <li>{item.name}</li>)
    }</ul>
};

return (
    <div className='total'>
        {cartItems}
        <div>
            <span>Total Amount: </span>
        </div>
        <div>
            <span>40.50</span>
        </div>

        <div className='actions'>
            <button className='button--alt'>Close</button>
            <button className='button'>Order</button>
        </div>
    </div>
);
}

export default MyCart;