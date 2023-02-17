import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient,) { }
  signup(obj: any,img:File) {
    let formData = new FormData();
    formData.append("img",img);
    formData.append("name",obj.name);
    formData.append("firstName",obj.firstName);
    formData.append("lastName",obj.lastName);
    formData.append("address",obj.address);
    formData.append("tel",obj.tel);
    formData.append("email",obj.email);
    formData.append("pwd",obj.pwd);
    formData.append("category",obj.category);
    formData.append("country",obj.country);
    formData.append("role",obj.role);
    return this.httpClient.post<{ message: any; }>(this.userURL + "/signup", formData);
  }
}
