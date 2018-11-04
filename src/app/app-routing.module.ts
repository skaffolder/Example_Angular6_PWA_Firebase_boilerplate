// DEPENDENCIES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SECURITY
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    /* START MY VIEWS */

    { path: 'actors/:id', loadChildren: './pages/actor-edit/actor-edit.module#ActorEditModule', canActivate: [AuthGuard] },
    { path: 'actors', loadChildren: './pages/actor-list/actor-list.module#ActorListModule', canActivate: [AuthGuard] },
    { path: 'films/:id', loadChildren: './pages/film-edit/film-edit.module#FilmEditModule', canActivate: [AuthGuard] },
    { path: 'films', loadChildren: './pages/film-list/film-list.module#FilmListModule', canActivate: [AuthGuard] },
    { path: 'filmmakers/:id', loadChildren: './pages/film-maker-edit/film-maker-edit.module#FilmMakerEditModule', canActivate: [AuthGuard] },
    { path: 'filmmakers', loadChildren: './pages/film-maker-list/film-maker-list.module#FilmMakerListModule', canActivate: [AuthGuard] },
    { path: 'home', loadChildren: './pages/home/home.module#HomeModule', canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' }
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
