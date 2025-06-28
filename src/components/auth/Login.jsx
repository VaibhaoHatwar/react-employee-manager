import { useState } from "react";

const Login = ({loginHandler}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-2 border-emerald-600 rounded-full bg-transparent outline-none text-xl px-5 py-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-2 border-emerald-600 rounded-full bg-transparent outline-none text-xl px-5 py-3 mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter Password"
            required
          />
          <button className="border-none bg-emerald-600 rounded-full outline-none text-xl px-8 py-2 mt-7 hover:bg-emerald-700 font-semibold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
