import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ProductCard from "./pages/ProductCard";
import CartPage from "./pages/CartPage";
import store from "./store/store";

// Define Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} /> {/* Default route */}
      <Route path="product" element={<ProductCard />} />
      <Route path="cart" element={<CartPage />} />
    </Route>
  )
);

// Render Application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
