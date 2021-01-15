import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({setSearchValue}) => {
  const [inputValue, setInputValue] = React.useState('')
  const  handleClick = (event) => {
    setSearchValue(event.target.value);
    setInputValue(event.target.value)
  } 
    const useStyles = makeStyles((theme) => ({
        root: {
          padding: '1px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 500,
          borderRadius:25,
          border:5,
          boxShadow: '0 2px 5px 2px rgba(000)',
        },
        input: {
          marginLeft: theme.spacing(1),
          flex: 1,
        },
        iconButton: {
          padding:10,
        },
        
      }));
      
     
        const classes = useStyles();
      
        return (
          <Paper component="form" className={classes.root}>
            <InputBase
              onClick={(event) => handleClick(event)}
              className={classes.input}
              placeholder="Поиск по названию"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
            
      
          </Paper>
        );
      
}
export default SearchBar ;