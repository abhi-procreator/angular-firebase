import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
key:string = '';
  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient) { }

  ngOnInit(): void {
    console.log('MAT_DIALOG_DATA',this.data);
    
    this.key =  this.data.key;
  }

  AddWinner(){
    this.data.parameter.isAdded = true;
    this.http.post('https://angularassignment-a3b77-default-rtdb.firebaseio.com/winners.json', this.data.parameter).subscribe((res: any) => {
      console.log('isAdded',res.name);
    })
    this.updatedata();
  }

  updatedata(){
    // this.http.patch(`https://angularassignment-a3b77-default-rtdb.firebaseio.com/users.json/${this.key}`, this.data.parameter).subscribe((res: any) => {
    //   console.log('this.data.parameter',res);
    // })
  //   this.db
  // .collection('options')
  // .doc('/' + 'mzx....')
  // .update({rating: value})
  // .then(() => {
  //   console.log('done');
  // })
  // .catch(function(error) {
  //  console.error('Error writing document: ', error);
  // });
  }

}
