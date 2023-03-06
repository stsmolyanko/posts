import React, { useEffect, useState } from "react";
import { getPostsApi } from "../../api/posts-api";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

export const PostsPage = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    getPostsApi().then((result) => {
      setPost(result);
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <div>
        <Grid container spacing={2} columns={16}>
          {posts.length > 0 &&
            posts.map((post: any) => {
              return (
                <Grid item lg={8}>
                  <Card
                    key={post.id}
                    sx={{
                      height: "100%",
                      paddingBottom: "5px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      backgroundColor: "#151514",
                    }}
                  >
                    <CardContent>
                      <Avatar sx={{ marginBottom: "10px", bgcolor: "orange" }}>
                        {post.title[0].toUpperCase()}
                      </Avatar>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "18px",
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="white"
                        textAlign="left"
                        marginTop="10px"
                        fontSize="12px"
                      >
                        {post.body}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ marginTop: "auto", marginLeft: "7px" }}>
                      <Button size="small" variant="contained">
                        Share
                      </Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </Container>
  );
};
