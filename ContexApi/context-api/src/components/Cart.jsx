import { CartContext } from "../store/Shopping-Cart-context";
import { useContext} from "react";
export default function Cart({ onUpdateItemQuantity }) {
  const cartCtx = useContext(CartContext)
  const totalPrice = cartCtx.item.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {cartCtx.item.length === 0 && <p>No items in cart!</p>}
      {cartCtx.item.length > 0 && (
        <ul id="cart-items">
          {cartCtx.item.map((item) => {
            const formattedPrice = `$${cartCtx.item.price.toFixed(2)}`;

           
  return (
    <li key={item.id}>
      <div>
        <span>{item.name}</span>
        <span> ({formattedPrice})</span>
      </div>
      <div className="cart-item-actions">
        <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
          +
        </button>
      </div>
    </li>
  );
})} 
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
