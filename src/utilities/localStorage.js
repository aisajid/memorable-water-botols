const getStoredCard =()=>{
    const storedCardString = localStorage.getItem('cart');
    if(storedCardString){
        return JSON.parse(storedCardString);
    }
    return [];
}
const saveCartToLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLS = id =>{
    const cart = getStoredCard();
    cart.push(id);
    saveCartToLS(cart);
}

const removeFromLS = id =>{    
    const cart = getStoredCard();
    // removing every matched id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}

export {addToLS, getStoredCard, removeFromLS}