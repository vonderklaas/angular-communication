import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() elements: any = [];
  @Input() filter?: string = '';
  @Output() selectedOptionEvent = new EventEmitter();

  selectElement(e: any) {
    this.selectedOptionEvent.emit(e);
  }

  constructor() {}

  ngOnInit(): void {}
}
