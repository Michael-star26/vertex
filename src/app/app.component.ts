import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { DesktopuiComponent } from './desktopui/desktopui.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      DesktopuiComponent,
      TuiRoot,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
}
