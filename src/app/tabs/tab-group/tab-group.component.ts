import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
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

  addTab(tab: TabPanelComponent) {
    this.tabPanelList = [...this.tabPanelList, tab];
  }
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
