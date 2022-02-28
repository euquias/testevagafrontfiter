import React, { Component } from "react";
import axios from 'axios'
import Main from "../template/Main";


const headerprops = {
  icon: 'users',
  title: 'Usuario'
}
const baseURL = " http://localhost:3001/users"

const initialState = {
  user: { nome: '', cargo: '', telefone: '', foto: '' },
  list: []
}
export default class Usercrud extends Component {
  state = { ...initialState }
  componentDidMount() {
    axios(baseURL).then(resp => {
      this.setState({ list: resp.data })
    })
  }
  

  clear() {
    this.setState({ user: initialState.user })
  }
  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseURL}/${user.id}` : baseURL
    axios[method](url.user)
      .then(resp => {
        const list = this.getUpdatedList(resp.data)
        this.setState({ user: initialState.user, list })
      })
  }
  getUpdatedList(user) {
    const list = this.state.list.filter(u => u.id !== user.id)
    if (user) list.unshift(user)
    return list
  }
  /* problema ao setar nome no imput */
  updateField(event) {
    const user = { ...this.state.user }
    user[event.target.nome] = event.target.value
    this.setState({ user })
  }
  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" className="form-control"
                name="nome"
                value={this.state.user.nome}
                onChange={e => this.updateField(e)}
                placeholder="digite o nome..." />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>cargo</label>
            <input type="text" className="form-control"
              name="cargo"
              value={this.state.user.cargo}
              onChange={e => this.updateField(e)}
              placeholder="Digite seu cargo..." />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Telefone</label>
            <input type="text" className="form-control"
              name="telefone"
              value={this.state.user.telefone}
              onChange={e => this.updateField(e)}
              placeholder="Digite seu Telefone..." />
          </div>
        </div>
        <div className="row">
          <div className="col-2 d-flex justify-content-end">
            <button className="btn btn-primary"
              onClick={e => this.save(e)} >
              salvar
            </button>
            <button className="btn btn-secondary"
              onClick={e => this.clear(e)}>
              Canselar
            </button>
          </div>
        </div>
      </div>
    )
  }
  load(user) {
    this.setState({ user })
  }
  remove(user) {
    axios.delete(`${baseURL}/${user.id}`).then(resp => {
      const list = this.getUpdatedList(null)
      this.setState({ list })
    })
  }
  renderRows() {
    return this.state.list.map(user => {
      return (
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                
                  <button className="close"  onClick={() => this.remove(user)} >
                <i className='fa fa-close'></i>
                  </button> 
                <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <p className="card-text">{user.nome}</p>
                <p className="card-text">cargo</p>
                <p className="card-text">{user.cargo}</p>
                <a href="#" className="btn btn-primary">{user.telefone}</a>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <Main {...headerprops}>
        {this.renderRows()}
        {this.renderForm()}
      </Main>
    )
  }
}


