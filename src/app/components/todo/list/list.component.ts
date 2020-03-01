import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToDo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public todo: Observable<ToDo>;

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit() {
    this.todo = this.todoService.list();
  }
  editRecord(id) {
    this.router.navigate(['/edit', id]);
  }
  deleteRecord(id) {
    this.todoService.remove(id);
  }

}
