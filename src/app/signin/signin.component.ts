import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {  
  signin={
   signinusername:"",
   signinage:"",
   signinnumber:"", 
   signinemail:"",
   signinpass:""
  }


  constructor() { }

  ngOnInit(): void {
  }
  

}


