import {Component, OnInit, ViewChild} from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";
import {StatisticService} from "./statistic.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  // @ts-ignore
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;


  constructor(private readonly statisticService: StatisticService) {
    this.chartOptions = {
      chart: {
        height: 350,
        type: 'bar',
      },
      dataLabels: {
        enabled: false
      },
      series: [],
      title: {
        text: 'Ajax Example',
      },
      noData: {
        text: 'Loading...'
      }
  }
  }
  ngOnInit(): void {
    this.statisticService.getStats().subscribe((resp) => {
      this.chart.updateSeries([{
        name: 'Sales',
        data: resp
      }])
    })
  }
}
