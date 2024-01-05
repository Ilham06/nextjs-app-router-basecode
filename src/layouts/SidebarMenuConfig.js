import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import CampaignTwoToneIcon from '@mui/icons-material/CampaignTwoTone';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import MessageIcon from '@mui/icons-material/Message';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import BusinessCenterTwoToneIcon from "@mui/icons-material/BusinessCenterTwoTone";

export const sidebarMenuList = [
   {
     label: "Dashboard",
     Icon: HomeTwoToneIcon,
     to: "/home",
     roles: ["admin", "superadmin"],
   },
   {
      label: "Master",
      Icon: HomeTwoToneIcon,
      to: "/master",
      roles: ["admin", "superadmin"],
      childern: [
         {
            label: "Branch",
            Icon: BusinessCenterTwoToneIcon,
            to: "/branch",
            roles: ["admin", "superadmin"],
          },
          {
            label: "Supplier",
            Icon: ArticleTwoToneIcon,
            to: "/supplier",
            roles: ["admin", "superadmin"],
          },
      ]
    },
    {
      label: "Processing",
      Icon: BusinessCenterTwoToneIcon,
      to: "/processing",
      roles: ["admin", "superadmin"],
      childern: [
         {
            label: "RND",
            Icon: BusinessCenterTwoToneIcon,
            to: "/branch",
            roles: ["admin", "superadmin"],
          },
          {
            label: "Production Request",
            Icon: ArticleTwoToneIcon,
            to: "/supplier",
            roles: ["admin", "superadmin"],
          },
      ]
    },
    {
      label: "User",
      Icon: PeopleAltTwoToneIcon,
      to: "/user",
      roles: ["admin", "superadmin"],
    },
 ];