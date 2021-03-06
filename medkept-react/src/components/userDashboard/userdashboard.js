import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./patient.css";
import Navbar from '../Navbar';
// import HeroSection from '../HeroSection';
import Footer from '../Footer';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";
import { setCertificates, setNames } from "../../features/patient/patient";
import { selectCertificates } from "../../features/patient/patient";
import { selectNames } from "../../features/patient/patient";
import { useSelector } from "react-redux";
function Userdashboard(props) {
    console.log(props.id);
  let [status, setStatus] = useState(false);
  let [ids, setId] = useState("");
//   setId(props.id)
//   console.log(ids);
  //     let uploadfiles=()=>{
  //         document.getElementById('selectfile').click();}
  //    let [state,setState] = useState({ selectedFile: null })
  const [reports, setReports] = useState([]);
  // Put Your moralis api key
  // const API_KEY="b0ZTsBAkR2pmit7Swa0iBvvgHGyKRagDExqbganvnB7Ujir6syvWFBdqi8uTnVCO";

  // const contractAdress = {
  //     rinkeby: '0xAc370Cd368994B60DCBA90835951F9bA945D323c'
  // }

  // network type [ "rinkeby" | "mumbai" ]
  const type = "rinkeby";
  // const type2 = "mumbai"

  // Put users account adress
  // const accountAdress = '0xCF7D9678D93Ce254cFBdD4ACD4008DfaB1437b28';
  // const accountAdress = '0x73e989cc5E69c2254327a1bC317255EF9ADc6985';
  async function Work(props) {
    let arr = [];
    let name = [];
    let x = "";
    // "0xCf7D63056A1363F38B0DE630d70B0F2C9B2CE6ee"
    await axios
      .post(
        `https://medkept.herokuapp.com/patient`,
        { patient:"0xCf7D63056A1363F38B0DE630d70B0F2C9B2CE6ee" },
        {
          headers: {
            Authorization: "Bearer 62324ec714797e008a8409e6",
          },
        }
      )
      .then((res) => {
        console.log(res.data.records);
        res.data.records.map((m) => {
          let z = "https://gateway.moralisipfs.com/ipfs/" + m.substring(7);
          arr.push(z);
        });
        setReports(arr);
      });
    // await axios.get(`https://deep-index.moralis.io/api/v2/${accountAdress}/nft/${contractAdress[type2]}?chain=${type2}&format=decimal`, {
    //     headers: {
    //         'X-API-Key': API_KEY
    //     }
    // }).then((res) => {
    //     console.log(res.data.result)
    //     res.data.result.forEach( async (element) => {
    //         if(element.metadata === null)
    //         {
    //             await axios.get(element.token_uri).then(
    //                 (res)=>{let z="https://gateway.moralisipfs.com/ipfs/"+res.data.image.substring(7);
    //                 setTemp(z);
    //                 setTemp2(res.data.name)
    //                 // console.log(x);
    //             }
    //             )

    //         }
    //         else
    //         {
    //             let a= JSON.parse(element.metadata);
    //         let b = "https://gateway.moralisipfs.com/ipfs/"+a.image.substring(7);
    //         arr.push(b);
    //         name.push(a.name)
    //         }
    //     });
    // })

    // arr.push(temp)
    // name.push(temp2)
    // dispatch(setCertificates(arr))
    // dispatch(setNames(name))
  }
  useEffect(() => Work(), []);
  // const array = useSelector(selectCertificates);
  // const NameArray= useSelector(selectNames);
  let count = 0;
  // console.log(NameArray);
  return (
    <>
      <Dashboard>
      <Navbar />
      
        <Sidebar show={status}>
          <button onClick={() => setStatus(false)}>
            {/* <CloseIcon style={{color:"white"}}/> */}
          </button>
          <Profile>
            {/* <AccountCircleIcon style={{height:"150px" }}/> */}
          </Profile>
          <Name>Profile</Name>
          <Logout>
            {/* <LogoutIcon/> */}
            <span>Logout</span>
          </Logout>
        </Sidebar>
        <Main>
          <SidebarNav>
            <button onClick={() => setStatus(true)}>{/* <MenuIcon/> */}</button>
          </SidebarNav>
          <Top src="dashboard_top.png" />
          {/* <AddButton onClick={uploadfiles}><span>+</span></AddButton> */}
          <Certificate className="certi">Reports</Certificate>
          {/* <input id='selectfile' style={{display:"none"}} type="file"  onChange={fileChangedHandler}/> */}
          {/* <button onClick={uploadHandler}>Upload</button> */}
          {/* <BlankPresentation>
            <Blank src='blank.png'/>
            <div>Nothing Present</div>
            </BlankPresentation> */}
          <Cert>
            {reports.map((e) => {
              return (
                <>
                  <div className="report">
                    <a 
                      href={e}
                      target="blank">                
                      <D className="reports" src={e} />{" "}
                    </a>

                    <a 
                      href={e}
                      target="blank">                
                      <D className="reports" src={e} />{" "}
                    </a>

                    <a 
                      href={e}
                      target="blank">                
                      <D className="reports" src={e} />{" "}
                    </a>

                    <a 
                      href={e}
                      target="blank">                
                      <D className="reports" src={e} />{" "}
                    </a>

                    <a 
                      href={e}
                      target="blank">                
                      <D className="reports" src={e} />{" "}
                    </a>

                    
                    
                    
                  </div>
                </>
              );
            })}
          </Cert>
        </Main>
        <Footer />
      </Dashboard>
    </>
  );
}

export default Userdashboard;

const Dashboard = styled.div`
  // display: flex;
  // flex-direction: row;
  background-color: #444444;
  width: 100vw;
  height: 100vh;
`;
const Sidebar = styled.div`
  // display:none;
  position: fixed;
  background-color: black;
  color: white;
  z-index: 12;
  width: 269px;
  // height: 100vh;
  transition: all 0.6s ease;
  top: 0;
  bottom: 0;
  left: 0;
  transform: ${(props) =>
    props.show ? "translateX(0%)" : "translateX(-100%)"};
`;
const Main = styled.div`
  background-color: #444444;
`;
const AddButton = styled.a`
  position: absolute;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 92px;
  height: 92px;
  background: linear-gradient(360deg, #9b53c7 -91.3%, #1260fd 362.5%);
  left: 87vw;
  top: 21vh;
  span {
    position: absolute;
    font-size: 82px;
    top: -17px;
    color: #121212;
  }
`;
const Certificate = styled.div`
  color: #e5e5e5;

  font-style: normal;
  font-weight: 700;
  font-size: 47px;
  line-height: 55px;
  padding-left: 20px;
`;
const Blank = styled.img`
  width: 385px;
  height: 325px;
`;
const Top = styled.img`
  width: 100vw;
  height: 27vh;
`;
const BlankPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    color: #aaa6a6;
    // font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 59px;
  }
`;
const SidebarNav = styled.div`
  position: absolute;
`;
const Profile = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  svg {
    height: 150px;
    width: 100px;
  }
`;
const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
`;
const Logout = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  justify-content: center;
  bottom: 15vh;
  cursor: pointer;
`;
const D = styled.img`
  height: 250px;
  width: 220px;
`;
const Cert = styled.div``;
const CertName = styled.span`
  color: white;
`;
