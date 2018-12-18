import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'; 
 
import { ProductDetails, EnqDetails, BusinessUser } from '../core/users.model';
 
@Injectable()
export class UserService {
  selectedUser1 : BusinessUser;
  selectedUser2 : ProductDetails;
  selectedUser3 : EnqDetails;

  userList1: BusinessUser[];
  userList2: ProductDetails[];
  userList3: EnqDetails[];

  businessUser;
  userId;
  enquiryUser;

  headers = new Headers({"Content-Type": "application/json"});
  options = new RequestOptions({ headers: this.headers });

  constructor(
    private http : Http,
    ) { }
 
    postRegUser(user : BusinessUser)
      {
        console.log(user);
        const endpoint="http://localhost:60287/api/RegUser";
        const fromData: FormData =new FormData();
        fromData.append('UFName',user.ufname);
        fromData.append('ULName',user.ulname);
        fromData.append('UEmail',user.uemail);
        fromData.append('UPassword',user.upassword);
        fromData.append('UBirthDate',user.ubirhdate);
        fromData.append('UGender',user.ugender);
        return this.http.post(endpoint,fromData)
      }

    postLogUser (user : BusinessUser){
      console.log(user);
  
      const endpoint="http://localhost:60287/api/LogUser";
      const fromData: FormData =new FormData();
      fromData.append('UEmail',user.uemail);
      fromData.append('UPassword',user.upassword);
      return this.http.post(endpoint,fromData);
      } 

    postEnquiryUser(user : EnqDetails)
      {
        console.log(user);
        const endpoint="http://localhost:60287/api/EnquiryUser";
        const fromData: FormData =new FormData();
        fromData.append('EnqName',user.name);
        fromData.append('EnqContact',user.contact);
        fromData.append('EnqEmail',user.email);
        fromData.append('EnqMessage',user.message);
        return this.http.post(endpoint,fromData)
        .map((data: Response) => {
          return data.json() as ProductDetails[];
        }).toPromise().then(x => {
          this.enquiryUser = x;
          console.log(this.enquiryUser)
        })
      }

    getProductList(){
        this.http.get('http://localhost:60287/api/ProductDetails')
        .map((data : Response) =>{
          return data.json() as ProductDetails[];
        }).toPromise().then(x => {
          this.userList2 = x;
          console.log(this.userList2)
        })
      }   

    getProductDetails(){
        const endpoint="http://localhost:60287/api/GetId"
        const fromData: FormData =new FormData();
        var PName = JSON.parse(localStorage.getItem("prodName"));
        fromData.append('Prod_Name', PName);
        return this.http.post(endpoint,fromData)
        .map((data: Response) => {
          return data.json() as ProductDetails[];
        }).toPromise().then(x => {
          this.userId = x;
          console.log(this.userId)
        })
      }
      
      getProductId(){
        const endpoint="http://localhost:60287/api/GetId"
        const fromData: FormData =new FormData();
        var PName = JSON.parse(localStorage.getItem("SinProduct"));
        fromData.append('Prod_Name', PName);
        return this.http.post(endpoint,fromData)
        .map((data: Response) => {
          return data.json() as ProductDetails[];
        }).toPromise().then(x => {
          this.userId = x;
          console.log(this.userId)
        })
      }    

}
