import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../shared/modal/modal.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public arr = [
    {
      text: 'asdasdasdasd'
    },
    {
      text: '1231231231'
    },
    {
      text: '123qwe123qwe'
    }
  ];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  public scanSuccessHandler(event: any): void {
    console.log(JSON.parse(event));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {});

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  formatObj(obj: any): string {
    return JSON.stringify(obj);
  }
}
