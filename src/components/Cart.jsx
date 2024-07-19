import React, { useState } from 'react';

const Cart = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddClick = () => setCartCount(cartCount + 1);
  const handleRemoveClick = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Number of items in the cart: {cartCount}</h1>
      <div style={styles.buttonContainer}>
        <button onClick={handleAddClick} style={styles.button}>Add to cart</button>
        <button onClick={handleRemoveClick} style={styles.button}>{cartCount}Remove from cart</button>
      </div>
    </div>
  );
};

const styles = {
  container: {

    textAlign: 'left',
    marginTop: '20px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'left',
    gap: '10px',
    marginTop: '10px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default Cart;
