import PropTypes from "prop-types";

const Bottle = ({bottle, handleAddToCart}) => {
    // console.log(bottle)
    const {img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock} = bottle;
    return (
        <div className='bottle-card'>
            <h4>Bottle Name: {name}</h4>
            <img src={img} alt="" width={"300px"} />
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Ratings: {ratings}</p>
            <p>Ratings Count: {ratingsCount}</p>
            <p>Seller: {seller}</p>
            <p>Seller: {seller}</p>
            <p>Shipping: {shipping}</p>
            <p>stock: {stock}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Purches</button>

        </div>
    );
};

Bottle.prototype={
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;