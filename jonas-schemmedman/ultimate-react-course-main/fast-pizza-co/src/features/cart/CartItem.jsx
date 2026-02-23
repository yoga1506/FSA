import { useDispatch, useSelector } from "react-redux";

import { formatCurrency } from "../../utils/helpers";
import { getCart } from "./cartSlice";
import ItemDelete from "./ItemDelete";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  // function deleteItem(id) {
  //   const updatedCart = cart.filter((item) => item.pizzaId !== id);
  //   dispatch(deleteItem(updatedCart));
  // }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="mx-5 flex items-center justify-between sm:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <ItemDelete pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
