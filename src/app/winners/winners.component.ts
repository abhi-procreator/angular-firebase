import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from '../Modal/users';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {

  isDataAssign: boolean = false;
  winnersArray: Users[] = [];
  key: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();

  }

  getData() {
    this.http.get('https://angularassignment-a3b77-default-rtdb.firebaseio.com/winners.json').subscribe((res: any) => {
      const keys:any = Object.keys(res);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];        
        this.winnersArray.push(res[key]);
      }
      this.isDataAssign=true;
    })
  }
  

}
