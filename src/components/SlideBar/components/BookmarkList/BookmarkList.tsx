import React from 'react';
import { useTestStore } from '@store/test.store';

const BookmarkList = () => {
  const count = useTestStore((state) => state.count);
  return (
    <div>
      {count} <Increase />
      <Clear />
    </div>
  );
};

export default BookmarkList;

const Increase = () => {
  const inc = useTestStore((s) => s.increase);

  return <button onClick={inc}>increase</button>;
};

const Clear = () => {
  const clear = useTestStore((s) => s.clear);

  return <button onClick={clear}>clear</button>;
};
