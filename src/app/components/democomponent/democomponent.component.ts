import { HttpHeaders } from '@angular/common/http';
import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { NoteService } from '../service/noteservice/note.service';
import { UserService } from '../service/userservice/user.service';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';


@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.scss']
})
export class DemocomponentComponent implements OnInit {
  email="san1997sah@gmail.com";
  password="abhi777";

  constructor(private user:UserService,private note:NoteService) { }

  ngOnInit(): void {
    
    
  }
 }



