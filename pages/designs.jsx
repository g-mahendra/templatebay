import React from "react";
import { auth, onAuthStateChanged, db, collection, getDocs } from "../firebase";
import { useRouter } from "next/router";
import Card from "../components/Card";

const designs = () => {
  const router = useRouter();
  const [user, setUser] = React.useState(null);
  const [templates, setTemplates] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/authflow");
      } else {
        setUser(user);
        const data = await getDocs(collection(db, "templates"));
        var tempData = [];

        data.forEach((doc) => {
          tempData.push(doc.data());
        });

        setTemplates(tempData);
      }
    });

    return () => unsubscribe();
  }, [user]);
  return (
    <div className="pt-24 w-5/6 m-auto">
      <h3 className="md:text-5xl text-4xl bg-gradient-to-br font-extrabold border-b-8 border-pink-700 py-1 w-fit  from-red-600 to-blue-700 bg-clip-text text-transparent">
        Designs
      </h3>
      {user && (
        <div className="w-full h-full flex flex-col md:flex-row p-4">
          {templates
            ? templates.map((item, index) => {
                return <Card key={index} item={item} />;
              })
            : null}
        </div>
      )}
    </div>
  );
};

export default designs;
