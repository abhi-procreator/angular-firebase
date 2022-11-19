import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from '../Modal/users';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.css']
})
export class ToppersComponent implements OnInit {

  isDataAssign: boolean = false;
  toppersArray: Users[] = [];
  key: string='';
  
  constructor(private api: ApiService,
    private http: HttpClient) { }

  ngOnInit(): void {
  this.getData();
  }

  getData() {
    this.http.get('https://angularassignment-a3b77-default-rtdb.firebaseio.com/users.json').subscribe((res: any) => {
      this.key = Object.keys(res)[0];
      let arrData = res[this.key];

      for (let i = 0; i < arrData.length; i++) {
        if (arrData[i].age <21 && arrData[i].scores >90) {
          this.toppersArray.push(arrData[i]);
        }
      }
      this.toppersArray.sort((a, b)=>{return b.scores - a.scores});
       this.isDataAssign=true;
    
    })
  }
  
}
