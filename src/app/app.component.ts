import { TuiRoot } from "@taiga-ui/core";
import { Component,ChangeDetectionStrategy } from '@angular/core';
import { DesktopuiComponent } from './desktopui/desktopui.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      DesktopuiComponent,
      TuiRoot,
      TuiRoot,
      TuiRoot
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
