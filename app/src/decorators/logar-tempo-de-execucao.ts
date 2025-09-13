export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value

        descriptor.value = function(...args: any[]) {
            const t1 = performance.now()
            const retorno = metodoOriginal.apply(this, args)
            const t2 = performance.now()

            let divisor = 1
            let unidade = 'milisegundos'

            if (emSegundos) {
                divisor = 1000
                unidade = 'segundos'
            }

            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/divisor} ${unidade}`)
            retorno
        }

        return descriptor
    }
}

// Notas:
// O parâmetro "target" é "any" já que quando o decorator é chamado em
// um método estático, seu valor é o construtor da classe;
// mas se ele for chamado em um método de instância, seu valor é o prototype
// daquela instância.