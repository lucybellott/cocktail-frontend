import React from "react";

export default function Search({ search, setSearch, handleSortClick }) {

  return (
    <div className="container" style={{display:'flex'}}>
      <input
        value={search}
        style={{width: "78%", boxShadow: '3px 1px 1px 1px #00000034', marginRight:"10px"}}
        onChange={(e) => {
        
        setSearch(e.target.value);
        }}
        className="form-control"
        type="text"
        placeholder="Search by Ingredient"
        aria-label="readonly input example"
        
      ></input>
      <button onClick={handleSortClick} type="button" className="btn btn-dark">Sort by Likes</button>
      
    </div>
  );
}
