import Navbar from "../../components/Navbar";
import LoginButton from "../../components/LoginButton";
import PodText from "../../assets/images/POD.png";
import CastText from "../../assets/images/CAST.png";
import PlayPause from "../../assets/images/play.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-1/4 h-3/4 bg-custom-blue-color absolute right-0 z-1 flex">
        <div className="h-80 w-1/2  my-28 align-center px-5">
          <img src={PodText} />
        </div>
        <div className="h-80 w-1/2 my-28 align-center px-10">
          <img src={CastText} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between px-20 ">
        <Navbar />
        <LoginButton />
        <h1 className="text-white items-center text-[2rem]  absolute top-[30%] left-[5%] z-10">
          Seus PODCASTS favoritos{" "}
          <span className="bg-custom-blue-color">AQUi.</span>
        </h1>
        <div className="absolute top-[40%] left-[20%] w-[5%] h-[5%] "></div>
      </div>
      <div className="w-[30%] h-[15%] absolute top-[55%] border border-gray-400 left-[8%] flex ">
        <Link to="/register">
          {" "}
          <img
            src={PlayPause}
            className="my-2 mx-4 cursor-pointer hover:scale-105 hover:transition "
          />
        </Link>
        <div className="text-white text-[1.3rem] my-[2%] mx-[5%] text-center">
          <p>Junte-se a</p>
          <h3 className="font-bold">COMUNIDADE</h3>
        </div>
      </div>
    </>
  );
}

export default Home;
