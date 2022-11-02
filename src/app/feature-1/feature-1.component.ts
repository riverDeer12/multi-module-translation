import {Component} from '@angular/core';
import {BaseComponent} from "../shared/components/base/base.component";

@Component({
  selector: 'app-root',
  templateUrl: './feature-1.component.html',
  styleUrls: ['./feature-1.component.scss']
})
export class Feature1Component extends BaseComponent {
  title = 'translation-app';
}
