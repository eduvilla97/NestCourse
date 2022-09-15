const Deprecated = (deprecationReason: string) => {
  return (
    target: any,
    memberName: string,
    propertyDescriptor: PropertyDescriptor
  ) => {
    console.log(target);
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(
            `Method ${memberName} is deprecated with reason: ${deprecationReason}`
          );
          propertyDescriptor.value.apply(this, args);
        };
        return wrapperFn;
      },
    };
  };
};

class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  public scream() {
    console.log(`NO QUIERO GRITAR!!!`);
  }

  public speak() {
    console.log(`No quiero hablar!`);
  }
}

export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  @Deprecated("Most use speak2 method instead")
  public speak() {
    console.log(`${this.name}, ${this.name}!`);
  }
  public speak2() {
    console.log(`${this.name}, ${this.name}!!!!!`);
  }
}

export const charmander = new Pokemon(4, "Charmander");

charmander.speak2();
