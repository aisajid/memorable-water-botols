import { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToLS, getStoredCard, removeFromLS } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';


const Bottles = () => {
    const [bottles, setBottles] =useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data));

    })



    useEffect(()=>{
        // console.log(bottles.length)
        if(bottles.length){
        const storedCart = getStoredCard();
        // console.log(storedCart, bottles);
        const savedCart = [];
        for( const id of storedCart){
            // console.log(id);
        const bottle = bottles.find(bottle => bottle.id === id)
        if(bottle){
            savedCart.push(bottle);
        }     
        }
        // console.log('Saved cart', savedCart);
        setCart(savedCart);
        }
    }, [bottles])

    const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle]
        setCart(newCart);
        console.log(bottle);
        addToLS(bottle.id)
    }

    const handleRemoveFromCart = id =>{
        //visual card remove;
        const remaining = cart.filter( bottle => bottle.id !== id);
        setCart(remaining);
        //remove form local
        removeFromLS(id);

    }


    return (
        <div >
            <h2>Bottles here: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart ={handleRemoveFromCart}></Cart>
            <div className='bottle-container'>
            {
                bottles.map(bottle => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;