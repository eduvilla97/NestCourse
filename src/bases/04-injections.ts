import { PokeApiAdapter } from "../api/pokeApi.adapter";
import { HttpAdapter } from "../interfaces/httpAdapter.interface";
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
    public name: string,
    private readonly http: HttpAdapter
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()} !!!`);
  }

  talk() {
    console.log(this.name);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    return data.moves;
  }
}

const pokeApi = new PokeApiAdapter();
export const charmander = new Pokemon(4, "Charmander", pokeApi);
export const pikachu = new Pokemon(4, "Charmander", pokeApi);
