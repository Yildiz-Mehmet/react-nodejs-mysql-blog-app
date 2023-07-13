import React from "react";

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

function App() {
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
            <Button color="primary" variant="outline" startIcon={<PenIcon />}>
              Yeni Yazı
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}

export default App;
