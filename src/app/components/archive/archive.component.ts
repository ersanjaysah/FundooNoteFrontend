import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/noteservice/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  noteArray:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getArchive()
  }
 
  getArchive(){
    this.note.getnote().subscribe((result:any)=>{
      this.noteArray=result.data;
      console.log(this.noteArray)

      this.noteArray=this.noteArray.filter((Object:any)=>{return Object.isArchive===true;
      })
    })
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getArchive();
  }
}
