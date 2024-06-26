import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./routes/ApplicationRoutes";

function App() {
  return (
    <div className="min-h-screen w-full bg-primary text-secondary">
      <BrowserRouter>
        <ApplicationRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
