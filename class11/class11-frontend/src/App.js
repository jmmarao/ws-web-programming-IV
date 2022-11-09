import { useState, useEffect } from 'react';

function App() {
  // Retorna uma variável que tem o estado do componente, 
  // e também retorna uma referência para alterar esse estado
  const [state, setState] = useState([]);

  // Sugestão para tratamento de erros (bem simplificado)
  const [erro, setErro] = useState({
    hasErro: false,
    mensagemErro: ""
  });

  // Sempre será executado quando alguma alteração for realizada no componente
  useEffect(
    () => {
      // Executar fetch para pegar informações
      // Necessário criar uma async function pois o fetch é assíncrono (await)
      async function buscaDados() {
        const resposta =
          await fetch('http://localhost:8000/alunos').catch((erro) => {
            // Tratamento de erro de execução
            console.log("Erro ao realizar o fetch");
            setErro({
              hasErro: true,
              mensagemErro: "Erro ao realizar o fetch"
            });
          })
        // Tratamento de erro de aplicação
        //console.table(resposta);
        if (resposta.status >= 200 && resposta.status <= 299) {
          // Caso der tudo certo é executado esse bloco de código
          const respostaJson = await resposta.json();
          setState(respostaJson);
          console.table(respostaJson);
        }
        else {
          console.log(`Erro! Requisição com código ${resposta.status}`);
        }
      }

      buscaDados();

      // Atualizar o state a partir das informações coletadas
    }, []
  );

  return (
    <div>
      <h3>Listagem de professores de uma sala</h3>
{/*       Sugestão de como mostrar o tratamento de erro (não funcionou)
      {erro.hasErro ? <h4>{erro.mensagemErro}</h4> : <h4></h4>} */}
      <ul>
        {state.map((professor, indice) => {
          return <li key={professor.id}>{professor.nome}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
