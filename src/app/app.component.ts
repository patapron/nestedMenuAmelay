import { Component } from '@angular/core';
import { DATA } from '../app/services/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  completeList = DATA;
  projectName = 'Nested Menu Amelay';
  logo = '../assets/images/logo.png';

  filterList(parent: any){
    return this.completeList.filter((p) => p.parentId == parent);
  }
}
