import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { FormItemsComponent } from './form-items/form-items.component';

const routes: Routes=[
  { path:'', redirectTo: '/items', pathMatch: 'full'  },
  { path:'items', component: ItemsComponent },
  { path:'items/formItems', component: FormItemsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    FormItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
