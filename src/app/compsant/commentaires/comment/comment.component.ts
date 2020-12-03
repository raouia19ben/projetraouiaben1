import { Component,Input, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaire';

@Component({
  selector: 'rao-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() x:Commentaire;
  @Input() j:number;
  constructor() { }

  ngOnInit(): void {
  }

}
