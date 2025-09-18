import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

// Uma interface pode extender outras interface, mas não pode
// implementá-las.
export interface Modelo<T> extends Imprimivel, Comparavel<T> {}
