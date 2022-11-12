import React from 'react';
import { projectList } from '../Helper/Projects';
import Card from './Card';

const ListItems = ({ id }) => {
  return (
    <ul className="flex flex-wrap items-start py-8 lg:pl-16 overflow-x-hidden overflow-y-clip">
      {projectList.map((card, index) => (
        <Card
          key={card.id}
          {...card}
          index={index}
          isSelected={card.id === id}
        />
      ))}
    </ul>
  );
};

export default ListItems;
