import { Component, OnInit } from '@angular/core';
import { AuthBlogService } from '../../../shared/services/auth-blog.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogUserI } from '../../../shared/user.interface';
import { User } from '../../../../../components/shared/models/user.interface';
import { FileI } from '../../../shared/file.interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public image: FileI;
  public currentImage = 'https://picsum.photos/id/113/150/150';

  constructor(
    private authBlogSvc: AuthBlogService
  ) { }

  public profileForm = new FormGroup(
    {
      displayName: new FormControl('', Validators.required),
      email: new FormControl({ value: '', disabled: true }, Validators.required),
      photoURL: new FormControl('', Validators.required),

    }
  );

  ngOnInit(): void {
    this.authBlogSvc.userData$.subscribe(user => {
      this.initValuesForm(user);
    });
  }

  onSaveUser(user: BlogUserI): void {
    this.authBlogSvc.preSaveUserProfile( user, this.image );
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your post has been created',
      showConfirmButton: false,
      timer: 2200
    });
  }

  private initValuesForm(user: BlogUserI): void {
    if (user.photoURL) {
      this.currentImage = user.photoURL;
    }
    this.profileForm.patchValue({
      displayName: user.displayName,
      email: user.email,
    });
  }

  handleImage(image: FileI): void {
    this.image = image;
  }


}
