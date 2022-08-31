import axios from "axios";
import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-respones.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string // public imageUrl: string
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()} !!!`);
  }

  talk() {
    console.log(this.name);
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    return data.moves;
  }
}
export const charmander = new Pokemon(4, "Charmander");

charmander.getMoves();
