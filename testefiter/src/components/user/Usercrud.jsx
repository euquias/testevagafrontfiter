import React, { Component } from "react";
import axios from 'axios'
import Main from "../template/Main";

const headerprops = {
    icon: 'users',
    title: 'Usuario'
}

const baseURL = " http://localhost:3001/users"


const initialState = {
    user: { nome:'', cargo: '', telefone: '', foto: '' },
    list: []
}

export default class Usercrud extends Component {
    state = { ...initialState }
 
    componentDidMount(){
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
        list.unshift(user)
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
                            <label>nome</label>
                            <input type="text" className="forme-control"
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
                    <div className="col-12 d-flex justify-content-end">
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
    render() {
        console.log(this.state.list)
        return (
            <Main {...headerprops}>
                {this.renderForm()}
            </Main>
        )
    }
}