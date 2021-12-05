import { FC, useContext } from 'react';
import { Form } from './Form';
import { ThemeContext } from './Theme';

const Card: FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: '50px',
      }}
    >
      <Form />
      <button
        type="button"
        style={{
          background: theme.primary.background,
          color: theme.primary.color,
        }}
      >
        Card Button 123
      </button>
    </div>
  );
};

export { Card };
