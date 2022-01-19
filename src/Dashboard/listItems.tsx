import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FileIcon from '@mui/icons-material/FileDownload'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <div>
    <Entry name="Assets"/>
    <Entry name="Contents"/>
    <Entry name="Namespaces"/>
    <Entry name="Models"/>
  </div>
);

interface EntryProps {
  name?: String;
}


function Entry(props: EntryProps) {
  return (
  <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary={props.name} />
    </ListItem>
  );
}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Admin Area</ListSubheader>
    <Entry name="Users"/>
    <Entry name="Groups"/>
    <Entry name="Roles"/>
    <Entry name="Extensions"/>
    <Entry name="API Keys"/>
  </div>
);
