import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import CreatePage from "./pages/product/create/[productId]";
import EditPage from "./pages/product/edit/[productId]";
import { urls } from "./lib/urls";
import RootLayout from "./layouts/root-layout";
import Paymment from "./pages/payment";
import Main from "./pages/main";


const routers = createBrowserRouter([
  {
    path: urls.home,
    element: <RootLayout />,
    children: [
      {
        path: urls.product,
        element: <HomePage />,
      },
      {
        path: urls.create,
        element: <CreatePage />,
      },
      {
        path: urls.edit,
        element: <EditPage />,
      },
      {
        path: urls.payment,
        element: <Paymment />,
      },
      {
        path: urls.main,
        element: <Main />,
      },

    ],
  },
]);
export default routers;
