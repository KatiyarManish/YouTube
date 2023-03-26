import { Box, Stack } from "@mui/material";
import React from "react";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => {
        <Box>{item.videoId}</Box>;
      })}
    </Stack>
  );
};

export default Videos;
