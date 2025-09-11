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

    public static criaDe(dataStr: string, quantidadeStr: string, valorStr: string): Negociacao {
        // const exp = /-/g
        const date = new Date(dataStr)
        const quantidade = parseInt(quantidadeStr)
        const valor = parseFloat(valorStr)
        return new Negociacao(date, quantidade, valor)
    }
}