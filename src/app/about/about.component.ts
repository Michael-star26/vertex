import { Component , ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
 name="mike"
}
