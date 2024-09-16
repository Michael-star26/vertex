import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-desktopui',
  standalone: true,
  imports: [
    FooterComponent,
    
  ],
  templateUrl: './desktopui.component.html',
  styleUrl: './desktopui.component.less'
})
export class DesktopuiComponent {

}
