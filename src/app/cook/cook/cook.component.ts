import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/json/ant-design-pca.json').subscribe((res) => {
      this.provinceData = res
      console.log('selectedCity:',this.selectedCity);
    });
  }

}
