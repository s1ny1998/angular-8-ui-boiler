import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './services/auth-guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'account',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'staff',
        loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
