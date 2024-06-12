import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const View = () => {

   
        
    const [data,changedata] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8006/viewemployee").then(
            (Response) => {
                changedata(Response.data)
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])
     return (
        <div>
            <NavBar/>
        
           <div class="card-body">

                <div class="container">
                    <h1 align="center">VIEW DETAILS</h1>
                    <br></br>
                    <div class="row g-3">
                        <div className="col  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <table class="table">
                                <thead>
                                    <tr>

                                        <th scope="col">NAME</th>
                                        <th scope="col">SALARY</th>
                                        <th scope="col">DEPARTEMENT</th>
                                     



                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data.map(
                                            (value, index) => {
                                                return <tr>
                                                    <td>{value.name}</td>
                                                 
                                                    <td>{value.salary}</td>
                                                    <td>{value.departement}</td>





                                                </tr>


                                            }
                                        )
                                    }
                                </tbody>



                            </table>
                        </div>
                    </div>
                </div>



    </div>
    </div>
  )
}

export default View