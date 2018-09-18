import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(protected afAuth: AngularFireAuth, protected router: Router) { }

  canActivate(): boolean {
    this.afAuth.authState.subscribe(response => {
      if (response == null) {
        this.router.navigate(['/dashboard/login']);
      }
    });
    return true;
  }
}
