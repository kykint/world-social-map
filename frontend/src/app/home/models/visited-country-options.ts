export class VisitedCountryOptions {
  update: boolean;
  add: boolean;

  constructor(update: boolean, add: boolean) {
    this.update = update;
    this.add = add;
  }
}
