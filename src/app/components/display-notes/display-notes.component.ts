import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../service/data.service';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
 @Input() childMessage:any;
 @Output() displaytogetallnotes = new EventEmitter<string>();
  @Output() noteUpdated = new EventEmitter<any>();

  sentmsg:any;
  subscription: any;
  searchword: any;
  message:any;
  constructor(public dialog:MatDialog, private data: DataService) { }
  //search 
  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => {
      this.message = message;
      console.log(message.data[0]);
      this.searchword = message.data[0]
    });
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent,{
      width: '380px',
      data:note,
      panelClass:'my-custom-dialog-class'
      
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      this.noteUpdated.emit(result);
    });
  }
  operation(value: any) {
    this.noteUpdated.emit(value);
  }
  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay", $event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)
  }
}
