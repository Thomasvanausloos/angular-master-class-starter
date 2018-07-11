import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements AfterContentInit{

  // now it also looks for tabs inside other child components.
  @ContentChildren(TabComponent, {descendants: true})
  tabs: QueryList<TabComponent>;

  public select(tab: TabComponent): void {
    this.tabs.forEach(selectedTab => {
      selectedTab.selected = selectedTab === tab;
    });
  }

  ngAfterContentInit(): void {
    this.select(this.tabs.first);
  }
}
