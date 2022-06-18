import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ArchiveComponent } from '../archive/archive.component';
import { NoteService } from '../service/noteservice/note.service';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() childMessage: any;
  @Output() iconstodisplay = new EventEmitter<string>()
  
  isTrash: boolean = false;
  isArchive: boolean = false;

  colorArray=[
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey'}]
  
  

  constructor(private note: NoteService,private snackBar:MatSnackBar,private router:ActivatedRoute) { }

  ngOnInit(): void {
    let comp = this.router.component;
    if (comp == ArchiveComponent) {
      this.isArchive = true;
    }
    if (comp == TrashComponent) {
      this.isTrash = true;
    }
  }

  //*************************  Trash Note  *********************
  Trash() {
    let reqdata = {
      noteId: [this.childMessage.noteID],
      isTrash: true,
    }
    this.note.trashNote(reqdata).subscribe((result: any) => {
      console.log('Delete Notes', result);
      this.snackBar.open('Note Trashed Successfully..!!!', '..', {
        duration: 3000,
      })
      this.iconstodisplay.emit(result);

    })
  }

  //****************************** Archive  ********************
  Archive() {
    let reqdata = {
      noteId: [this.childMessage.noteID],
      isArchive: true,
    }
    this.note.archiveNote(reqdata).subscribe((response: any) => {
      console.log('Archive Notes', response);
      this.snackBar.open('Archive Successfully..!!!', '..', {
        duration: 3000,
      })
      this.iconstodisplay.emit(response);
    })
  }

  //*********************  Unarchive  ***************************
  UnArchievenote() {
    let reqdata = {
      noteId: [this.childMessage.noteID],
      isArchive: false,
    }
    this.note.archiveNote(reqdata).subscribe((response: any) => {
      console.log('Archive Notes', response);
      this.iconstodisplay.emit(response);
      this.snackBar.open('Note Unarchieve Successfully..!!!', '..', {
        duration: 3000,
      })

    })
  }

  //*****************************   Delete **********************
  DeletePermanent() {
    let reqdata = {
      noteId: [this.childMessage.noteID],
      isTrash: true,

    }
    // console.log("print Req",reqdata)
    this.note.deleteNotePermanent(reqdata).subscribe((response: any) => {
      console.log('Delete Notes', response);
      this.iconstodisplay.emit(response);
      this.snackBar.open('Note permanently Deleted ..!!!', '..', {
        duration: 3000,
      })

    })
    //window.location.reload();
  }

  //******************  restore   **************************************
  Restore() {
    let reqdata = {
      noteId: [this.childMessage.noteID],
      isTrash: false,
    }
    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log('Delete Notes', response);
      this.iconstodisplay.emit(response);
      this.snackBar.open('Note Restored Successfully..!!!', '..', {
        duration: 3000,
      })
    })
  }

  //*********************  */
  changeColor(color:any){
    console.log(this.childMessage);
    this.note.ChangeColor(this.childMessage.noteID,color).subscribe((response:any)=>{
      console.log('Note color changed',response);
      this.snackBar.open('colour changed Successfully..!!!', '..', {
        duration: 3000,
      })
      this.iconstodisplay.emit(response);
      
    })

  }
}
