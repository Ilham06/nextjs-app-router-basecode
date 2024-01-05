import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarMenuList({ menu }) {
  const [openExpand, setOpenExpand] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter()

  const handleClick = () => {
    setOpenExpand(!openExpand);
  };

  const isHasChildern = (childern) => {
    if (childern) {
      handleClick();
    }
  };

  const handleNavigate = () => {
   if (!menu.childern) {
      return router.push(menu.to)
   }
  }

  const isMenuSelected = (to, path) => {
    return path.includes(to);
  };

  return (
    <div>
      <ListItem disablePadding sx={{ display: "block" }} onClick={handleNavigate}>
        <ListItemButton
          onClick={(e) => isHasChildern(menu.childern)}
          selected={isMenuSelected(menu.to, pathname)}
          sx={{
            minHeight: 56,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
            my: 1,
            "&:hover": {
              bgcolor: "secondary",
            },
            borderRadius: 4
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
            <menu.Icon />
          </ListItemIcon>
          <ListItemText
            primary={menu.label}
            sx={{ opacity: open ? 1 : 0 }}
            primaryTypographyProps={{
              color: menu.label == "Project" ? "primary" : "#637381",
              fontWeight: menu.label == "Project" ? 600 : 400,
            }}
          />
          {/* {openExpand ? <ExpandLess /> : <ExpandMore />} */}
        </ListItemButton>
        {Object.prototype.hasOwnProperty.call(menu, "childern") && (
          <Collapse in={openExpand} timeout="auto" unmountOnExit>
            <List sx={{ml: 2}} component="div" disablePadding>
              {
               menu.childern.map((childMenu, index) => {
                  return (
                     <SidebarMenuList menu={childMenu} key={childMenu.label}/>
                  )
               })
              }
            </List>
          </Collapse>
        )}
      </ListItem>
    </div>
  );
}
