import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {ShikimickiComponent} from '../../../lib/src/lib/shikimicki.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShikimickiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase';
}
