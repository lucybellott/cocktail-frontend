import React, { useState } from "react";

export default function Search({ search, setSearch }) {

  return (
    <div class="container">
      <input
        value={search}
        style={{width: "86%", boxShadow: '3px 1px 1px 1px #00000034'}}
        onChange={(e) => {
        
        setSearch(e.target.value);
        }}
        class="form-control"
        type="text"
        placeholder="Search by Ingredient"
        aria-label="readonly input example"
        readonly
      ></input>
    </div>
  );
}
