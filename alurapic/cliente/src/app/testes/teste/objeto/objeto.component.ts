import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.css']
})
export class ObjetoComponent implements OnInit {

  @Input() recebeFamilia;
  @Output() respostaFamilia = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    console.log(this.recebeFamilia);
    console.log('Objeto familia recebido do component pai via Input: ', this.recebeFamilia);
  }

  feedback(){
    console.log('Resposta para o component pai',this.respostaFamilia.emit({"nome": "Raphella", "SobreNome": "Souza"}));
  }

}
