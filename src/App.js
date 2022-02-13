// import logo from './logo.svg';
// import './App.css';
import { Main } from "./components/home/main.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApprovedMain } from "./components/approved/approved.jsx";
import { ApprovedMainSongs } from "./components/songs/approved/approved.jsx";
import { NavBar } from "./components/common/navbar.jsx";
import { Alert } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./components/firebase/firebase.js";
import { Login } from "./components/common/login.jsx";
import { isAdminUser, setAdminUserData } from "./lib/adminUser.js";
import { useState } from "react";
import { MainSongs } from "./components/songs/home/main.jsx";
function App() {
  const [user, loading] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);
  if (loading) return <div>Loading</div>;
  if (!user) {
    return <Login></Login>;
  } else {
    setAdminUserData(user);
    async function func() {
      const res = await isAdminUser(user);
      if (res) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
    func();
    return (
      <div >
        {isAdmin ? (
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <NavBar></NavBar>
            <Routes>
              <Route path={`/approved/message`} element={<ApprovedMain />}></Route>
              <Route path={`/approved/songs`} element={<ApprovedMainSongs />}></Route>
              <Route path={`/disapproved/songs`} element={<MainSongs />}></Route>
              <Route path={`/`} element={<Main />}></Route>

            </Routes>
          </BrowserRouter>
        ) : (
          <div style={{placeItems:"center",height:"100vh",display:"flex",justifyContent:"center"}}>
            <Alert>You are not allowed to see this page</Alert>
          </div>
        )}
      </div>
    );
  }
}

export default App;
