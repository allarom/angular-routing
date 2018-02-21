import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AnotherOneComponent } from './pages/another-one/another-one.component';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { KebabCasePipe } from './pipes/kebab-case.pipe';
import { AnimalCardComponent } from './components/animal-card/animal-card.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';

import { AnyService } from './services/any.service';

import { Routes, RouterModule } from "@angular/router";
import { AnimalPageComponent } from './pages/animal-page/animal-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomepageComponent },
  { path: 'another-one', component: AnotherOneComponent },
  // routes 
  { path: 'animal/:id', component: AnimalPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    KebabCasePipe,
    AnimalCardComponent,
    AnimalListComponent,
    AnotherOneComponent,
    AnimalPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AnyService],
  bootstrap: [AppComponent]
})
export class AppModule { }



