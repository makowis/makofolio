// @flow
import React from 'react';
import Avatar from './Avatar';
import { developers as className } from './Developers.css';
import type { Person } from '../models/Person';

const AvatarForPerson = ({ avatar, name, ...rest }: Person) => (
  <Avatar {...{ ...rest, src: avatar, alt: name }} />
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
        width={40}
        height={40}
      />
    ))}
  </div>
);

export default Developers;
