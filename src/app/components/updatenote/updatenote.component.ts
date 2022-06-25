import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from '../service/noteservice/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  @Output() noteUpdated = new EventEmitter<any>();
  title:any;
  description:any;
  noteId:any;
  color:any;
  noteArray:any;

  constructor(private note:NoteService,private snackBar:MatSnackBar,
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    
    ngOnInit(): void {
    this.title = this.data.title;
    this.description = this.data.description;
    this.noteId = this.data.noteID;
    this.color=this.data.color;
 }

onNoClick(): void {
  
  let data={
    
    Title: this.title,
    Description: this.description,
    "color":"string",

    
  }
  
  this.note.updateNote(data,this.noteId).subscribe((result:any)=>{
    console.log(result);
    this.noteUpdated.emit(result);

    this.snackBar.open('Note Updated Successfully..!!!', '', {
      duration: 3000,
    })
    this.dialogRef.close();
  })
 
}
receiveMessagefromdisplaycard($event:any){
  this.onNoClick()
}
}



