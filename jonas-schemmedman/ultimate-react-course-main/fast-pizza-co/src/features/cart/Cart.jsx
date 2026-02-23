import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { clearCart } from "./cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((s) => s.user.username);
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <Link className="text-sm text-blue-500 hover:text-blue-900" to="/menu">
        &larr; Back to menu
      </Link>

      <h2 className="mt-6 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-4 divide-y divide-stone-200 border-b ">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-4">
        <Button to="/order/new" type={"primary"}>
          Order pizzas
        </Button>
        <Button onClick={() => dispatch(clearCart())} type={"secondary"}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
