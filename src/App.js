import { useState } from "react";
import PublicaForm from "./components/PublicaForm";
function App() {

  const requisicao = (nome, senha) => {
    const data = { username: nome , password: senha };
    fetch("http://127.0.0.1:8000/api-token-auth/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return "Error:", error;
    });
  }

  //Pra usar o token e gerar a requisição daquele usuário expecífico:

  const api = () => {
  const token ="cbf19ca323572b55b2e3b6107d6927211462478e" //requisicao("Felipe","041822fe");
  console.log(token)

  fetch('http://127.0.0.1:8000/FeedUser/?format=json', {
    headers: {
      'Authorization': `Token ${token}`
    }
  })
    .then(response => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return"Error:", error;
    });
  }

  const[responseData, setResponseData] = useState(api());
  
  return (
    <>
       <p>{responseData.profiles}</p>
      <PublicaForm />
    </>
  );
}

export default App;
