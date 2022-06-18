import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  BaseUrl=environment.baseUrl;
  token:any;
  noteId:any;

  constructor(private http:HttpService) {
    this.token=localStorage.getItem('token')
   }

   // add a note
  addnote(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
         'Authorization': 'Bearer ' +this.token
      })
    }
    return this.http.postService(this.BaseUrl+'Note/AddNote',reqData, true,header)
  }

  //get a note
  getnote(){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
         'Authorization': 'Bearer ' +this.token
      })
    }
    return this.http.getService(this.BaseUrl+'Note/getAllNotes', true,header)
  }

  // trash a note
  trashNote(reqData: any) {
    console.log(reqData);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.http.putService(this.BaseUrl+ `Note/Trash/${reqData.noteId}`, reqData, true,header );
  }

  //Archive a note
  archiveNote(reqData: any) {
    console.log(reqData);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.http.putService(this.BaseUrl+ `Note/ArchiveNote/${reqData.noteId}`, reqData, true,header );
  }

  // update a note
  updateNote(data:any,noteId:any) {
    console.log(this.token);
    console.log(this.noteId)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.http.putService(this.BaseUrl+`Note/Update/${noteId}`,data, true, header)
  }

  // delete note permanent
  deleteNotePermanent(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.http.deleteService(this.BaseUrl + `Note/Delete/${reqdata.noteId}`, true,header );
  }
  
  // trash a note
  deleteNote(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.http.putService(this.BaseUrl + `Note/Trash/${reqdata.noteId}`, reqdata, true,header );
  }

  // change a coloue
  ChangeColor(noteId:any,color:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.http.putService(this.BaseUrl +`Note/ChangeColour/${noteId}/${color}`,{}, true, header)
  }
}
