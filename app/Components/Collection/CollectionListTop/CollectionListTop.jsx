import React from 'react';

// Dummy Data
import {cars} from '../../../../public/data/dummyData';
import CollectionItem from '../../CommonComponents/CollectionItem/CollectionItem';

const CollectionListTop = () => {
  return (
    <section className='bg-white'>
        {cars.map(item => (<CollectionItem data={item} key={item._id} />))}
    </section>
  )
}
export default CollectionListTop;
