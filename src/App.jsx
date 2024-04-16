import "./App.css";
import Available from "./Components/Available";
import { Blank } from "./Components/Blank";
import Greetings from "./Components/Greetings";
import LoadingProgress from "./Components/LoadingProgress";
import Logo from "./Components/Logo";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <div className="h-[100vh]">
        <Logo />
        <Available />
        <Greetings duration={100} spread={5} />
        <blockquote className="italic mt-[80vh] pl-4 my-8 text-md font-serif relative">
          ❝ Patience is not the ability to wait,
          <br /> but the ability to keep a good attitude while waiting ❞
          <cite className="block ml-[60vw] md:ml-[30vw] text-sm font-sans mt--1">
            — Joyce Meyer
          </cite>
        </blockquote>
      </div>
      <LoadingProgress />
      <div className="w-full fixed bottom-0 justify-center flex ">
        <div className="bg-green-600 rounded-full w-[50vw] h-1"></div>
      </div>
      <NavBar />
      <Blank />
    </>
  );
}

export default App;
