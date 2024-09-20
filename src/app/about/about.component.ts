import { Component , ChangeDetectionStrategy} from '@angular/core';
import { TuiCardLarge } from '@taiga-ui/layout';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TuiCardLarge
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
 name="Mike"
}
