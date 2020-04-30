import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form_container: {
        marginTop: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    form: {
        width: '100%', 
        marginTop: 1,
    },
    textField: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
    button: {
        backgroundColor: "#0a614d",
        color: "white",
        marginTop: theme.spacing(2),
    }
}));

export default useStyles;

