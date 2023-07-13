import React, { useState } from "react";
import AddPostForm from "./components/AddPostForm";

import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import PenIcon from "@material-ui/icons/Create";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PostsList from "./components/PostsList";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              style={{ marginTop: "10px" }}
              color="inherit"
            />
            <Typography
              variant="h6"
              color="secondary"
              style={{ flexGrow: "1" }}
            >
              <a href="http://localhost:3000/posts">Blogify</a>
            </Typography>
            <Button
              color="primary"
              variant="outline"
              startIcon={<PenIcon />}
              onClick={handleOpen}
            >
              Yeni Yazı
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container style={{ marginTop: "10px" }}>
          <Grid item xs={12}>
            <Router>
              <Routes>
                <Route path="/" element={<Navigate to="/posts" />} />
                <Route path="/posts" element={<PostsList />} />
              </Routes>
            </Router>
          </Grid>
        </Grid>
      </Container>
      <AddPostForm open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
