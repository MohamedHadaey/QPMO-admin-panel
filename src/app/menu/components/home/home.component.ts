import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuService } from '../../services/menu.service';
declare const $: any;
// apex charts
import * as ApexCharts from 'apexcharts';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};
// end:: using charts

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public statechartOptions: Partial<ChartOptions> | any;
  public archivechartOptions: Partial<ChartOptions> | any;

  /*************************/
  typeChartSeries: ApexNonAxisChartSeries = [26,16,18,40];
  typeChartDetails: ApexChart = {
    type: "donut",
    toolbar: {
      show: false
    }
  };

  typechartDetails: ApexDataLabels = {
    enabled: true
  }
  /******************** */
  employees:number = 25;
  workers:number = 8500 ;
  completed:number = 6000;
  completedText:boolean = true
  currentLanguage: any = localStorage.getItem('currentLanguage');
  display: any;

  constructor(
    private _AuthService: AuthService,
    private _MenuService: MenuService
  ) {
       /* state projects  chart */
       this.statechartOptions = {
        series: [
          {
            name: " ",
            data: [80, 65, 85, 45, 5]
          }
        ],
        chart: {
          height: 250,
          type: "bar",
          events: {
            // click: function(chart, w, e) {
            //   console.log(chart, w, e)
            // }
          },
          toolbar: false
        },
        colors: [
          "#F5E306",
          "#F24773",
          "#4CB871",
          "#068DF5",
          "#CCCCCC"
        ],
        plotOptions: {
          bar: {
            columnWidth: "10%",
            distributed: true,
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },
        legend: {
          show: false
        },
        grid: {
          show: true
        },
        xaxis: {
          categories: [
            "مكتملة",
            "متأخرة",
            "تنتهي قريباً",
            "الحالية",
            "لم يتم التعميد"

          ],
          labels: {
            style: {
              colors: [
                "#F5E306",
                "#F24773",
                "#4CB871",
                "#068DF5",
                "#CCCCCC"
              ],
              fontSize: "14px"
            }
          }
        }
      };

      /* archive projects chart */
      this.archivechartOptions = {
        series: [
          {
            name: " غير مكتملة ",
            data: [11, 32, 45, 32, 34, 52, 41,31 , 40, 28, 51, 42],
          },
          {
            name: " مكتملة ",
            data: [31, 40, 28, 51, 42, 109, 100 ,90, 80, 95, 100, 120],
          }
        ],
        chart: {
          height: 350,
          type: "area",
          zoom: {
            enabled: false
          },
          toolbar: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          type: "date",
          categories: [
            " Jan ",
            " Feb ",
            " Mar ",
            " Apr ",
            " May ",
            " Jun ",
            " Jul ",
            " Aug ",
            " Sep ",
            " Oct ",
            " Nov ",
            " Dec "
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy"
          }
        }
      };
  }
  ngOnInit(): void {
    // for check directions after any refresh
    if (this.currentLanguage == 'ar') {
      $('.content-body').removeClass('content-body-ltr');
      $('.content-body').addClass('content-body-rtl');
    } else {
      $('.content-body').removeClass('content-body-rtl');
      $('.content-body').addClass('content-body-ltr');
    }



  }
  /*********************************/

  // this function to log out
  logOut() {
    this._AuthService.logout();
  }

      // handle change in completing projects
      handleCompleting(event:any) {
        if(event.target.checked == false) {
          this.completed = 4500;
          this.completedText = false
        }else {
          this.completed = 6000;
          this.completedText = true
        }
      }
}


