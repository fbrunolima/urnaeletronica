import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.page.html',
  styleUrls: ['./candidatos.page.scss'],
})
export class CandidatosPage implements OnInit {

  
  listaCandidatos: [{user_id: '', name: '', codigo: '', qntvotos: ''}];
  candidato: number;
  votoscandidato: number;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
  }

  candidatos() {
    this.crudService.getCandidates().then(() => {
      this.listaCandidatos = this.crudService.USERS;
    });
}

registro() {
  this.crudService.insertCandidate();
}

votarCandidato() {
  this.crudService.getVotos(this.candidato).then(() => {
    this.votoscandidato = this.crudService.Votos
    console.log(this.crudService.Votos)
  }).then(() =>{
    this.votoscandidato = this.votoscandidato + 1;
  }).then(() => {
    this.crudService.inserirVotos(this.candidato, this.votoscandidato);
  })
}

}
