import { Box, Card, CardContent, Grid, Link } from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'

const Communities = () => {
    const communs = [
        {name: "Gardening", members: 100},
        {name: "Gaming", members: 1000},
        {name: "TV", members: 3247892},
        {name: "Movies", members: 3489},
    ]

    return (
        <>
            <Box>
                <h1>Find a Community!</h1>
                <br/>
                <Grid container rowSpacing={10} columnSpacing={10} overflow="auto">
                    {communs.map((item, _) => (
                        <>
                            <Grid item xs={6}>
                                <Link component={RouterLink} to={`/communities/${item.name}`} color="inherit">
                                    <Card>
                                        <CardContent>
                                            <h3>{item.name}</h3>
                                            <h4>Members: {item.members}</h4>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        </>
                    ))}
                </Grid> 
            </Box>
        </>
    )
}

export default Communities;