import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { db } from "../firebase";
import { doc, collection, query, where, getDocs } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  /*
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  */

  /*
  class User {
    uid;
    email;
    username;
    name;
    ispublic;

    constructor(uid, email, username, name, ispublic) {
      this.uid = uid;
      this.email = email;
      this.username = username;
      this.name = name;
      this.ispublic = ispublic;
    }
    toString() {
      return this.email + " " + this.name + " " + this.username;
    }
  }

  const userConverter = {
    toFirestore: (user) => {
      return {
        uid: user.uid,
        email: user.email,
        username: user.username,
        name: user.name,
        public: user.public,
      };
    },
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new User(
        data.uid,
        data.email,
        data.username,
        data.name,
        data.public
      );
    },
  };

  const getUserData = async () => {
    const q = query(
      collection(db, "users").withConverter(userConverter),
      where("email", "==", "Juan@gmail.com")
    );
    const querySnapshot = await getDocs(q);

    console.log("querySnapshot");
    console.log(querySnapshot);

    return new User(...querySnapshot[0]);
  };
  */

  useEffect(() => {
    /*
    const fetchData = async () => {
      const data = await getUserData();
      console.log("USUARIOOO");
      console.log(data);

      setName("marcoo");
      setIsPublic(data.ispublic);
      setUsername(data.username);
    };
    */

    const unSub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    /*
    try {
      fetchData();
    } catch (error) {
      console.log("Error obteniendo el usuario");
      console.log(error);
    }
    */

    return () => {
      unSub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
