import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();
    const history = useHistory();
    const logout = () => {
        history.push('/login');
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ marginBottom: "20px" }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <div style={{ display: 'flex' }}>
                            <div>Todo List</div>
                            <div style={{ paddingLeft: "20px" }}>Taches</div>
                        </div>
                    </Typography>
                    <Button color="inherit" onClick={logout}>Déconnexion</Button>
                </Toolbar>
            </AppBar>
        </div>
    )

}