import * as React from "react";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FileIcon from "@mui/icons-material/FileDownload";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
//import MaterialLink from '@mui/material/Link';


const mainListItems = (
  <div>
    <Entry name="Assets" path="assets" />
    <Entry name="Contents" path="contents" />
    <Entry name="Namespaces" path="namespaces" />
    <Entry name="Models" path="models" />
  </div>
);

interface EntryProps {
  name?: string;
  path: string;
}

function Entry(props: EntryProps) {
  return (
    <ListItem button component={Link} to={props.path}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary={props.name}/>
    </ListItem>
  );
}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Admin Area</ListSubheader>
    <Entry name="Users" path="users" />
    <Entry name="Groups" path="groups" />
    <Entry name="Roles" path="roles" />
    <Entry name="Extensions" path="extensions" />
    <Entry name="API Keys" path="auth" />
  </div>
);

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth(),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export function drawerWidth() {
  return 240;
}

type DashboardDrawerLeftProps = {
  open: boolean;
  setOpen: Function;
};

export default function DashboardDrawerLeft({
  open,
  setOpen,
}: DashboardDrawerLeftProps) {
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
}
