import React, { useState } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../firebase";
import { useRouter } from "next/router";

const AuthFlow = () => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPasword] = React.useState("");
  const [signupEmail, setSignupEmail] = React.useState("");
  const [signupPassword, setSignupPasword] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");

  const signin = (event) => {
    event.preventDefault();
    try {
      console.log("called");
      signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(
        (userCredentials) => {
          setUser(userCredentials.user);
          console.log("User added");
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const signup = (event) => {
    event.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, signupEmail, signupPassword).then(
        (userCredentials) => setUser(userCredentials.user)
      );
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    const unsucscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        router.push("/designs");
      } else setUser(null);
    });
    return () => unsucscribe();
  }, [user]);

  return (
    <div className="py-24 w-5/6 m-auto flex flex-col space-y-6">
      <h3 className="md:text-5xl text-4xl bg-gradient-to-br font-extrabold border-b-8 border-pink-700 py-1 w-fit  from-red-600 to-blue-700 bg-clip-text text-transparent">
        Signin or signup
      </h3>
      <div className="flex flex-row items-center justify-evenly">
        <div className="md:w-1/2 w-full">
          <form
            onSubmit={signin}
            className="flex flex-col space-y-2 md:w-5/6 bg-white p-4 rounded-lg h-full shadow-2xl"
          >
            <h4 className="text-4xl font-extrabold">Login</h4>
            <label htmlFor="loginEmail">Enter Email</label>
            <input
              required
              value={loginEmail}
              id="loginEmail"
              className="p-2 bg-gray-100 rounded-md"
              type="email"
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="example@domain.com"
            />
            <label htmlFor="loginPassword">Enter Password</label>
            <input
              required
              value={loginPassword}
              id="loginPassword"
              className="p-2 bg-gray-100 rounded-md"
              type="password"
              onChange={(e) => setLoginPasword(e.target.value)}
              placeholder="Enter the password"
            />
            <div>
              <button
                type="submit"
                className="px-5 py-2 text-white bg-teal-500 rounded-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <h3 className="hidden md:flex text-lg font-bold">
          If you already have an account, Signin here
        </h3>
      </div>
      <p className=" self-center font-bold text-xl">OR</p>
      <div className="flex flex-row items-center justify-evenly">
        <h3 className="hidden md:flex text-lg font-bold">
          If you do not have an account, Signup here
        </h3>
        <div className="md:w-1/2 w-full">
          <form
            onSubmit={signup}
            className="flex flex-col space-y-2 md:w-5/6 bg-white p-4 rounded-lg h-full shadow-2xl"
          >
            <h4 className="text-4xl font-extrabold">SignUp</h4>
            <label htmlFor="email">Enter Email</label>
            <input
              required
              value={signupEmail}
              id="email"
              className="p-2 bg-gray-100 rounded-md"
              type="email"
              onChange={(e) => setSignupEmail(e.target.value)}
              placeholder="Enter email address"
            />
            <label htmlFor="password">Enter Password</label>
            <input
              required
              value={signupPassword}
              id="password"
              className="p-2 bg-gray-100 rounded-md"
              type="password"
              onChange={(e) => setSignupPasword(e.target.value)}
              placeholder="Enter the password"
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              required
              value={confirmPassword}
              id="confirmPassword"
              className="p-2 bg-gray-100 rounded-md"
              type="password"
              onChange={(e) => setconfirmPassword(e.target.value)}
              placeholder="Confirm your password"
            />
            <div>
              <button
                type="submit"
                className="px-5 py-2 text-white bg-teal-500 rounded-lg"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthFlow;
