import { fn } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';
@Component({
  selector: 'rao-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  variable:boolean=false;
  res(variable:boolean)
  {this.variable=true;}
  materiel:Materiel[];
  constructor(private materielservice:MaterielService) { }

  ngOnInit(): void {
    this.materiel=this.materielservice.getMaterielById('2');
  }
 

 
}
