import { Component, OnInit } from '@angular/core';
import { Iloptop } from '../model/laptop';
import { laptop } from '../const/laptop';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  laptopProduct: Array<Iloptop> = laptop;
  constructor() {}

  ngOnInit(): void {}
}
