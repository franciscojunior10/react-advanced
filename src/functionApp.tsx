import { FC, useCallback, useEffect, useState } from 'react';
import { Card } from './Card';
import { Twitter } from './functionTwitter';
import { ThemeContext, theme } from './Theme';

const App: FC = () => {
  const [loading, setLoading] = useState(false);
  const [actived, setActived] = useState(true);
  const [token1, setToken1] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setToken1('dfjlsadhflaskdhflasjkdhfklasdhflasdjhf');
    }, 4000);
  }, [setToken1]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      console.log(theme);
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
    <ThemeContext.Provider
      value={{
        primary: theme.primary,
        secondary: theme.secondary,
        token: token1,
      }}
    >
      {/* <button type="button" onClick={handleOnRemove}>
        Remover componente
      </button>
      {actived && <Twitter posts={posts} loading={loading} />} */}
      <Card />
    </ThemeContext.Provider>
  );
};

export { App };
