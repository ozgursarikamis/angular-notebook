import { HttpClient } from '@angular/common/http';
import { Department } from './../interfaces/department';
import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) {  }

  listDepartments() {
    return this.http.get<Department[]>('https://localhost:5001/api/departments');
  }

  private hubConnection: signalR.HubConnection;
  public departments: Department[];

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/departments')
      .build();

      this.hubConnection.start()
        .then(() => console.log("Connection started"))
        .catch(err => console.error('Error while starting connection: ', err));
  }

  public addDepartmentsListener = () => {
    this.hubConnection.on('transferDepartmentsData', departments => {
      this.departments = departments;
      console.log('departments :>> ', departments);
    })
  }

  public broadcastDepartments = () => {
    this.hubConnection.invoke('broadcastDepartments', (departments: Department[]) => {
      this.departments = departments;
    }).catch(console.error);
  }
}
