import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/noteservice/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
noteArray:any;
constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getTrash();
  }
  getTrash(){
    this.note.getnote().subscribe((result:any)=> {
      this.noteArray=result.data;
      console.log(this.noteArray);
      this.noteArray.reverse();
      this.noteArray=this.noteArray.filter((object:any)=>{
        return object.isTrash===true;
      })
    })
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getTrash();
  }}
