// importing from react
import { useState, useEffect, useReducer, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { delay } from "../config/utils";
import { Store, getError } from "../config/utils";
import { useForm } from "react-hook-form"
import 'boxicons'


export const AddUser=()=>{

    const [users,setUsers]=useState([])

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()

    const getAllUsers=async()=>{
        try {
            const res=await axios.get("/api/users")
            setUsers(res.data.filter((user)=>user.email!=='admin@gmail.com'))
        } catch (error) {
            console.log(error)
        }
    }
    const updateUser = async (id, isAdmin) => {
        try {
            console.log(isAdmin);
            const res = await axios.patch(`/api/users/${id}`, { "isAdmin": isAdmin });
    
            // Use findIndex instead of find to get the index
            const index = users.findIndex((user) => user._id === res.data._id);
    
            if (index !== -1) {
                // Create a new array with the updated user
                const updatedUsers = [...users];
                updatedUsers[index] = res.data;
    
                console.log(updatedUsers);
    
                // Assuming you want to set the state with the updated array
                setUsers(updatedUsers);
            } else {
                console.log("User not found in the current state");
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    const deleteUser=async(id)=>{
        try {
            const res=await axios.delete(`/api/users/${id}`)
            setUsers(users.filter((user)=>user._id!==res.data._id))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllUsers()
    },[])

    console.log(users)

    return (
        <>
                <div style={{display:"flex",flexDirection:"row-reverse"}}>

                    <div style={{flex:.3,height:"30rem",overflowY:'scroll'}}>
                        <h1 className="title">Manage Users</h1>

                        <div style={{marginTop:"2rem"}}>
                            
                                               {
                            users.length===0?(
                                <h4>No Users are created, atleast make one to manage them</h4>
                            ):
                            users.map((user)=>(
                                <div style={{position:'relative',display:'flex',justifyContent:'space-around',flexDirection:"column",marginTop:'1rem',padding:'2rem'}} className="input">

                                    <p>{user.name}</p>
                                    <p>{user.isAdmin?"Admin":"User"}</p>

                                    <div style={{position:"absolute",right:5,top:5,cursor:"pointer"}}>
                                        <button onClick={()=>updateUser(user._id,user.isAdmin?false:true)}>
                                            <box-icon name="edit"></box-icon>
                                        </button>
                                        <button onClick={()=>deleteUser(user._id)}>
                                            <box-icon name="trash"></box-icon>
                                        </button>
                                    </div>
                           
                                </div>   
                            ))
                        }
                        
                        </div>    

                    </div>
                
                    <div style={{flex:.4}} className="admin-forms">
                        <div className="form">
                            <h1 className="title">Add User</h1>    
                            <form style={{marginTop:'2rem'}} noValidate onSubmit={handleSubmit((data)=>{

                                const addUser=async()=>{
                                    try {
                                        const res=await axios.post("/api/users/createUserAdmin",data)
                                        setUsers((prev)=>[...prev,res.data])
                                        reset()

                                    } catch (error) {
                                        console.log(error)
                                    }
                                }
                                addUser()
                                
                            })}>
                                {/* name */}
                                <div className="input-box">
                                    <label
                                        htmlFor="p_id">
                                        Name
                                    </label>
                                    
                                    <input {...register("name",{required:"name is required"})} className="input" type="text" placeholder="Eg. Corns" />
                                </div>

                                {/* email */}
                                <div className="input-box">
                                    <label
                                        for="new_name">
                                        Email
                                    </label>
        
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Eg: 5"
                                        autocomplete="off"
                                        required
                                        {...register("email",{required:"qty is required"})}
                                    />
                                </div>

                                {/* gender */}
                                <div className="input-box">
                                    <label
                                        htmlFor="cat">
                                        Gender
                                    </label>
        
                                    <select {...register("gender",{required:"gender is required"})} className="input">
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                    </select>
                                </div>
                                
                                {/* password */}
                                <div className="input-box">
                                    <label
                                        for="p_qty">
                                        Password
                                    </label>
                                    <input {...register("password",{required:"password is required"})} className="input" type="text" placeholder="Eg: 1237**" />

                                </div>

                                <div className="input-box">
                                    <button
                                        className="form-btn"
                                        type="submit">
                                        Add User
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>  
                </div>
        </>
    );
};
