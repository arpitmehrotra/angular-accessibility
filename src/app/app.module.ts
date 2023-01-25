import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GoogleMapsModule } from '@angular/google-maps';

import { AboutComponent } from './about/about.component';
import { ColorPickerComponent } from './shop/color-picker/color-picker.component';
import { ColorPickerDialogComponent } from './shop/color-picker/color-picker-dialog/color-picker-dialog.component';
import { DumplingComponent } from './shop/dumpling/dumpling.component';
import { LocationComponent } from './location/location.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShopComponent } from './shop/shop.component';
import { A11yModule } from '@angular/cdk/a11y';

// TODO: #9. Add the power of @angular/cdk/a11y

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShopComponent,
    AboutComponent,
    LocationComponent,
    DumplingComponent,
    ColorPickerComponent,
    ColorPickerDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    A11yModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    MatToolbarModule,
    GoogleMapsModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
