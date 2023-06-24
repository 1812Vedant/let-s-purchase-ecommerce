import axios, { isCancel, AxiosError } from "axios";

export default function Login() {
  return (
    <>
      <div className="login-container bg-blue-100 flex flex-col  items-center  ">
        <div className="password-email-box py-5 flex flex-col items-end">
          <div className="email flex py-2">
            <p>Email:</p>
            <input
              type="text "
              className="border-blue-800 rounded-md outline-blue-700"
            />
          </div>
          <div className="password flex">
            <p>Password:</p>
            <input
              type="password "
              className="border-blue-800 rounded-md outline-blue-700"
            />
          </div>
        </div>
        <div className="login-signup-box flex ">
          <button className="bg-blue-500 px-2 py-1 my-2 rounded-md mx-4">
            Login
          </button>
          <button className="bg-blue-500 px-2 py-1 my-2 rounded-md mx-4">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}
