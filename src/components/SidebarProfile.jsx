import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

export default function SidebarProfile() {
  return (
    <div>
      <Box sx={{ bgcolor: "#919EAB14", padding: 2, borderRadius: '12px', display: 'flex', gap: 2 }}>
        <Box>
          <Avatar>IM</Avatar>
        </Box>
        <Box>
          <Typography sx={{fontWeight: 600, fontSize: '14px'}}>Ilham Muhamad</Typography>
          <Typography sx={{fontSize: '14px', color: '#919EAB'}}>Administrator</Typography>
        </Box>
      </Box>
    </div>
  );
}
