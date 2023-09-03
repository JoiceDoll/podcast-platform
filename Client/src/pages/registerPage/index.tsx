import { useNavigate } from "react-router-dom";
import React from "react";
import Navbar from "../../components/Navbar";
import LoginButton from "../../components/LoginButton";
import api from "../../services/api/api";

function Register() {
  const navigate = useNavigate();
  const [nameData, setNameData] = React.useState("");
  const [emailData, setEmailData] = React.useState("");
  const [passwordData, setPasswordData] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleNameInputClient = (event: React.FormEvent<HTMLInputElement>) => {
    setNameData(event.currentTarget.value);
  };

  const handleEmailInputClient = (event: React.FormEvent<HTMLInputElement>) => {
    setEmailData(event.currentTarget.value);
  };

  const handlePasswordClient = (event: React.FormEvent<HTMLInputElement>) => {
    setPasswordData(event.currentTarget.value);
  };

  const handleConfirmPassword = (event: React.FormEvent<HTMLInputElement>) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const handleRegisterPost = () => {
    postRegisterClient();
  };

  async function postRegisterClient() {
    const requestData = {
      nameData: nameData,
      emailData: emailData,
      passwordData: passwordData,
      confirmPassword: confirmPassword,
    };

    try {
      await api.post("/register", requestData);
      navigate("/welcome");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between px-20 ">
        <Navbar />
        <LoginButton />
      </div>
      <div className="bg-white w-[40%] h-[100%] rounded-xl left-[30%] absolute top-0">
        <div className=" h-[100%] px-14  py-[10%]">
          <h1 className="text-center text-[1.8rem] font-bold">
            Junte-se a <span className="text-custom-blue-color">NÓS</span>
          </h1>
          <div className=" h-[80%] flex justify-between flex-col my-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nome de usuário
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Nome de usuário"
              onChange={handleNameInputClient}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
              E-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="E-mail"
              onChange={handleEmailInputClient}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Senha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Senha"
              onChange={handlePasswordClient}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirme sua senha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Confirme sua senha"
              onChange={handleConfirmPassword}
            />
            <button
              className=" my-3 shadow bg-custom-blue-color hover:bg-sky-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleRegisterPost}
            >
              Registrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
