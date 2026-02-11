import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div>
      <Link className="text-sm text-blue-500 hover:text-blue-900" to="/menu">
        &larr; Back to menu
      </Link>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
