import Navbar from "../../components/Navbar";
import PersonImage from "../../assets/images/person.png";
import { Link } from "react-router-dom";

function ConfirmRegister() {
  return (
    <>
      <Navbar />
      <div className="w-[50%] flex-col items-center bg-custom-dark-blue-color h-[80%] rounded-xl absolute top-[15%] left-[25%]">
        <h1 className="text-center text-[1.5rem] text-white py-[8%] h-[5%]">
          Cadastro realizado com sucesso!
        </h1>
        <img className="w-[60%] h-[50%] mx-[20%]" src={PersonImage} />

        <Link to="/login">
          <button
            className="w-32 h-10 mx-[40%]
       bg-white rounded-md  
        hover:bg-custom-background
         hover:text-white "
          >
            Login
          </button>
        </Link>
        
      </div>
    </>
  );
}

export default ConfirmRegister;
