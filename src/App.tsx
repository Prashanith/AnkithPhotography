import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./routes/ApplicationRoutes";

function App() {
  return (
    <div className="min-h-screen w-full bg-secondary text-primary relative">
      <BrowserRouter>
        <ApplicationRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
