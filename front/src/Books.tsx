import * as React from 'react';
import { useGetBooksQuery } from './hooks/api';

const Books = () => {
  const { loading, data } = useGetBooksQuery();

  if (loading) {
    return <div>loading..</div>;
  }

  return (
    <div>
      {data?.books?.map((v) => (
        <div>
          <span>{v?.author}</span> - <span>{v?.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Books;
