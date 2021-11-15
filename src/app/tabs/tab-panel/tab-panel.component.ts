import { TabGroupComponent } from './../tab-group/tab-group.component';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit {
  @Input() title!: string;
  @ViewChild(TemplateRef, { static: true }) panelBody!: TemplateRef<unknown>;

  constructor(private tabGroup: TabGroupComponent) {}

  ngOnInit(): void {
    this.tabGroup.addTab(this);
  }
}
