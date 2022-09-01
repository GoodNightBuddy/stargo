import React, { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { getUsers, selectILoading, selectUsers } from './store/users/userSlice';
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

  return (
    <Accordion className="mx-auto p-4 container">
      
      {users.map(user => <AccordionItem user={user} key={user.id}/>)}
    </Accordion>
  );
}

export default App;
