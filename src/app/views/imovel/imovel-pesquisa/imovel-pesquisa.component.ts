import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imovel-pesquisa',
  templateUrl: './imovel-pesquisa.component.html',
  styleUrls: ['./imovel-pesquisa.component.css']
})
export class ImovelPesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}
