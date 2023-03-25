import React from "react";
import { Paper, IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { borderRadius } from "@mui/system";

const SearchBar = () => {
  return (
    <div>
      <form onSubmit={() => {}}>
        <input
          style={{
            border: "1px solid",
            borderRadius: "15px",
            padding: "5px 5px",
          }}
          type="text"
          placeholder="Search..."
          value=""
          onChange={() => {}}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
          <Search />
        </IconButton>
      </form>
    </div>
  );
};

export default SearchBar;
