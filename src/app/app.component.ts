import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showState: boolean;
  title: string = 'app';

  // Solves the collapse of the mobile nav dropdown
  // without illegally accessing the html dom references.
  mobileCollapseState() {
    this.showState = false;
  }
  // Keeps track of collapsed state in order to apply show: false
  // when user selects option form mobile dropdown van menu.
  toggleCollapseState() {
    setTimeout(() => {
      if (this.showState === undefined) {
        this.showState = true;
      } else {
        this.showState = !this.showState;
      }
    }, 200);
  }
}
