import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  createStyles,
  AppBar,
  IconButton,
  Toolbar,
  Grid,
  Typography,
  Container,
  TablePagination,
} from '@material-ui/core';
import { FiberManualRecord, ExitToApp } from '@material-ui/icons';
import MaterialTable from 'material-table';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
  }),
);

function Home() {
  const history = useHistory();
  const [userList, setUserList] = useState();
  const [page, setPage] = useState(0);
  const classes = useStyles();
  const columns = [
    {
      title: 'Name',
      field: 'name',
      render: (rowData) => <Typography>{rowData.name.toUpperCase()}</Typography>,
    },
    { title: 'Year', field: 'year' },
    {
      title: 'Color',
      field: 'color',
      render: (rowData) => (
        <Grid container>
          <Grid item>
            <FiberManualRecord style={{ color: rowData.color }} />
          </Grid>
          <Grid item>
            <Typography style={{ marginTop: '1%' }}>{rowData.color}</Typography>
          </Grid>
        </Grid>
      ),
    },
    { title: 'Pantone Value', field: 'pantone_value' },
  ];

  useEffect(() => {
    fetch(`https://reqres.in/api/unknown?page=${page + 1}`)
      .then((response) => response.json())
      .then((data) => setUserList(data));
  }, [page]);

  const handleOnChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <div className={classes.root}>
      <AppBar position='sticky'>
        <Toolbar>
          <Grid container direction='row' justify='flex-start' alignItems='center'>
            <Grid item xs={11}>
              <Typography>HOME</Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={handleLogout}>
                <ExitToApp style={{ color: 'whitesmoke' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Container maxWidth='md' style={{ marginTop: '10%' }}>
        {userList && (
          <MaterialTable
            title='Colour List'
            data={userList.data}
            columns={columns}
            components={{
              Pagination: (pageProps) => (
                <TablePagination
                  {...pageProps}
                  onChangePage={handleOnChangePage}
                  rowsPerPage={userList.per_page}
                  rowsPerPageOptions={[userList.per_page]}
                  count={userList.total}
                  page={page}
                />
              ),
            }}
          />
        )}
      </Container>
    </div>
  );
}

export default Home;
