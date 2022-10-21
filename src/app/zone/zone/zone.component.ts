import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import * as echarts from 'echarts';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  @ViewChild('chart', { static: false }) chartContainer!: ElementRef;
  chart!: echarts.ECharts;

  mapOption !: any

  @ViewChild('chartMap') chartMap!: ElementRef; // 获取DOM节点的对象

  initEcharts() {
    this.http.get('../../../assets/json/china.json').subscribe((res: any) => {
      const echart = echarts.init(this.chartMap.nativeElement); // 获取视图的echarts的DOM节点，并初始化对象
      echarts.registerMap('china', res); // 注册china.json的数据到初始化的echarts对象
      echart.setOption(this.mapOption); // 绑定地图的配置参数对象，参考第二步
      echart.on('click', function (params: any) { // 绑定地图点击事件
        console.log(params);
      }.bind(this));
    });
  }

  // 配置地图参数信息
  setMapOption() {
    this.mapOption = {
      title: {
        text: '中移在线通信云项目实时监控',
        subtext: '',
        left: 'center',
        textStyle: {
          color: '#333',
          fontSize: '28',
        },
      },
      backgroundColor: '#96aec7',
      tooltip: {
        trigger: 'item',
        formatter: function (val: any) {
          return `项目进度：<br>${val.name}：${val.value}%<br>告警：${val.warn}<br>问题：${val.problem}`;
        }
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: []
      },
      visualMap: {
        min: 0,
        max: 100,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],           // 文本，默认为数值文本
        calculable: true,
        inRange: {
          color: ['#feffc7', '#02cb00']
        }
      },
      series: [
        {
          name: '项目进度',
          type: 'map',
          mapType: 'china',
          roam: false,

          zoom: 1.23,
          center: [105, 36],
          showLegendSymbol: false, // 存在legend时显示

          label: {
            normal: {
              show: true,
              textStyle: {
                color: "#ccc"
              }
            },
            emphasis: {
              show: true, 
              // show: false,
              textStyle: {
                color: "#fff"
              }
            }
          },
          itemStyle: {
            // color: 'red',
            // areaColor: '#fff',
            normal: {
              color: 'white',
              areaColor: "#0d0059",
              borderColor: "#389dff",
              borderWidth: 0.5
            },
            emphasis: {
              color: 'pink',
              areaColor: "#17008d",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 5,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },
          // emphasis: {
          //   itemStyle: {
          //     areaColor: '#f9ba09'
          //   }
          // },
          data: [
            { name: '北京', value: Math.round(Math.random() * 100), warn: 10, problem: 12 },
            { name: '天津', value: Math.round(Math.random() * 100), warn: 10, problem: 12 },
            { name: '上海', value: Math.round(Math.random() * 100), warn: 10, problem: 12 },
            { name: '重庆', value: Math.round(Math.random() * 100), warn: 10, problem: 12 },
            { name: '河北', value: Math.round(Math.random() * 100) },
            { name: '河南', value: Math.round(Math.random() * 100) },
            { name: '云南', value: Math.round(Math.random() * 100) },
            { name: '辽宁', value: Math.round(Math.random() * 100) },
            { name: '黑龙江', value: Math.round(Math.random() * 100) },
            { name: '湖南', value: Math.round(Math.random() * 100) },
            { name: '安徽', value: Math.round(Math.random() * 100) },
            { name: '山东', value: Math.round(Math.random() * 100) },
            { name: '新疆', value: Math.round(Math.random() * 100) },
            { name: '江苏', value: Math.round(Math.random() * 100) },
            { name: '浙江', value: Math.round(Math.random() * 100) },
            { name: '江西', value: Math.round(Math.random() * 100) },
            { name: '湖北', value: Math.round(Math.random() * 100) },
            { name: '广西', value: Math.round(Math.random() * 100) },
            { name: '甘肃', value: Math.round(Math.random() * 100) },
            { name: '山西', value: Math.round(Math.random() * 100) },
            { name: '内蒙古', value: Math.round(Math.random() * 100) },
            { name: '陕西', value: Math.round(Math.random() * 100) },
            { name: '吉林', value: Math.round(Math.random() * 100) },
            { name: '福建', value: Math.round(Math.random() * 100) },
            { name: '贵州', value: Math.round(Math.random() * 100) },
            { name: '广东', value: Math.round(Math.random() * 100) },
            { name: '青海', value: Math.round(Math.random() * 100) },
            { name: '西藏', value: Math.round(Math.random() * 100) },
            { name: '四川', value: Math.round(Math.random() * 100) },
            { name: '宁夏', value: Math.round(Math.random() * 100) },
            { name: '海南', value: Math.round(Math.random() * 100) },
            { name: '台湾', value: Math.round(Math.random() * 100) },
            { name: '香港', value: Math.round(Math.random() * 100) },
            { name: '澳门', value: Math.round(Math.random() * 100) }
          ]
        }
      ]
    };
  }

  setChartStyle() {
    const width = this.chartMap.nativeElement.offsetWidth;
    this.chartMap.nativeElement.style.height = width * 0.6 + 'px';
  }

  private updateChart(): void {
    this.chart.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    });
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    // this.setChartStyle(); // 设置地图固定宽高比的方法
    // this.setMapOption();  // 配置map地图参数信息方法
    // this.initEcharts();  // 初始化地图
  }

  ngAfterViewInit(): void {

    this.setChartStyle(); // 设置地图固定宽高比的方法
    this.setMapOption();  // 配置map地图参数信息方法
    this.initEcharts();  // 初始化地图
    // this.chart = echarts.init(this.chartContainer.nativeElement);
    // this.updateChart();
    // this.loadData();
  }


}
