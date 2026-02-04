import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    portfolioWrapper: {
        width: '100%',
        overflow: 'hidden',
        height: '100%',
        minHeight: '100dvh',
        overflowX: 'hidden',
        overflowY: 'auto',
        boxSizing: 'border-box',
    }

}))

export default useStyles;