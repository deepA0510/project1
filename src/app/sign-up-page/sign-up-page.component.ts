import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  firstName: string ="";
  lastName: string ="";
  passwordS1: string ="";
  CpasswardS1: string ="";
  conditions: string ="";

  constructor(private http: HttpClient )
  {
    
   
 
  }
  
  reset(){
    //   console.log(this.firstName );
    // console.log(this.lastName);
    // console.log(this.address );
    // console.log(this.passwordS1);
    // console.log(this.CpasswardS1);
    // console.log(this.conditions);



  
    
    let bodyData1 = {
      "name" : this.firstName,

      "lastName" : this.lastName,
      "mobile" : this.passwordS1,
      "CpasswardS1" : this.CpasswardS1,
      "conditions" : this.conditions
    };

    console.log(bodyData1);
 
    this.http.post("http://127.0.0.1:8000/api/signUpData",bodyData1).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully");
      
    });
  
  }
}
