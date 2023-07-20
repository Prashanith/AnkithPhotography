import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SplashScreen from "./screens/splash/splashScreen";
import LandingPage from "./screens/landing/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "home",
    element: <LandingPage />,
  },
]);

function App() {
  return (
    <div className="min-h-screen w-full bg-primary text-secondary">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
