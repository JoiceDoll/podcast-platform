import React, { useState } from "react";
import wallpaperLoginImg from "../../assets/images/loginWallpaper.png";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, serPassword] = React.useState("");

  const handleLoginEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleLoginPassword = (event: React.FormEvent<HTMLInputElement>) => {
    serPassword(event.currentTarget.value);
  };

  return (
    <div className="w-[100%] h-[100vh] flex">
      <div className="w-[50%]  bg-custom-dark-blue-color">
        <div>
          <h1 className="text-center my-[5%] text-white text-[1.5rem]">
            Login
          </h1>
        </div>
        <div className="px-[10%] py-[5%] flex-col h-[70%]">
          <label className=" my-[5%] block text-white text-sm font-bold mb-2">
            E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={handleLoginEmail}
          />
          <label className="block my-[8%] text-white text-sm font-bold mb-2">
            Senha
          </label>
          <input
            className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={handleLoginPassword}
          />
          <button
            className=" w-[100%] my-[8%] shadow bg-black hover:bg-gray-800 -hover focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Entrar
          </button>
          <Link to="/register">
            <button className=" w-[100%] shadow bg-custom-grey-color hover:bg-gray-500  focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded">
              Criar conta
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[50%] h-[100%]">
        <img className="w-full h-full " src={wallpaperLoginImg} />
      </div>
    </div>
  );
}

export default LoginPage;
