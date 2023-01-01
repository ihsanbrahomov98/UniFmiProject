import React from "react";
import "./signUpLinePurple.css";
const SignUpLinePurple = () => {
  return (
    <>
      <div className="container d-flex flex-column  justify-content-end align-items-center text-white fw-bold fs-4 signUpLinePurple   ">
        <div className="mb-2">Регистрирай се и спечели</div>
        <button type="button" className="btn bg-white  signUpLinePurple_text">
          Регистрирай се тук
        </button>
        <div className="pt-3 fw-light fs-6 m-3">
          Достъпно за всички наши клиенти
        </div>
      </div>
    </>
  );
};

export default SignUpLinePurple;
