import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { WeatherContainerComponent } from "./components/weather-container/weather-container.component";
import { WeatherRoutingModule } from "./weather-routing.module";

@NgModule({
  declarations: [
    WeatherContainerComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class WeatherModule {}
