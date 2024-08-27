import React from 'react';

function Radio() {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChecked({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      <h2>Cores</h2>
      {cor}
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'azul'}
          value="azul"
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'vermelho'}
          value="vermelho"
        />
        vermelho
      </label>
      <h2>Produto</h2>
      {produto}
      <label>
        <input
          type="radio"
          onChange={handleChecked}
          name="produto"
          value="smartphone"
        />
        smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChecked}
          name="produto"
          value="notebook"
        />
        notebook
      </label>
    </form>
  );
}

export default Radio;
