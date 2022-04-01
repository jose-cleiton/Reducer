import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import categories from "./data";
import React from "react";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     categories: [...categories]
  //   }
  // }
  render() {
    return (
      <div className="App">
        <main>
          <Sidebar />
          <Player />
        </main>
      </div>
    );
  }
}

export default App;
