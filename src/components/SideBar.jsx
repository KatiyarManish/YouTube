import React from "react";
import { categories } from "../utils/constants";
import { Button, Stack } from "@mui/material";

const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        alignItems: "flex-start",
        textTransform: "capitalize",
      }}
    >
      {categories.map((category) => {
        return (
          <Button
            className="category-btn"
            style={{
              background: category.name === "New" && "#FC1503",
              color: "#fff",
            }}
            key={category.name}
          >
            <span
              style={{
                color: category.name === "New" ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span style={{ textTransform: "capitalize" }}>{category.name}</span>
          </Button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
