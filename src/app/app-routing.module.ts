import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  //{ path: 'favorites', component: FavoritesComponent },
  //{ path: 'login', component: LoginComponent },
  //{ path: 'music', component: MusicComponent },
  //{ path: 'entertainment', component: EntertainmentComponent },
  //{ path: 'theater', component: TheaterComponent },
  //{ path: 'culture', component: CultureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
