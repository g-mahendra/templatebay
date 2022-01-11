import Link from "next/link";
import React from "react";
import { auth, signOut, onAuthStateChanged } from "../firebase";

const links = [
  {
    id: "1",
    name: "Home",
    link: "#hero",
  },
  {
    id: "2",
    name: "Templates",
    link: "#designs",
  },
  {
    id: "3",
    name: "Contact Us",
    link: "#contact",
  },
];

const Header = () => {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signoutUser = () => {
    signOut(auth);
  };

  return (
    <div className="w-full fixed top-0 backdrop-blur-3xl">
      <div className="w-5/6 m-auto py-5 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between space-x-2">
          <img src="/logo.svg" alt="Website Logo" height={40} width={40} />
          <h1 className="text-xl">TemplateBay</h1>
        </div>
        <ul className="w-1/3 flex flex-row items-center justify-between">
          {links.map((link) => (
            <li key={link.id}>
              <Link href={`${link.link}`}>
                <a className="hover:bg-gray-200 hover:cursor-pointer p-2 rounded-md">
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
          {user ? (
            <li>
              <button
                onClick={() => signoutUser()}
                className="w-fit bg-gradient-to-r from-red-700 to to-pink-700 p-3 rounded-md text-white hover:shadow-2xl hover:shadow-red-700"
              >
                Signout
              </button>
            </li>
          ) : (
            <li>
              <Link href="#designs">
                <button className="w-fit bg-gradient-to-r from-red-700 to to-pink-700 p-3 rounded-md text-white hover:shadow-2xl hover:shadow-red-700">
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
