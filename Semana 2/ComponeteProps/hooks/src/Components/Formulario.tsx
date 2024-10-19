    import React, { useState, useEffect } from 'react';


const App: React.FC = () => {

  const [texto, setTexto] = useState<string>('');
  const [colorTexto, setColorTexto] = useState<string>('red');
  const manejadorCambio = (e:any) => {
    setTexto(e.target.value);
  };

  useEffect(() => {
    const contador = texto.length;

    if (contador < 10) {
      setColorTexto('red');
    } else if (contador >= 10 && contador <= 20) {
      setColorTexto('orange');
    } else {
      setColorTexto('green');
    }
  }, [texto]); 

  return (
    <div className="App">
      <h1>Contador de Caracteres</h1>
      <input 
        type="text" 
        value={texto} 
        onChange={manejadorCambio} 

      />
      <p style={{ color: colorTexto }}>
        Número de caracteres en texto: {texto.length}
      </p>
    </div>
  );
}

export default App;