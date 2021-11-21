import React, { useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
import { useHistory} from "react-router-dom";
import './style.css';

const Products = () => {

  const history = useHistory();
 

  const [imageUrl,setImageUrl] = useState("");
  const [productName,setProductName] = useState("");
  const [cost,setCost] = useState("");
  const [description,setDescription] = useState("");
  const [provider,setProvider] = useState("");
  const [group,setGroup] = useState("");
  const [providers,setProviders] = useState([]);
  const [groups,setGroups] = useState([]);

  const handleSubmit = async (event) =>  {
    event.preventDefault();
    if (!imageUrl) {
      alert("Favor inserir a url da imagem!");
      return;
    }
    if (!productName) {
      alert("Favor inserir o nome do produto!");
      return;
    }
    if (!cost) {
      alert("Favor inserir o preço do produto!");
      return;
    }
    if (!description) {
      alert("Favor inserir a descrição do produto!");
      return;
    }
    if (!provider) {
      alert("Favor inserir o fornecedor do produto!");
      return;
    }
    if (!group) {
      alert("Favor inserir o grupo do produto!");
      return;
    }
    try {
      await fetch("http://localhost:3333/produtos", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl,
          productName,
          cost,
          description,
          provider,
          group,
        }),
      });
      alert("O Produto foi cadastrado com sucesso!")
      history.push("/produtos");

    }
    catch(error) {
      alert("Ocorreu um problema ao cadastrar o produto!");
    }

  }

  useEffect(() => {
    async function getProvidersAndGroups(){
      try {
        let responseProviders = await fetch("http://localhost:3333/fornecedores");
        responseProviders = await responseProviders.json();
        setProviders(responseProviders);
        let responseGroups = await fetch("http://localhost:3333/grupos");
        responseGroups = await responseGroups.json();
        setGroups(responseGroups);
      }
      catch(error) {
        alert("Ocorreu um problema ao acessar os fornecedores e os grupos");
      }
    }
    getProvidersAndGroups();
  },[])

  return <div className="products-container">  
  <NavigationBar /> 
  <h1>Novo Produto</h1>
 {imageUrl && <img src={imageUrl} alt="Produto"/>}
  <form onSubmit={handleSubmit}>
    <div>
      <label>
        URL da imagem
        <input type="text" name="imageUrl" value={imageUrl} onChange={ (event) => setImageUrl(event.target.value) }/>
      </label>
    </div>
    <div>
      <label>
        Nome do produto
        <input type="text" name="productName" value={productName} onChange={ (event) => setProductName(event.target.value) }/>
      </label>
      <label>
        Preço do produto
        <input type="text" name="cost" value={cost} onChange={ (event) => setCost(event.target.value) }/>
      </label>
    </div>
    <div>
      <label>
          Descrição do produto
          <textarea  name="description" value={description} onChange={ (event) => setDescription(event.target.value) }/>
      </label>
    </div>
    <div>
      <label>
          Fornecedor
          <select  name="provider" value={provider} onChange={ (event) => setProvider(event.target.value) }>
            {providers.map(item => <option value={item}>{item}</option>)}
          </select>
      </label>
      <label>
          Grupo
          <select  name="group" value={group} onChange={ (event) => setGroup(event.target.value) }>
          {groups.map(item => <option value={item}>{item}</option>)}
          </select>
      </label>
    </div>
    <div>
      <button>Cancelar</button>
      <button type="submit">Cadastrar</button>
    </div>

  </form>

  </div> 
}

export default Products;