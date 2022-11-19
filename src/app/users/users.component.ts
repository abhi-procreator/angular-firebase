import { Component, OnInit } from '@angular/core';
import { Users } from '../Modal/users';
import { ApiService } from '../service/api.service';
import { MatDialog } from '@angular/material/dialog'
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isDataAssign: boolean = false;
  isLoad: any = 'start';
  usersVal: string[] = [];
  key: string = '';
  usersArray: Users[] = [];
  copyArr: any;
  constructor(private api: ApiService,
    private http: HttpClient,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    if (localStorage.getItem("isLoad") == 'end') {
      this.isLoad = localStorage.getItem("isLoad");
    }
    localStorage.setItem("isLoad", 'end');
    this.postData();
  }

  postData() {
    if (this.isLoad == 'start') {
      const payload = this.api.UsersData;
      this.http.post('https://angularassignment-a3b77-default-rtdb.firebaseio.com/users.json', payload).subscribe((res: any) => {
        this.isLoad = localStorage.getItem("isLoad");
      })
    }
    this.getData();
  }

  getData() {
    this.http.get('https://angularassignment-a3b77-default-rtdb.firebaseio.com/users.json').subscribe((res: any) => {
      this.key = Object.keys(res)[0];
      let arrData = res[this.key];

      for (let i = 0; i < arrData.length; i++) {
        if (arrData[i].age < 21) {
          this.usersArray.push(arrData[i]);
        }
      }
      this.copyArr = this.usersArray;
      this.isDataAssign = true;
    })
  }



  AddtoWinner(obj: Users) {
    const dataDialog = {
      data: {
        parameter: obj,
        key: this.key
      }
    };
    const dialogRef = this.dialog.open(DialogBoxComponent, dataDialog);
  }

  applyFilter(event: any) {
    const inpVal = event.target.value;
    const length = this.usersArray.length;
    if (inpVal == '') {
      this.usersArray = this.copyArr;
    }
    if (inpVal) {
      setTimeout(() => {
        this.usersArray = [];
        for (let i = 0; i < length; i++) {
          if (this.copyArr[i].scores == inpVal) {
            this.usersArray.push(this.copyArr[i]);
          }
        }
      }, 1000);
    }
  }

}
