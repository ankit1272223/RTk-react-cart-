import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  // CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";

function MyCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const TABLE_HEAD = ["Item", "Amount", "Quantity", "Amount Total", "Actions"];

  const TABLE_ROWS = cartItems.map((item) => ({
    id: item.id,
    img: item.image || "https://via.placeholder.com/50",
    name: item.title || "Unnamed Item",
    amount: item.price || "0",
    quantity: item.quantity || "1",
    total: (item.price * item.quantity).toFixed(2) || "0",
  }));

  const filteredRows = TABLE_ROWS.filter((row) =>
    [row.id, row.name, row.amount, row.quantity, row.total]
      .map((value) => value?.toString().toLowerCase())
      .some((value) => value.includes(searchQuery.toLowerCase()))
  );

  return (
    <Card className="h-full w-full mt-3">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {cartItems.length === 0 ? (
            <div>
              <Typography variant="h5" color="blue-gray">
                Your cart is empty
              </Typography>
              <Button
                variant="text"
                color="blue"
                onClick={() => navigate("/product")}
              >
                Go to Shop
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Typography variant="h5" color="blue-gray">
                  Your cart!
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  These are details about the last transactions
                </Typography>
              </div>
              <div className="flex w-full shrink-0 gap-2 md:w-max">
                <div className="w-full md:w-72">
                  <Input
                    label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  />
                </div>
                <Button
                  className="flex items-center gap-3"
                  size="sm"
                  onClick={() => {
                    if (cartItems.length === 0) {
                      navigate("/product"); // Navigate to products page
                    } else {
                      dispatch({ type: "cart/clearCart" }); // Dispatch clear cart action
                    }
                  }}
                >
                
                  {cartItems.length === 0 ? "Add to Item" : "Clear Cart"}
                </Button>
              </div>
            </>
          )}
        </div>
      </CardHeader>
      {cartItems.length > 0 && (
        <>
          <CardBody className="overflow-scroll px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, index) => {
                  const isLast = index === filteredRows.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={row.id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={row.img}
                            alt={row.name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {row.name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>{row.amount}</td>
                      <td className={classes}>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            onClick={() => dispatch(decreaseQuantity(row.id))}
                          >
                            -
                          </Button>
                          {row.quantity}
                          <Button
                            size="sm"
                            onClick={() => dispatch(increaseQuantity(row.id))}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td className={classes}>{row.total}</td>
                      <td className={classes}>
                        <Tooltip content="Remove">
                          <IconButton
                            variant="text"
                            onClick={() => dispatch(removeFromCart(row.id))}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </>
      )}
    </Card>
  );
}

export default MyCart;
