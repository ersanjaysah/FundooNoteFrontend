import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  value:any;
  mobileQuery: MediaQueryList;
  token:any;

  grid = false;
  formatGridList = false;  

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router,private snackBar:MatSnackBar, private data:DataService, private activeRoute:ActivatedRoute) {
    
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  //**************************** search title ****************************/
  searchtitle(event: any) {
    console.log("input in search field ===", event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: this.data,
      data: [this.value]
    }
    this.data.changeMessage(Ddata)
  }

  //*********************************** Logout ***************************/
  Logout() {
    this.token = localStorage.removeItem('token');
    this.router.navigateByUrl('/login')
    this.snackBar.open('Logout Successfully..!!!', '..', {
      duration: 3000,
    })
  }

 
   FormatView() {
    if (this.formatGridList == false) {
      this.formatGridList = true
      return this.formatGridList
    }
    else {
      this.formatGridList = false
      return this.formatGridList
    }
  }

  formatListView() {
    this.grid = true

    this.data.sourcemessage("list")
    console.log("value ", this.FormatView())
  }

  formatGridView() {
    this.grid = false
    this.data.sourcemessage("grid")
    console.log("value ", this.FormatView())
  }
  
}


  


