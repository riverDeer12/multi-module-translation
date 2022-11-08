import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Feature1Component} from "./feature-1.component";
import {FeatureComponent} from "./feature/feature.component";

const routes: Routes = [
  {
    path: '',
    component: Feature1Component,
    children:
      [
        {
          path: 'feature',
          component: FeatureComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule {
}
