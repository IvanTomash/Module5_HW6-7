import React, { FC, ReactElement, useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { error } from "console";
import { IUser } from "../../interfaces/users";
import * as userApi from "../../api/modules/users";

interface FormData{
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
}

const UserForm: FC<IUser> = (user: IUser): ReactElement => {
    const [updated, setUpdated] = useState<string>("");
    const {
        register,
        handleSubmit,
        formState: { errors },
     } = useForm<FormData>({defaultValues:user});

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        const res = await userApi.updateUser({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            avatar: user.avatar,
        });

        setUpdated(res.createdAt);
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        {...register("first_name", {required: "First Name is required"})}
                        error={!!errors.first_name}
                        helperText={errors.first_name?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        {...register("last_name", {required: "Last Name is required"})}
                        error={!!errors.last_name}
                        helperText={errors.last_name?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        type="email"
                        {...register("email", {required: "Email is required"})}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        label="Avatar"
                        variant="outlined"
                        fullWidth
                        {...register("avatar", {required: "Avatar is required"})}
                        error={!!errors.avatar}
                        helperText={errors.avatar?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
            {updated && <Typography variant="body2">User updated at {updated}</Typography>}
        </Container>
    );
};

export default UserForm;

function setUpdated() {
    throw new Error("Function not implemented.");
}
