import { useRoutes } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import { routes } from "./routes";
function App() {
  const element = useRoutes(routes);
  return (
    <div id="root">
      <NavBar />
      {element}
    </div>
  );
}

export default App;
