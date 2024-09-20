import { Component , ChangeDetectionStrategy} from '@angular/core';
import { TuiLink, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiCarousel } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TuiCardLarge,
    TuiTitle,
    TuiLink,
    TuiAvatar,
    TuiCarousel,
    TuiCell
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
 name="Mike"
}
