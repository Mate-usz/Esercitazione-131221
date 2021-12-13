import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherContainerComponent } from './components/weather-container/weather-container.component';

const routes: Routes = [
  {path: '', component: WeatherContainerComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
