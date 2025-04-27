import { useContext, useRef } from 'react';
import { CartContext } from '../store/Shopping-Cart-context.js';
import CartModal from './CartModal.jsx';
export default function Header({  onUpdateCartItemQuantity }) {
  const modal = useRef();
const cartContext = useContext(CartContext)
 const cartQuantity = cartContext.item.length>0? cartContext.item.length : 0;
console.log(cartContext)
  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cartContext.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
