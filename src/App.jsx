import AppForm from "./Components/AppForm";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AppEmail from "./Components/pages/AppEmail";
import AppFGC from "./Components/pages/AppFGC";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<AppForm />} />
      <Route path="/email" element={<AppEmail />} />
      <Route path="/fgc" element={<AppFGC />} />
    </>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
