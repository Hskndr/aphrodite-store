import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { PostService } from '../../../components/posts/post-services/post.service';
import { PostI } from '../../post.interface';

import Swal from 'sweetalert2';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['titlePost', 'tagsPost', 'pricePost', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private postSvc: PostService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.postSvc
      .getAllPosts()
      .subscribe(posts => this.dataSource.data = posts);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onEditPost(post: PostI) {
    console.log('Edit post0', post);
    this.openDialog(post);
    console.log('End onEdit3');

  }

  onDeletePost(post: PostI) {
    // Genera el Modal
    Swal.fire({
      title: 'Are you sure?',
      text: `You won´t be able to revert this!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.value) {
        this.postSvc.deletePostById(post).then(() => {
          Swal.fire('Deleted', 'Your post has been deleted', 'success');
        }).catch((error) => {
          Swal.fire('Error', 'There was an error deleting this post!', 'error');
        });
      }
    });
  }

  //   Crear un nuevo Post
  onNewPost() {
    this.openDialog();
  }

  openDialog(post?: PostI): void {
    const config = {
      data: {
        message: post ? 'Editar Producto' : 'Nuevo Producto',
        content: post
      }
    };
    console.log('Dialog middle 1', config.data.message);


    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      if (config.data.message === 'Editar Producto' && result === true) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tu producto ha sido editado!',
          showConfirmButton: false,
          timer: 2200
        });
      } else if (config.data.message === 'Nuevo Producto' && result === true) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tu producto ha sido creado!',
          showConfirmButton: false,
          timer: 2200
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo ha salido mal!',
        });
      }

      console.log(`Dialog 4result ${result}`);
    });
    console.log('end dialog2');
  }
}
