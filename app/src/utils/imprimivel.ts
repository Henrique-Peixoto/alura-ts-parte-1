// Comparativamente, uma interface é como uma classe abstrata onde todos os 
// seus métodos são públicos e abstratos.

// Uma classe pode implementar uma quantidade arbritrária de interfaces
// mas só pode herdar (extender) uma classe.

export interface Imprimivel {
    paraTexto(): string
}
