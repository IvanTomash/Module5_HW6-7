import React, {ReactElement, FC, useEffect} from "react";
import {Box, CircularProgress, Container, Grid, Pagination, Link} from '@mui/material'
import UserCard from "./components";
import HomeStore from "./HomeStore";
import {observer} from "mobx-react-lite";
import { NavLink } from "react-router-dom";


const store = new HomeStore();

const Home: FC<any> = (): ReactElement => {
  return (
      <Container>
        <Link
            key="create-user-route"
            component={NavLink}
            to="/createuser"
            color="black"
            underline="none"
            variant="button"
            sx={{ fontSize: "large", marginLeft: "2rem" }}
            >
                Create User
            </Link>
          <Grid container spacing={4} justifyContent="center" my={4}>
              {store.isLoading ? (
                  <CircularProgress />
              ) : (
                  <>
                      {store.users?.map((item) => (
                          <Grid key={item.id} item lg={2} md={3} xs={6}>
                              <UserCard {...item} />
                          </Grid>
                      ))}
                  </>
              )}
          </Grid>
          <Box
              sx={{
                  display: 'flex',
                  justifyContent: 'center'
              }}
          >
              <Pagination count={store.totalPages}
                          page={store.currentPage}
                          onChange={ async (event, page)=> await store.changePage(page)} />
          </Box>
      </Container>
  );
};

export default observer(Home);