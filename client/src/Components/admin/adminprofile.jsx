import React, { Component } from 'react';
import './admin.css';
import jwt_decode from 'jwt-decode';


function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

let fetch_data =[];
const token = jwt_decode(localStorage.getItem('jwtToken'));

class adminProfile extends Component {

    constructor(props){ 
        super(props) 
            
        // Set initial state 
        this.state = {isLoading : true} 
            
        // Binding this keyword 
        this.updateState = this.updateState.bind(this) 
      } 

      updateState(){ 
        // Changing state 
        this.setState({isLoading :false}) 
      } 

    fetchData = async()=>{
        fetch_data = await fetch('http://localhost:5000/api/users/profile',{
            method : "POST",
        headers:{
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            id : token.id
          }),
        })
        .then(res=> {
            if(res.ok) return res.json()
            return res.json().then(json=>Promise.reject(json))
          })
          .then((data)=>{
            return data;
          })
          .catch(e=>{
            console.error(e.error)
          })
          this.updateState();
    }


    componentDidMount(){
        this.fetchData();
    }

  render() {
    if(this.state.isLoading){
        return null;
    }
    else{
        return(
            <div>
              <hr></hr>

            <div class="container bg-white mt-5 mb-5" id='corner'>
            <div class="row">
                        <div class="col-md-3 border-right">
                            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">{fetch_data.name}</span><span class="text-black-50">{fetch_data.email}</span><span> </span></div>
                        </div>
                        <div class="col-md-5 border-right">
                            <div class="p-3 py-5">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h4 class="text-right">User Profile</h4>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-md-12"><label class="labels">Name</label>{fetch_data.name}</div>
                                    
                                </div>
                                <div class="row mt-3">
                
                                <div class="col-md-12"><label class="labels">Email</label>{fetch_data.email}</div>
                                   
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6"><label class="labels">Country</label>{fetch_data.country}</div>
                                </div>
                                <div class="mt-5 text-center"><button id='save_button' type="button" onClick={()=>{
                                    window.location.href = '/updateprofile';
                                }}>Update Profile</button></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-3 py-5">
                            <div class="col-md-12"><label class="labels">Contact</label>{fetch_data.contact}</div>
                
                
                <div class="col-md-12"><label class="labels">Gender</label>{fetch_data.gender}</div>
                            </div>
                        </div>
        </div>
        </div>

        <hr id='profile_break'></hr>
          <div className="admin_contanier">

            

            <div className="admin_delete">
            <label class="_labels">Delete User</label><br></br><input type="text" placeholder="Enter username here" name='username'/>
            <button className='admin_search_button'>Search</button>
            </div>
            
            <hr id='profile_break'></hr>

            <div className="admin_delete">
            <label class="_labels">Delete Hostel</label><br></br><input type="text" placeholder="Enter hostel name here" name='hostel'/>
            <button className='admin_search_button'>Search</button>
            </div>
            <hr id='profile_break'></hr>

            <div className="admin_delete">
            <label class="_labels">Delete Product</label><br></br><input type="text" placeholder="Enter product name here" name='product'/>
            <button className='admin_search_button'>Search</button>
            </div>


          
            


          </div>
        </div>
        )
    }
  }
}

export default adminProfile;
