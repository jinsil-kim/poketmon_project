import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slice/pokemonSlice";

export const PokemonStore = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default PokemonStore;
