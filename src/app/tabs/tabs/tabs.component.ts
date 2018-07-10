import {Component} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent {

  tabs: TabComponent[] = [];


  public addTab(tab: TabComponent): void {
    console.log(tab)
    this.tabs.push(tab);
    if (this.tabs.length === 1) {
      this.select(tab);
    }
  }

  public select(tab: TabComponent): void {
    this.tabs.forEach(selectedTab => {
      selectedTab.selected = selectedTab === tab;
    });
  }
}
