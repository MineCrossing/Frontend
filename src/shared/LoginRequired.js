import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(6, "auto"),
        "& p": {
            fontSize: "1.2em",
            fontWeight: "600",
            marginTop: 0
        },
        "& div a": {
            margin: theme.spacing(1, 2)
        }
    },
}));

function LoginRequired() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <p>You must be logged in to view this page</p>
            <div>
                <Button variant="contained" color="secondary" href={"/"}>Back To Home</Button>
                <Button variant="contained" color="primary" href={"https://store.minecrossing.xyz/login"}>Go To Login</Button>
            </div>
        </main>
    );
}

export default LoginRequired;
