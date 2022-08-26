import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  public filterOption: string = '';
  public selectedElement: string = '';
  public filteredItems: any;
  public elements = [
    {
      name: 'Black',
      type: 'colors',
    },
    {
      name: 'Apple',
      type: 'fruits',
    },
    {
      name: 'Dog',
      type: 'animals',
    },
    {
      name: 'White',
      type: 'colors',
    },
    {
      name: 'Peach',
      type: 'fruits',
    },
    {
      name: 'Bananas',
      type: 'fruits',
    },
    {
      name: 'Cat',
      type: 'animals',
    },
    {
      name: 'Bird',
      type: 'animals',
    },
    {
      name: 'Purple',
      type: 'colors',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.filteredItems = [...this.elements];
  }

  changeFilter(filterType: string) {
    this.filterOption = filterType;
    this.filteredItems = [
      ...this.elements.filter((x) => x.type === filterType),
    ];
  }

  displaySelectedOption(event: any) {
    this.selectedElement = event.name;
  }
}
