import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FormsModule } from '@angular/forms';
import { DeliveryOrderComponent } from './delivery-order/delivery-order.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { Routes, RouterModule} from '@angular/router';

const appRoutes: Routes =[
{path: '', component: DeliveryOrderComponent},
{path: 'delivery-order', component: DeliveryOrderComponent},
{path: 'delivery-list', component: DeliveryListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    DeliveryOrderComponent,
    DeliveryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
