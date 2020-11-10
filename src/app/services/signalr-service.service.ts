import { ChartModel } from './../models/chart.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Injectable({
	providedIn: 'root'
})
export class SignalrServiceService {

	public data: ChartModel[];
	private hubConnection: signalR.HubConnection;
	public bradcastedData: ChartModel[];

	public startConnection = () => {
		this.hubConnection = new signalR.HubConnectionBuilder()
			.withUrl("http://localhost:5001/chart")
			.build();

			this.hubConnection.start()
				.then(() => console.log("Hub Connection Started"))
				.catch(err => `Error starting hub connect: ${err}`);
	}

	public addTransferChartDataListener = () => {
		this.hubConnection.on('transferchartdata', data => {
			this.data = data;
			console.log('this.data :>> ', this.data);
		})
	}
	
	public broadcastChartData = () => {
	  this.hubConnection.invoke('broadcastchartdata', this.data)
	  .catch(err => console.error(err));
	}
  
	public addBroadcastChartDataListener = () => {
	  this.hubConnection.on('broadcastchartdata', (data) => {
		this.bradcastedData = data;
	  })
	}
}
