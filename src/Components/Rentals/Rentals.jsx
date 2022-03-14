import "./Rentals.css";
import axios from "axios";
import { useEffect, useState } from "react";
export const Rentals = () => {
  const [showdata, setShowdata] =useState([]);

  useEffect(()=>{
    getData();
  }, []);

  const getData=()=>{
      axios.get("http://localhost:8080/houses").then((res)=>{
          setShowdata(res.data);
      });
  }

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById"  onClick={() => {
                 showdata.sort((a, b) => {
                    return a.id - b.id;
                  });

                }}>Sort by ID</button>
        <button className="sortByRentAsc"  onClick={() => {
                 showdata.sort((a, b) => {
                    return a.rent - b.rent;
                  });

                }}>Rent Low to high</button>
        <button className="sortByRentDesc"  onClick={() => {
                 showdata.sort((a, b) => {
                    return b.rent - a.rent;
                  });

                }}>Rent High to low</button>
        <button className="sortByAreaAsc"  onClick={() => {
                 showdata.sort((a, b) => {
                    return a.areaCode - b.areaCode;
                  });

                }}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={() => {
                 showdata.sort((a, b) => {
                    return b.areaCode - a.areaCode;
                  });
                  //console.log(showdata)

                }}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {showdata.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.bachelor ? "Bachelor" : "Married"}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
