import { Component } from '@angular/core';
import * as dayjs from 'dayjs'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    if (localStorage.getItem("listaClientes") === null) {
      localStorage.setItem("listaClientes", "[]");
    }
  }

  novoCliente = {
    dadosPessoais:{
      nome: null,
      sobrenome: null,
      cpf: null,
      dataNascimento: null
    },
    endereco:{
      cep: null,
      endereco: null,
      numero: null,
      complemento: null,
      cidade: null,
      estado: null
    }
  };
  retorno = "";
  clientes = JSON.parse(localStorage.getItem("listaClientes"));
  title = 'CRUD';

  validar = function (cliente) {
    if (!cliente.dadosPessoais.nome) {
      return false;
    }
    if (!cliente.dadosPessoais.sobrenome) {
      return false;
    }
    if (!cliente.dadosPessoais.cpf) {
      return false;
    }
    if (!cliente.dadosPessoais.dataNascimento) {
      return false;
    }
    if (!cliente.endereco.cep) {
      return false;
    }
    if (!cliente.endereco.endereco) {
      return false;
    }
    if (!cliente.endereco.numero) {
      return false;
    }
    if (!cliente.endereco.complemento) {
      return false;
    }
    if (!cliente.endereco.cidade) {
      return false;
    }
    if (!cliente.endereco.estado) {
      return false;
    }
    return true
  };

  excluirCliente = function (selecionado) {
    this.clientes.splice(this.clientes.indexOf(selecionado), 1);
    localStorage.setItem("listaClientes", JSON.stringify(this.clientes));
    Swal.fire({
      title: 'Sucesso!',
      text: 'Excluído com sucesso',
      icon: 'success',
      confirmButtonText: 'fechar'
    })
  };

  salvar = function (cliente) {
    if (this.validar(cliente)) {
      this.clientes.push(cliente);
      localStorage.setItem("listaClientes", JSON.stringify(this.clientes));
      Swal.fire({
        title: 'Sucesso!',
        text: 'Cadastro Efetuado',
        icon: 'success',
        confirmButtonText: 'fechar'
      })
    } else {
      Swal.fire({
        title: 'Erro!',
        text: 'Erro ao efetuar o cadastro!',
        icon: 'error',
        confirmButtonText: 'fechar'
      })
    }
  };
}
