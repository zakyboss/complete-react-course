import { useState } from "react";
import Player from "./components/Player";
function App() {
  // const [myName , setMyName] = useState("")
  return (
    <>
      <Player/>
      <div id="challenges"></div>
    </>
  );
}

export default App;
