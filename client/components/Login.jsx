import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login({setUser}) {
  //direct you anywhere as long as you have specified that path before
  const navigate = useNavigate();
  const username = useRef('');
  const password = useRef('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.current,
        password: password.current,
      }),
    })
    if (res.ok) {
      const user = await res.json();
      setUser(user);
      navigate(-1)
    }
  }



  return (
    <div className="fixed flex justify-center items-center top-0 h-screen w-screen bg-opacity-50 bg-slate-950" >
      <div className="flex justify-center items-center bg-black bg-opacity-60 border border-solid border-white rounded-xl w-auto h-auto p-8">
        <form onSubmit={handleSubmit} className="flex flex-col justify-between items-center h-60 rounded-full">
        <p className="w-30 text-right font-black text-4xl text-white">ME WANT FOOD</p>
          <input
            ref={username}
            onChange={(e) => username.current = e.target.value}
            className="w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200"
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            ref={password}
            onChange={(e) => password.current = e.target.value}
            className="w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button className="h-8 w-24 text-white bg-indigo-900 self-center justify-center rounded cursor-pointer">Login</button>
          <button className="cursor-pointer text-white" type="button" onClick={() => navigate(-1)}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
