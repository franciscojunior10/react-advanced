/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useContext } from 'react';
import { ThemeContext } from './Theme';

// import { Container } from './styles';

const Form: FC = () => {
  const theme = useContext(ThemeContext);

  const renderForm = (
    <form>
      <label>Nome</label>
      <input type="text" />
      <label>E-mail</label>
      <input type="text" />
      <label>Idade</label>
      <input type="text" />
      <label>Nome</label>
    </form>
  );

  const renderNotLogged = <h1>Realize o login</h1>;

  return <div>{!theme.token ? renderNotLogged : renderForm}</div>;
};

export { Form };
