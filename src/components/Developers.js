// @flow
import React from 'react';
import Button from '@material/react-fab/dist';
import '@material/react-fab/dist/fab.css';
import Avatar from './Avatar';
import { developers as className } from './Developers.css';
import type { Person } from '../models/Person';

const AvatarForPerson = ({ avatar, name, ...rest }: Person) => (
  <Button>
    <Avatar {...{ ...rest, src: avatar, alt: name, raised: true }} />
  </Button>
);

type Props = {
  people: Person[],
  onPersonClick: (Person) => (SyntheticTouchEvent<any>) => void,
};

const Developers = ({ people, onPersonClick }: Props) => (
  <div {...{ className }}>
    {people.map((person) => (
      <AvatarForPerson
        {...person}
        key={person.id}
        onClick={onPersonClick(person)}
        width={60}
        height={60}
      />
    ))}
  </div>
);

export default Developers;
