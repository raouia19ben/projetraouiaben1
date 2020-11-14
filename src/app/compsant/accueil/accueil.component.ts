import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rao-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  nomSupermarket: string = "Chez Nous";
  lesCategories= [
    {nom:'informatique', image:'assets/Images/informatique.jpg'},
    {nom:'alimentation', image:'assets/Images/alimentation.jpg'},
    {nom:'vetements', image:'assets/Images/habits.png'},
    {nom:'electroménager', image:'assets/Images/electromenager.jpg'}
    ]
    lien:string="rao-listmateriel";
  constructor() { }

  ngOnInit(): void {
  }

}
