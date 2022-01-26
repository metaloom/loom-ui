import * as React from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { drawerWidth } from "./DashboardDrawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth(),
    width: `calc(100% - ${drawerWidth()}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type TopBarProps = {
  open: boolean;
  setOpen: Function;
};

function BreadcrumbArea() {
  return (
    <Grid
      item
      xs={12}
      sx={{
        padding: "10px",
        backgroundColor: "#a3a3a3",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </Grid>
  );
}

const options = [
  { label: "The Godfather", id: 1 },
  { label: "Pulp Fiction", id: 2 },
];

function MainSearchBar2() {
  return (
    <Box
      sx={{
        padding: "10px",
        backgroundColor: "green",
      }}
    >
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={options}
        getOptionLabel={(option) => option.label}
        //defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
        renderInput={(params) => (
          <TextField {...params} label="limitTags" placeholder="Favorites" />
        )}
      />
    </Box>
  );
}

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function MainSearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: 0,
  paddingBottom: 0,
  "@media all": {
    minHeight: 100,
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));

export default function TopBar({ open, setOpen }: TopBarProps) {
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const theme = useTheme();

  return (
    <AppBar position="absolute" open={open}>
      <StyledToolbar
        sx={{
          display: "flex",
          paddingTop: "10px",
          paddingBottom: "0px",
          ...(open && {
            "@media all": {
              paddingLeft: "0px",
              paddingRight: "0px",
            },
          }),
        }}
      >
        <Grid container spacing={0}>
          <Grid
            item
            xs={1}
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={9}
          sx={{
            ...(!open && { paddingLeft: "10px" }),
          }}
          >
            <MainSearchBar />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={1} sx={{ backgroundColor: "red" }}>
            <IconButton
              color="inherit"
              sx={{ flexGrow: 1, alignSelf: "flex-end" }}
              size="large"
              aria-label="display more actions"
              edge="end"
            >
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Grid>

          {/*Second Row*/}
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "green",
              transition: theme.transitions.create(["width", "margin", "padding"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              ...(!open && {
                paddingLeft: "70px",
                transition: theme.transitions.create(["width", "margin", "padding"], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                })                
              }),
            }}
          >
            <BreadcrumbArea />
          </Grid>
        </Grid>
      </StyledToolbar>
    </AppBar>
  );
}
