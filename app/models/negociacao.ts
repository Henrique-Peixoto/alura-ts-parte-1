export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, // Tipos primitivos só são modificáveis através de atribuição
        public readonly valor: number
    ) {}

    get data(): Date {
        const data = new Date(this._data.getTime())
        return data
    }

    get volume(): number {
        return this.quantidade * this.valor
    }
}