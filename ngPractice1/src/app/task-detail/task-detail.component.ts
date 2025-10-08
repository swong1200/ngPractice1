import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent implements OnInit {
    @Input() details : Task | undefined
    @Output() newDetails = new EventEmitter<any>()

    buttonClicked = false
    newTitle = ''
    newDescription = ''

    ngOnInit(): void {
        if (this.details) {
            this.newTitle = this.details?.title 
            this.newDescription = this.details?.description
        }
        
    }

    edit() {
        this.buttonClicked = true
    }

    save() {
        const task = {
            id: this.details?.id,
            title: this.newTitle,
            description: this.newDescription,
            dueDate: this.details?.dueDate,
            status: this.details?.status,
            priority: this.details?.priority
        }
        this.newDetails.emit(task)
        // console.log(task)
    }
}
