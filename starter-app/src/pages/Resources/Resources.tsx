import React, {ReactElement, FC, useEffect, useState} from "react";
import {Box, CircularProgress, Container, Grid, Pagination} from '@mui/material'
import Res from "./components";
import {observer} from "mobx-react-lite";
import ResourcesStore from "./ResourcesStore";
import * as resourceApi from "../../api/modules/resources";
import { IResource } from "../../interfaces/resources";
import ResourceCard from "./components/ResourceCard";

const store = new ResourcesStore();

const Home: FC<any> = (): ReactElement => {
    const [resources, setResouces] = useState<IResource | null>(null);
  return (
      <Container>
          <Grid container spacing={4} justifyContent="center" my={4}>
              {store.isLoading ? (
                  <CircularProgress />
              ) : (
                  <>
                      {store.users?.map((item) => (
                          <Grid key={item.id} item lg={2} md={3} xs={6}>
                              <ResourceCard {...item} />
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