export class Pokemon {
  readonly id: number;
  readonly name: string;
  readonly image: string;

  constructor(json: any) {
    this.id = json.id;
    this.name = json.name;

    this.image = json.sprites.other["official-artwork"].front_default;
  }
}
