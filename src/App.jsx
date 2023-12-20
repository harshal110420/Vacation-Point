import "./App.css";
import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./pages/HomePage";
import DetailDestinations from "./sections/Destinations/DetailDestinations";
import DestinationPage from "./pages/DestinationPage";
import HotelsPage from "./pages/HotelsPage";
import RestaurantsPage from "./pages/RestaurantsPage";
import BlogsPage from "./pages/BlogsPage";
import LoginPage from "./pages/LoginPage";
import DataPage from "./pages/DataPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<HomePage />} />

      <Route path="destinations" element={<DestinationPage />}></Route>
      <Route path="/destinationsDetails/:id" element={<DetailDestinations />} />

      <Route path="hotels" element={<HotelsPage />}></Route>

      <Route path="restaurants" element={<RestaurantsPage />}></Route>

      <Route path="blogs" element={<BlogsPage />}></Route>

      <Route path="login" element={<LoginPage />}></Route>

      <Route path="yourdata" element={<DataPage />}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
