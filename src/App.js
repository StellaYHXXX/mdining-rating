import Main from "./pages/Main/Main";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
