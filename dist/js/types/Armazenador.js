export class Armazenador {
    constructor() { }
    // Grava no localStorage as informações
    static salvar(chave, valor) {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }
    // Pega do localStorage as informações 
    static obter(chave, reviver) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
    }
}
/**
 OBS:
    1- Usar generics para criar componentes flexíveis e reutilizáveis que funcionam com diferentes tipos de dados de forma segura e consistente;
    2- Definir o tipo <T> para representar um tipo genérico que será determinado no momento da utilização do componente;
    3- Aplicar o operador “as T” para definir explicitamente o tipo de retorno ao realizar a conversão de JSON para o tipo original.
 */
