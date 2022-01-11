import React from "react";
import {
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase";

const Designs = () => {
  const [user, setUser] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [password, setPasword] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");
  const [account, setAccount] = React.useState(true);

  const toggleAccount = () => {
    setAccount(!account);
    setPasword("");
    setconfirmPassword("");
  };

  const signin = () => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(() => {
        console.log("signed in");
      });
    } catch (e) {
      console.log(e);
    }
  };

  const signup = () => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then(() => {
        console.log("signed up");
      });
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    const unsucscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null)
    });
    return () => unsucscribe();
  }, []);

  return (
    <div id="designs" className="h-screen pt-24 w-5/6 m-auto">
      <h3 className="md:text-5xl text-4xl bg-gradient-to-br font-extrabold border-b-8 border-pink-700 py-1 w-fit  from-red-600 to-blue-700 bg-clip-text text-transparent">
        Designs
      </h3>
      {!user ? (
        <div className="w-full h-5/6 flex flex-col md:flex-row items-center justify-center md:px-5">
          <div className="md:w-1/2 w-5/6">
            <h4>Login here in order to see the available templates</h4>
          </div>
          {account ? (
            <div className="md:w-1/2 w-full">
              <form className="flex flex-col space-y-2 md:w-5/6 bg-white p-4 rounded-lg h-full shadow-2xl">
                <h4 className="text-4xl font-extrabold">Login</h4>
                <label htmlFor="email">Enter Email</label>
                <input
                  value={email}
                  id="email"
                  className="p-2 bg-gray-100 rounded-md"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Enter Password</label>
                <input
                  value={password}
                  id="password"
                  className="p-2 bg-gray-100 rounded-md"
                  type="password"
                  onChange={(e) => setPasword(e.target.value)}
                />
                <div>
                  <button
                    onClick={signin}
                    type="submit"
                    className="px-5 py-2 text-white bg-teal-500 rounded-lg"
                  >
                    Login
                  </button>
                </div>
                <h4
                  onClick={toggleAccount}
                  className="text-teal-700 hover:cursor-pointer"
                >
                  Dont have an account? Signup
                </h4>
              </form>
            </div>
          ) : (
            <div className="md:w-1/2 w-full">
              <form className="flex flex-col space-y-2 md:w-5/6 bg-white p-4 rounded-lg h-full shadow-2xl">
                <h4 className="text-4xl font-extrabold">SignUp</h4>
                <label htmlFor="email">Enter Email</label>
                <input
                  value={email}
                  id="email"
                  className="p-2 bg-gray-100 rounded-md"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Enter Password</label>
                <input
                  value={password}
                  id="password"
                  className="p-2 bg-gray-100 rounded-md"
                  type="password"
                  onChange={(e) => setPasword(e.target.value)}
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  value={confirmPassword}
                  id="confirmPassword"
                  className="p-2 bg-gray-100 rounded-md"
                  type="password"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
                <div>
                  <button
                    onClick={signup}
                    type="submit"
                    className="px-5 py-2 text-white bg-teal-500 rounded-lg"
                  >
                    Signup
                  </button>
                </div>
                <h4
                  onClick={toggleAccount}
                  className="text-teal-700 hover:cursor-pointer"
                >
                  Already have an account? Signin
                </h4>
              </form>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          Some user
        </div>
      )}
    </div>
  );
};

export default Designs;
