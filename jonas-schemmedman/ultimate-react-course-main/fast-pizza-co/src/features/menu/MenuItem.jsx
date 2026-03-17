import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { addItem, getCartQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCartQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="mb-4 flex gap-4 py-4  ">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale " : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm">Sold out</p>
          )}

          {isInCart && <DeleteItem pizzaId={id} />}

          {!soldOut && !isInCart && (
            <Button onClick={handleAddToCart} type="small">
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
