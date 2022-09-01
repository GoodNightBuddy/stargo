import React from 'react';
import { render, screen } from '@testing-library/react';
import { Accordion } from 'react-bootstrap';
import AccordionItem from './components/AccordionItem/AccordionItem';

const mockUsers = [{
  age: 88,
  country: "United States",
  firstName: "Todd",
  gender: "Male",
  id: "93fd4461-2639-41e0-a281-fdad99936d12",
  lastName: "Smith"
}]

describe('AccordionItem component', () => {
  test('Render all user fields', () => {
    render (
      <Accordion className="mx-auto p-4 container">
        {mockUsers.map(user => <AccordionItem user={user} key={user.id}/>)}
      </Accordion>
    );

    expect(screen.getByText('Age: 88')).toBeInTheDocument();
    expect(screen.getByText('First name: Todd')).toBeInTheDocument();
    expect(screen.getByText('Last name: Smith')).toBeInTheDocument();
    expect(screen.getByText('Country: United States')).toBeInTheDocument();
    expect(screen.getByText('Gender: Male')).toBeInTheDocument();

  });

  test('User info snapshot', () => {
    const view = render (
      <Accordion className="mx-auto p-4 container">
        {mockUsers.map(user => <AccordionItem user={user} key={user.id}/>)}
      </Accordion>
    );

    expect(view).toMatchSnapshot();
  })

});
