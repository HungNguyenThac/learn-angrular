import { ContentChildren, EventEmitter, QueryList } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { interval } from 'rxjs';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';
@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements OnInit {
  tabPanelList: TabPanelComponent[] = [];
  @Input() activeIndex = 0;

  @Output() activeIndexChange = new EventEmitter<number>();
  @ContentChildren(TabPanelComponent) tabPanels!: QueryList<TabGroupComponent>;
  addTab(tab: TabPanelComponent) {
    this.tabPanelList = [...this.tabPanelList, tab];
  }

  ngAfterContentInit(): void {}
  removeTab(tab: TabPanelComponent) {
    let currentActiveIndex: number;
    this.tabPanelList = this.tabPanelList.filter((tabPanel, index) => {
      if (tabPanel === tab) {
        currentActiveIndex = index;
        return false;
      }
      return true;
    });

    if ((currentActiveIndex = this.activeIndex)) {
      this.activeIndexChange.emit(
        currentActiveIndex === this.tabPanelList.length
          ? currentActiveIndex - 1
          : currentActiveIndex
      );
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
