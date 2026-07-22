import "./App.css";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import CardTailwind from "./components/card/CardTailwind";
import Counter from "./components/counter/Counter";
import MovieSearchApp from "./components/MovieSearchApp/MovieSearchApp";
import HackerNews from "./components/news/HackerNews";
import HackerNews1 from "./components/news/HackerNews1";
import HackerNewsButton from "./components/news/HackerNewsButton";
import HackerNewsReducer from "./components/news/HackerNewsReducer";
import Photos from "./components/photo/Photos";
import Photos1 from "./components/photo/Photos1";
import Game from "./components/tictactoe/Game";
import GameReducer from "./components/tictactoe/GameReducer";
import Toogle from "./components/toggle/Toogle";
import AutoFocus from "./components/useRef/AutoFocus";
import Blog from "./components/useRef/Blog";
import DropDown from "./components/useRef/dropdown";
import TextArea from "./components/useRef/TextArea";
import TimeStartStop from "./components/useRef/TimeStartStop";
import InputForm from "./form/InputForm";
import SignForm from "./form/SignForm";

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
      {/* <CardList></CardList> */}
      {/* <Photos></Photos> */}
      {/* <HackerNews></HackerNews> */}
      {/* <HackerNewsReducer></HackerNewsReducer> */}
      {/* <TimeStartStop></TimeStartStop> */}
      {/* <AutoFocus></AutoFocus> */}
      {/* <TextArea></TextArea> */}
      {/* <DropDown></DropDown> */}
      {/* <Blog></Blog> */}
      {/* <InputForm></InputForm> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      {/* <SignForm></SignForm> */}
      <HackerNews1></HackerNews1>
    </div>
  );
}

export default App;
