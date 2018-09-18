import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(protected afAuth: AngularFireAuth, protected router: Router, protected afStor: AngularFireStorage) { }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(response => {
      console.log(response.user.email);
      this.router.navigate(['/dashboard/main']);
    }).catch(error => alert(error));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/dashboard/login']);
  }

  uploadFile(event, filePath) {
    const file = event.target.files[0];
    const task = this.afStor.upload(filePath, file);
    const fileRef = this.afStor.ref(filePath);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe();
  }
}
