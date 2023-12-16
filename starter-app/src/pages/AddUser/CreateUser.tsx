import React, {ReactElement, FC, useEffect, useState} from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Container,
    Grid,
    Pagination,
    Typography
} from '@mui/material'
import * as userApi from "../../api/modules/users"
import {IUser} from "../../interfaces/users";
import {useParams} from "react-router-dom";
import CreateUserForm from "../../components/Form/CreateUserForm";

const CreateUser: FC<any> = (): ReactElement => {
    return (
          <Container>
            <Typography>Add new user</Typography>
            <Grid container spacing={4} justifyContent="center" m={4}>
              <CreateUserForm>
              </CreateUserForm>
            </Grid>
          </Container>
    );
};

export default CreateUser;