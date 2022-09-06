class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  public scream() {
    console.log(`NO QUIERO GRITAR!!!`);
  }

  public speak() {
    console.log(`No quiero hablar!`);
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    // console.log(target);
    return NewPokemon;
  };
};

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  public speak() {
    console.log(`${this.name}, ${this.name}!`);
  }
}

export const charmander = new Pokemon(4, "Charmander");

charmander.scream();
charmander.speak();