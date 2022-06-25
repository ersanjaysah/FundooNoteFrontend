import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/noteservice/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  noteArray:any;

  
  gridList:any;

  constructor(private note:NoteService ) { }

  ngOnInit(): void 
  {
    this.getAllNotes()
  }

  getAllNotes(){
    this.note.getnote().subscribe((result:any)=>{
      console.log(result.data);
      this.noteArray=result.data

      this.noteArray.reverse();
        this.noteArray = this.noteArray.filter((object: any) => {
          return object.isTrash === false && object.isArchive===false
        })
      
    })
  }

  receivedEvent(event:any){
    console.log(event);
    
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getAllNotes()
  }
  recieveEvent($event:any){
    this.getAllNotes()
  }
  updatedData(value: any) {

    this.getAllNotes();
  }

}
