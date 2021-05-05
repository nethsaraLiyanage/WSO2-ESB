import React,{useState,useEffect} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import '../../assets/uditha.css'




function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const  history = useHistory();


    useEffect(() => {
        document.body.style.backgroundColor = "#282c34"
    })

    function sellerLogin(e) {
        e.preventDefault();
        const user = {
            username,
            password
        }

        const  url = "http://localhost:9000/user/seller-login";
        axios.post(url,user).then((response) =>{

            console.log(user);
            if(response.data.status === 200){
                console.log(response.data);
                let username = response.data.user.username;
                let sellerID = JSON.stringify(response.data.user._id);

                let avatar = response.data.user.profileImg;

                console.log(username);
                console.log(sellerID);

                localStorage.setItem("seller-id",sellerID);
                localStorage.setItem("seller-name",username);
                localStorage.setItem("avatar",avatar);
                alert("logged in");
                history.push("/seller")

            }
            else {

                alert("Login failed!")
            }

        })
    }



    function buyerLogin(e) {
        e.preventDefault();
        const auth = {
            username,
            password
        }
        const  url = "http://localhost:9000/user/buyer-login";
        axios.post(url,auth).then((res) =>{

            if(res.data.status === 200){
                let username = res.data.user.username;
                let buyerID = JSON.stringify(res.data.user.id);
                localStorage.setItem("buyer-id",buyerID);
                localStorage.setItem("buyer-name",username);
                alert("logged in");
                history.push("/")

            }
            else {

                alert("Login failed!")
            }

        })
    }

    return(
        <div>


            <div className="buyerLogin" style={{marginTop:"100px"}}>
                <h3 style={{color:'#61dafb'}}>Buyer Login</h3>
                <form onSubmit={buyerLogin}>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Username</label>
                        <input type="text" className="form-control form-control-lg mb-2" name="email" placeholder="Username" onChange={(e) =>{setUsername(e.target.value)}}/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control form-control-lg mb-2" name="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>



            <div className="sellerLogin" style={{marginTop:"100px"}}>
                <h3 style={{color:'#61dafb'}}>Seller Login</h3>
                <form onSubmit={sellerLogin}>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Username</label>
                        <input type="text" className="form-control form-control-lg mb-2" name="name" placeholder="Username" onChange={(e) =>{setUsername(e.target.value)}}/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control form-control-lg mb-2" name="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

            </div>
        </div>
    )

}

export  default  Login;