export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string) {
        let elemento: HTMLElement;

        // Durante o runtime, ficará disponível uma instância da propriedade
        // sendo acessada.
        // Estamos usando "function" e não "arrow function" pois a primeira
        // permite um "this" dinâmico.
        const getter = function() {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor)
            }

            return elemento
        }

        // Os getter's de uma classe são definidos em tempo de compilação.
        // Mas, aqui estamos sobreescrevendo-os em tempo de execução
        // porque temos acesso à propriedade "target" que é a definição da 
        // classe nesse contexto.
        // Estamos fazendo estas mudanças através do prototype da classe.
        Object.defineProperty(
            target,
            propertyKey, // O nome da propriedade
            { get: getter }
        )
    }
}