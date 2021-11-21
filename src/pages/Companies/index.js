import React, { useState, useEffect } from 'react'
import NavigationBar from '../../components/NavigationBar'
import { useHistory } from 'react-router-dom'
import './style.css'
import * as M from '@material-ui/core'

const Companies = () => {
  const history = useHistory()

  const [reason, setReason] = useState('')
  const [fantasyName, setFantasyName] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [email, setEmail] = useState('')
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [complement, setComplement] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    if (!reason) {
      alert('Favor inserir a razão social da empresa!')
      return
    }
    if (!fantasyName) {
      alert('Favor inserir o nome fantasia da empresa!')
      return
    }
    if (!cnpj) {
      alert('Favor inserir o CNPJ da empresa!')
      return
    }
    if (!email) {
      alert('Favor inserir o email da empresa!')
      return
    }
    if (!cep) {
      alert('Favor inserir o CEP da empresa!')
      return
    }
    if (!address) {
      alert('Favor inserir o endereço da empresa!')
      return
    }
    if (!number) {
      alert('Favor inserir o número da empresa!')
      return
    }
    if (!neighborhood) {
      alert('Favor inserir o bairro da empresa!')
      return
    }
    if (!city) {
      alert('Favor inserir a cidade da empresa!')
      return
    }
    if (!latitude) {
      alert('Favor inserir a latitude do endereço da empresa!')
      return
    }
    if (!longitude) {
      alert('Favor inserir a longitude do endereço da empresa!')
      return
    }
    try {
      await fetch('http://localhost:3333/empresas', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          reason,
          fantasyName,
          cnpj,
          email,
          cep,
          address,
          number,
          neighborhood,
          city,
          complement,
          latitude,
          longitude
        })
      })
      alert('A Empresa foi cadastrada com sucesso!')
      history.push('/mapa')
    } catch (error) {
      alert('Ocorreu um problema ao cadastrar o produto!')
    }
  }

  return (
    <div className="products-container">
      <NavigationBar />
      <h1>Nova Empresa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Razão Social
            <input
              type="text"
              name="reason"
              value={reason}
              onChange={event => setReason(event.target.value)}
            />
          </label>
          <label>
            Nome Fantasia
            <input
              type="text"
              name="fantasyName"
              value={fantasyName}
              onChange={event => setFantasyName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            CNPJ
            <input
              type="text"
              name="cnpj"
              value={cnpj}
              onChange={event => setCnpj(event.target.value)}
            />
          </label>
          <label>
            Email da Empresa
            <input
              type="email"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            CEP
            <input
              type="text"
              name="cep"
              value={cep}
              onChange={event => setCep(event.target.value)}
            ></input>
          </label>
          <label>
            Endereço
            <input
              type="text"
              name="address"
              value={address}
              onChange={event => setAddress(event.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Número
            <input
              type="number"
              name="number"
              value={number}
              onChange={event => setNumber(event.target.value)}
            ></input>
          </label>
          <label>
            Bairro
            <input
              type="text"
              name="neighborhood"
              value={neighborhood}
              onChange={event => setNeighborhood(event.target.value)}
            ></input>
          </label>
          <label>
            Cidade
            <input
              type="text"
              name="city"
              value={city}
              onChange={event => setCity(event.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Complemento
            <input
              type="text"
              name="complement"
              value={complement}
              onChange={event => setComplement(event.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Latitude
            <input
              type="number"
              name="latitude"
              value={latitude}
              onChange={event => setLatitude(event.target.value)}
            ></input>
          </label>
          <label>
            Longitude
            <input
              type="number"
              name="longitude"
              value={longitude}
              onChange={event => setLongitude(event.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <button>Cancelar</button>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  )
}

export default Companies
