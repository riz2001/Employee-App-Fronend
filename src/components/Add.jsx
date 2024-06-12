import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const [data,setData]=useState(
        {
            
            "name":"",
            "salary":"",
            "departement":""
          
          
            
        }

    )
    const inputhandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
}
const readvalue=()=>{
    console.log(data)
    axios.post("http://localhost:8006/addemployee",data).then(
        
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("successfully added")

                    }
                    else{
                        alert("error")
                    }


            }
        
    ).catch().finally()
}
    

 

  return (
    <div>
        
        <NavBar/>
        <h1 align="center">ADD DETAILS</h1>
        <br></br>
        <div className="container">
            <div class="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">

                   
                            <label htmlFor="" className="form-label">ID</label>
                            <input type="text" className="form-control" name='id' value={data.id} onChange={inputhandler}/>
                            <br></br>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6-col-lg-6 col-xl-12 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler}/>
                            <br></br>

                            </div>

                     

                        
                        <div className="col col-12 col-sm-6 col-md-6-col-lg-6 col-xl-12 col-xxl-6">
                            <label htmlFor="" className="form-label">SALARY</label>
                            <input type="text" className="form-control" name='salary' value={data.salary} onChange={inputhandler}/>
                            <br></br>

                        </div>

                        
                        <div className="col col-12 col-sm-6 col-md-6-col-lg-6 col-xl-12 col-xxl-6">
                            <label htmlFor="" className="form-label">DEPARTEMENT</label>
                            <input type="text" className="form-control" name='departement' value={data.departement} onChange={inputhandler}/>
                            <br></br>

                        </div>

                        <div className="col col-12 col-sm-6 col-md-6-col-lg-6 col-xl-12 col-xxl-6">
                           <button className="btn btn-success" onClick={readvalue}>SUBMIT  </button>

                        </div>
                   
                  
                   
                    </div>
                </div>
            </div>
        </div>
        </div>



  )
}

export default Add