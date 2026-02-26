export class User {
  constructor(public name: string) {}

  greet(): void {
    console.log(`Hello ${this.name}`);
  }
}