import {Component, Input, OnInit} from '@angular/core';
import {TabsComponent} from '../tabs/tabs.component';

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit{

  @Input() selected: boolean;
  @Input() title: string;


  constructor(private tabs: TabsComponent) {
  }

  ngOnInit(): void {
    this.tabs.addTab(this);
  }
}
