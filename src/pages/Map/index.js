import React, { useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import NavigationBar from '../../components/NavigationBar';
import './style.css';



function App() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
    try {
    let response = await fetch("http://localhost:3333/empresas");
    response = await response.json();
    setCompanies(response);
    }
    catch(error) {
      alert("Ocorreu um problema ao carregar as empresas!");
    }    
  }  
getCompanies();
  },[])

  return (
    <div className="container-map">
      <NavigationBar />
      
        
  <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {
      companies.map(item => (
        <Marker 
        position={[item.latitude, item.longitude]}
        >
          <Popup>
            <p>Razão Social: {item.reason}</p>
            <p>Nome Fantasia: {item.fantasyName}</p>
            <p>CNPJ: {item.cnpj}</p>
            <p>Email: {item.email}</p>
          </Popup>
        </Marker>
      ))
    }
  </MapContainer>
        
      
    </div>
  );
}

export default App;