import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Modal/users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  UsersData: Users[] = [

    { userId: 1, name: "Akash", age: 19, scores: 80, isAdded: false },
    { userId: 2, name: "Ashu", age: 20, scores: 75, isAdded: false },
    { userId: 3, name: "Abhi", age: 18, scores: 90, isAdded: false },
    { userId: 4, name: "Shubham", age: 20, scores: 92, isAdded: false },
    { userId: 5, name: "Mrityunjay", age: 19, scores: 93, isAdded: false },
    { userId: 6, name: "Shreyash", age: 20, scores: 89, isAdded: false },
    { userId: 7, name: "Aryan", age: 15, scores: 82, isAdded: false },
    { userId: 8, name: "Aman", age: 18, scores: 98, isAdded: false },
    { userId: 9, name: "Aditya", age: 25, scores: 68, isAdded: false },
    { userId: 10, name: "Harsh", age: 20, scores: 81, isAdded: false },
    { userId: 11, name: "Pradeep", age: 17, scores: 78, isAdded: false },
    { userId: 12, name: "Kartik", age: 30, scores: 87, isAdded: false },
    { userId: 13, name: "Aakrit", age: 15, scores: 80, isAdded: false },
    { userId: 14, name: "Ankit", age: 14, scores: 66, isAdded: false },
    { userId: 15, name: "Anuj", age: 18, scores: 85, isAdded: false },
    { userId: 16, name: "Aniket", age: 20, scores: 96, isAdded: false },
    { userId: 17, name: "Srijan", age: 23, scores: 81, isAdded: false },
    { userId: 18, name: "Shivay", age: 15, scores: 70, isAdded: false },
    { userId: 19, name: "Akshay", age: 18, scores: 60, isAdded: false },
    { userId: 20, name: "Ansh", age: 28, scores: 82, isAdded: false },
    { userId: 21, name: "Harshit", age: 20, scores: 81, isAdded: false },
    { userId: 22, name: "Amul", age: 18, scores: 65, isAdded: false },
    { userId: 23, name: "Rohit", age: 17, scores: 58, isAdded: false },
    { userId: 24, name: "Rahul", age: 27, scores: 77, isAdded: false },
    { userId: 25, name: "Sahil", age: 15, scores: 95, isAdded: false },
    { userId: 26, name: "Shivendra", age: 14, scores: 69, isAdded: false },
    { userId: 27, name: "Rishabh", age: 18, scores: 80, isAdded: false },
    { userId: 28, name: "Roshan", age: 26, scores: 96, isAdded: false },
    { userId: 29, name: "Shivam", age: 19, scores: 88, isAdded: false },
    { userId: 30, name: "Shivansh", age: 15, scores: 78, isAdded: false },

  ]


}
