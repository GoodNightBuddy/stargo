import React, { FC } from 'react';
import { Accordion } from 'react-bootstrap';
import { User } from '../../features/users/userSlice';

interface AccordionItemProps {
  user: User
}

const AccordionItem: FC<AccordionItemProps> = (props) => {
  return (
    <Accordion.Item eventKey={props.user.id}>
      <Accordion.Header>{props.user.firstName}</Accordion.Header>
      <Accordion.Body>
        <p>First name: {props.user.firstName}</p>
        <p>Last name: {props.user.lastName}</p>
        <p>Age: {props.user.age}</p>
        <p>Gender: {props.user.gender}</p>
        <p>Country: {props.user.country}</p>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionItem;