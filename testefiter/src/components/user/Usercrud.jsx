import React, { Component } from "react";
import axios from 'axios'
import Main from "../template/Main";

const headerprops = {
    icon: 'users',
    title: 'Usuario'
}

const baseURL = "https://gist.githubusercontent.com/alencarlucas/4cd794e2e44bbe926ea4ab28da2fa3e7/raw/2c304035b03c3c5e2e708e4e82c49a42899e47ed/fiter.json"


const initialState = {
    user: { nome: '', cargo: '', telefone: '', foto: '' },
    list: []
}

export default class Usercrud extends Component {
    state = { ...initialState }
    clear(){
        this.setState({user: initialState.user })
    }
    save(){
            const user = this.state.user
            const method = user.id ? 'put' : 'post'
            const url = user.id ? `${baseURL}/${user.id}` : baseURL
            axios [method] (url.user)
            .then(resp =>{
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
            
    }
    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }


    render() {
        return (
            <Main {...headerprops}>
                cadastro de usuario
            </Main>
        )
    }
}