import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {load} from '@amap/amap-jsapi-loader';
// import '@amap/amap-jsapi-types';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})

export class CookComponent implements OnInit {

  values: string[] | null = null;
  isVisible = false;
  selectedProvince = '';
  selectedCity = '';
  selectedArea = '';
  provinceData:any = [];
  cityData:any = [];
  AreaData:any = [];

  amapKey:string = 'e60594318cfac89110b10a477c2f75c8'

  provinceChange(value: string): void {
    const province = this.provinceData.find((p:any) => p.label === value)
    this.cityData = province.children
    this.selectedCity = ''
    this.selectedArea = ''
  }

  CityChange(value: string): void {
    this.AreaData = this.cityData.children
    console.log('this.areaData:', this.AreaData);
    const city = this.cityData.find((c:any) => c.label === value)
    this.AreaData = city.children
  }

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  // 创建地图方法
createMap() {
  load({
      "key": this.amapKey,   // 申请好的Web端开发者Key，首次调用 load 时必填
      "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      "plugins": []  //插件列表
  }).then((AMap:any)=>{
      let amap = new AMap.Map('container',{ // container为容器的id
          zoom: 15, //初始化地图层级
          center: [112.5266, 27.91507] //初始化地图中心点
      });
  }).catch((e:any) => {
      console.log(e);
  })
}


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/json/ant-design-pca.json').subscribe((res) => {
      this.provinceData = res
      console.log('selectedCity:',this.selectedCity);
    });

  }

}
