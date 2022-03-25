import { useState } from 'react';
import { useMoralis } from 'react-moralis';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCertificates,setCertificates } from '../features/metamask/metamaskSlice';
function App() {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    // const dispatch = useDispatch();
    // const [ethid,setEthid]= useState("");
    // setEthid(useSelector(selectCertificates))
    const login = async () => {
      if (!isAuthenticated) {
  
        await authenticate({ signingMessage: "Log in using Moralis" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user.get("ethAddress"));
            // dispatch(setCertificates(user.get("ethAddress")))
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  
    const logOut = async () => {
      await logout();
      console.log("logged out");
    }
  
    return (
      <div>
        <h1>Moralis Hello World!</h1>
        <button onClick={login}>Moralis Metamask Login</button>
        <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
      </div>
    );
  }
  
  export default App;