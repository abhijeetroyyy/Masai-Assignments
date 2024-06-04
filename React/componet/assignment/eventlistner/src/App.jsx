import "./App.css";
import EventListener from "./components/EventListener";
import Posts from "./components/Post";
import DynamicTitleComponent from "./components/DynamicTitleComponent";

function App() {
  return (
    <>
      <DynamicTitleComponent />
      <EventListener />
      <Posts />
    </>
  );
}

export default App;
