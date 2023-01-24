import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  quantity = 11;
  color = 'gold';

  // TODO: #7. Create selectable controls with Angular Material
  fillings: string[] = [
    'Bok Choy & Chili Crunch',
    'Tofu & Mushroom',
    'Chicken & Ginger',
    'Impossible Meat & Spinach',
  ];
  selectedFillings: string[] = [];
  // TODO: #11. Announce changes with LiveAnnouncer
  constructor() {}

  ngOnInit(): void {}

  counter(i: number): Array<number> {
    return new Array(i);
  }

  public changeColor(color: string): void {
    this.color = color;
  }

  fauxPurchase(): void {
    let flavor = '';

    // TODO: #7. Create selectable controls with Angular Material
    this.selectedFillings.forEach((filling) => {
      flavor = flavor + ' ' + filling;
    });

    // TODO: #11. Announce changes with LiveAnnouncer
  }
}
