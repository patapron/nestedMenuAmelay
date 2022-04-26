import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent {
  @Input() completeList!: any[];
  @Input() filteredList!: any[];
  @ViewChild('mainMenu', { static: true }) public mainMenu: any;

  filterList(parent: any) {
    return this.completeList.filter((p) => p.parentId == parent);
  }
}
