import { Component } from '@angular/core';
import { TuiButton, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiFade } from '@taiga-ui/kit';
import { TuiCardLarge, TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-hellobabe',
  standalone: true,
  imports: [
    TuiCardLarge,
    TuiButton,
    TuiNavigation,
    TuiIcon,
    TuiTitle,
    TuiFade
  ],
  templateUrl: './hellobabe.component.html',
  styleUrl: './hellobabe.component.less'
})
export class HellobabeComponent {

}
