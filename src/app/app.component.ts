import { TuiRoot, TuiSurface } from "@taiga-ui/core";
import { Component,ChangeDetectionStrategy } from '@angular/core';
import { DesktopuiComponent } from './desktopui/desktopui.component';
import { TuiCardLarge } from "@taiga-ui/layout";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      DesktopuiComponent,
      TuiRoot,
      TuiRoot,
      TuiRoot,
      TuiCardLarge,
      TuiSurface
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title="vertex"
}
