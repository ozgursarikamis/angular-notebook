import { Observable } from 'rxjs';
import { DepartmentService } from './services/department.service';
import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import { HttpClient } from '@angular/common/http';
import { Department } from './interfaces/department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public chartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public chartLabels: string[] = ['Real time data for the chart'];
  public chartType: string = 'bar';
  public chartLegend: boolean = true;
  public colors: any[] = [{ backgroundColor: '#5491DA' }, { backgroundColor: '#E74C3C' }, { backgroundColor: '#82E0AA' }, { backgroundColor: '#E5E7E9' }]

  public departments$: Observable<Department[]>;

  constructor(
    public signalRService: SignalRService,
    private http: HttpClient,
    private departmentService: DepartmentService
    ) { }

  ngOnInit() {
    // this.signalRService.startConnection();
    // this.signalRService.addTransferChartDataListener();
    // this.signalRService.addBroadcastChartDataListener();
    // this.startHttpRequest();

    this.departmentService.startConnection();
    this.departmentService.addDepartmentsListener();
    this.departmentService.broadcastDepartments();
    this.departments$ = this.departmentService.listDepartments();
  }

  private startHttpRequest = () => {
    this.http.get('https://localhost:5001/api/chart')
      .subscribe(res => {
        console.log(res);
      })
  }

  public chartClicked = (event: any) => {
    console.log(event);
    this.signalRService.broadcastChartData();
  }
}
