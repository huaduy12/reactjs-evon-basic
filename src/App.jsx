import "./App.css";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./routes/BlogPage";
import ProfilePage from "./routes/ProfilePage";
import MainLayout from "./routes/MainLayout";
import BlogPageDetail from "./routes/BlogPageDetail";

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
    // <div>
    //   <SignFormHook></SignFormHook>
    // {/* <Toogle></Toogle>
    // <Counter></Counter> */}
    // {/* <Game></Game> */}
    // {/* <GameReducer></GameReducer> */}
    // {/* <CardList></CardList> */}
    // {/* <Photos></Photos> */}
    // {/* <HackerNews></HackerNews> */}
    // {/* <HackerNewsReducer></HackerNewsReducer> */}
    // {/* <TimeStartStop></TimeStartStop> */}
    // {/* <AutoFocus></AutoFocus> */}
    // {/* <TextArea></TextArea> */}
    // {/* <DropDown></DropDown> */}
    // {/* <Blog></Blog> */}
    // {/* <InputForm></InputForm> */}
    // {/* <MovieSearchApp></MovieSearchApp> */}
    // {/* <SignForm></SignForm> */}
    // {/* <HackerNews1></HackerNews1> */}
    // {/* <HackerNewsMutation></HackerNewsMutation> */}
    // {/* <SignFormV2></SignFormV2> */}
    // </div>
    // <Fragment>
    //   <AuthProvider>
    //     <GalleryProvider>
    //       <Header></Header>
    //       <GalleryPhotoList></GalleryPhotoList>
    //       <GalleryCartList></GalleryCartList>
    //     </GalleryProvider>
    //   </AuthProvider>
    // </Fragment>
    <div>
      {/* <Navigation></Navigation> */}
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<div>Home page</div>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog-detail/:detailId"
            element={<BlogPageDetail></BlogPageDetail>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>

        <Route path="*" element={<div>page 404</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
