
 import { useState } from "react";
 import axios from "axios";
export const AddHouse = () => {
  const [formdata, setFormdata] = useState({});
  const handleChange = (e) => {
    const key = e.target.name;
    if (key === "bachelor" || key === "married" ) {
      e.target.value = e.target.checked;
    }
    setFormdata({
      ...formdata,
      [key]: e.target.value,
    });
  };
  
  return (
    <div className="addHouseContainer">
      <form  onSubmit={(e)=>{
           e.preventDefault();
           axios.post("http://localhost:8080/houses", formdata).then(()=>{
              
           })
       }}>
        
        <label>name</label>
        <input type="text" name="Name" onChange={handleChange} className="name"  required />
        <br />
        <label>ownerName</label>
        <input  type="text" name="ownerName" onChange={handleChange} className="ownerName" required />
        <br />
        <label>address</label>
        <input  type="text" name="address" onChange={handleChange} className="address" required />
        <br />
        <label>areaCode</label>
        <input  type="text" name="areaCode" onChange={handleChange} className="areaCode" required />
        <br />
        <label>rent</label>
        <input  type="text" name="rent" onChange={handleChange} className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" onChange={handleChange} name="bachelor" className="bachelor" />
        <br />
        <label>married</label>
        <input  type="checkbox" onChange={handleChange} name="married" className="married" />
        <br />
        <label>image</label>
        <input  type="text" name="image" onChange={handleChange} className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
       }       
