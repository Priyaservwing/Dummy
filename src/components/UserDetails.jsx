import React, { useState } from 'react'

const UserDetails = () => {
    const [userName,setUserName]=useState("priya");
    const [ userAge,setUserAge]= useState(22);

    const changeName= () =>{ 
     setUserName("violet");
    };
    const changeAge= () =>{
      setUserAge("23");
    };
  return (
    <div>
      <h2 >{userName}</h2>
      <h2>{userAge}</h2>
      <button onClick={ changeName}> change name</button>
      <button onClick={changeAge}> change age</button>
    </div>
  )
}

export default UserDetails
