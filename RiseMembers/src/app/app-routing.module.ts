import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexagonGridComponent } from './hexagon-grid/hexagon-grid.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';
import { MainComponent } from './dashboard/main/main.component';
import { AuthGuard } from './dashboard/services/auth-guard.service';
import { EditComponent } from './dashboard/edit/edit.component';
import { RemoveComponent } from './dashboard/remove/remove.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HexagonGridComponent },
    { path: 'member', component: MemberComponent },
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: 'login', component: LoginComponent },
            { path: 'main', component: MainComponent, canActivate: [AuthGuard]},
            { path: 'edit', component: EditComponent, canActivate: [AuthGuard]},
            { path: 'remove', component: RemoveComponent, canActivate: [AuthGuard]},
            { path: '', redirectTo: '/dashboard/main', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
