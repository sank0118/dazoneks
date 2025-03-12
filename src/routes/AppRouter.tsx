import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ImSpinner6 } from "react-icons/im";
const Home = lazy(() => import("./Home"));
const Product = lazy(() => import("./Product"));
const Cart = lazy(() => import("./Cart"));
const MyAccount = lazy(() => import("./MyAccount"));
import RootLayout from "../layouts/RootLayout";

export default function AppRouter() {
  return (
    <Suspense
      fallback={
        <div className="fixed w-full h-screen flex justify-center items-center flex-col gap-y-2.5 ">
          <ImSpinner6 className="text-4xl animate-spin text-theme " />
          <h1>App is Loading</h1>
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={RootLayout}>
            <Route index Component={Home} />
            <Route path="cart" Component={Cart} />
            <Route path="myAccount" Component={MyAccount} />
            <Route path="product" Component={Product} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
