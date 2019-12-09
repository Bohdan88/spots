import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CardBodyComponent } from './card-body/card-body.component';
import { ChosenOptionComponent } from './chosen-option/chosen-option.component';
import { WeatherComponent } from './weather/weather.component';
import { PhoneNumberPipe } from './phone-number.pipe';
import { TemperaturePipe } from './temperature-formatter.pipe';
import { HighlightDirective } from './highlight.directive';
import { CelsiusToFahrenheitPipe } from './celsius-to-fahrenheit';


@NgModule({
  declarations: [
    AppComponent,
    CardBodyComponent,
    ChosenOptionComponent,
    WeatherComponent,
    PhoneNumberPipe,
    TemperaturePipe,
    HighlightDirective,
    CelsiusToFahrenheitPipe
  ],
  imports: [
    SharedModule,
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
