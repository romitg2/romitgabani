import "./App.css";
import Available from "./Components/Available";
import Greetings from "./Components/Greetings";
import LoadingProgress from "./Components/LoadingProgress";
import Logo from "./Components/Logo";

function App() {
  return (
    <>
      <div className="">
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
    </>
  );
}

export default App;
