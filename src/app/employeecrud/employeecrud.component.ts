import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css']
})
export class EmployeecrudComponent {

 
  EmployeeArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
   
  
  name: string ="";
  address: string ="";
  mobile: Number =0;
 
  currentEmployeeID = "";
  constructor(private http: HttpClient )
  {
    
    this.getAllEmployee();
 
  }
  getAllEmployee()
  {
    
    this.http.get("http://127.0.0.1:8000/api/employees")
  
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.EmployeeArray = resultData;
    });
  }


 
  register()
  {
    console.log(this.name);
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "mobile" : this.mobile
    };
 
    this.http.post("http://127.0.0.1:8000/api/save",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully")
        this.getAllEmployee();
        this.name = '';
        this.address = '';
        this.mobile  = 0;
    });
  }

  save()
  {
    if(this.currentEmployeeID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
  setUpdate(data: any)
  {
   this.name = data.name;
   this.address = data.address;
   this.mobile = data.mobile;
   this.currentEmployeeID = data.id;
  }
  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "mobile" : this.mobile,
    };
    
    this.http.put("http://127.0.0.1:8000/api/update"+ "/"+ this.currentEmployeeID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Updateddd")
        this.getAllEmployee();
        this.name = '';
        this.address = '';
        this.mobile  = 0;
    });
  }
  setDelete(data: any)
  {
    
    
    this.http.delete("http://127.0.0.1:8000/api/delete"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Deletedddd")
        this.getAllEmployee();
  
    });
 
  }
}
