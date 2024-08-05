import { Grid, Card, CardContent } from "@mui/material";

const Me = ({user, isAuthenticated, loginWithRedirect}: {user: any, isAuthenticated: boolean, loginWithRedirect: any}) => {
    return (
        isAuthenticated ?
        <>
            <h2>{user?.name}'s Posts</h2>
            <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid item columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Card>
                        <CardContent>
                            <h3>Title of post</h3>
                            <h6>Content of post</h6>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardContent>
                            <h3>Title of post</h3>
                            <h6>Content of post</h6>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardContent>
                            <h3>Title of post</h3>
                            <h6>Content of post</h6>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardContent>
                            <h3>Title of post</h3>
                            <h6>Content of post</h6>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardContent>
                            <h3>Title of post</h3>
                            <h6>Content of post</h6>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
        :
        <>
            {loginWithRedirect()}
        </>
    )
}

export default Me;