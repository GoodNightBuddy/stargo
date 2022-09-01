import React, { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getUsers, selectILoading, selectUsers } from './features/users/userSlice';
import AccordionItem from './components/AccordionItem/AccordionItem';
import { Loader } from './components/Loader/Loader';

function App() {

  const isLoading = useAppSelector(selectILoading);
  const users = useAppSelector(selectUsers);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);


  if(isLoading) {
    return <Loader />
  }

  // console.log(users)


  return (
    <Accordion className="mx-auto p-4 container">
      {users.map(user => <AccordionItem user={user} key={user.id}/>)}
    </Accordion>
  );
}

export default App;
