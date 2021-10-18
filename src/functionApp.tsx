import { FC, useCallback, useEffect, useState } from 'react';
import { Twitter } from './functionTwitter';

const App: FC = () => {
  const [loading, setLoading] = useState(false);
  const [actived, setActived] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, [loading]);

  const handleOnRemove = useCallback(() => setActived(false), []);

  const posts = [
    {
      title: 'x1',
      description: 'x2',
    },
    {
      title: 'y1',
      description: 'y2',
    },
  ];

  return (
    <>
      <button type="button" onClick={handleOnRemove}>
        Remover componente
      </button>
      {actived && <Twitter posts={posts} loading={loading} />}
    </>
  );
};

export { App };
