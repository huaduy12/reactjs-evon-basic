import "./App.css";
import Card from "./components/card/Card";
import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/Game";
import GameReducer from "./components/tictactoe/GameReducer";
import Toogle from "./components/toggle/Toogle";

function App() {
  return (
    // <div className="flex flex-wrap gap-5">
    //   {youtubeData.map((data) => (
    //     <YoutubeList
    //       key={data.id}
    //       image={data.image}
    //       avatar={data.avatar}
    //       title={data.title}
    //       description={data.description}
    //     ></YoutubeList>
    //   ))}
    // </div>
    <div>
      {/* <Toogle></Toogle>
      <Counter></Counter> */}
      {/* <Game></Game> */}
      {/* <GameReducer></GameReducer> */}
      <Card></Card>
    </div>
  );
}

export default App;
