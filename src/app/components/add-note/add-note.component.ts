import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../service/noteservice/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  isShow=false;
//for binding creating variables
title:any;
description:any;

  constructor(private note:NoteService) { }
 @Output() createtodisplay = new EventEmitter<string>();

  ngOnInit(): void {
  }
  show(){
    this.isShow=true;
  }
  close(){
    this.isShow=false;
    console.log(this.title, this.description)
    if((this.title==null || this.title == "")&& (this.description == null || this.description == "")){
      console.log("values are null");
    }
    else{
      let data={
        title:this.title,
        description:this.description,
      }
      
      this.note.addnote(data).subscribe((res:any)=>{
        console.log(res);
        this.title=""
        this.description=""
        this.createtodisplay.emit(res)
        
      }) 
    }
  }

}
