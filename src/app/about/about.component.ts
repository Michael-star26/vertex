import { Component , ChangeDetectionStrategy} from '@angular/core';
import { TuiLink, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge } from '@taiga-ui/layout';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TuiCardLarge,
    TuiTitle,
    TuiLink
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
 name="Mike"
}
