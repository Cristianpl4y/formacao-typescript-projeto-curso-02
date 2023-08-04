export function ValidaDebito(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value; // Guarda uma referência ao método original
    // Substitui o método original por uma nova função
    descriptor.value = function (valorDoDebito) {
        // Faz validações
        if (valorDoDebito <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que zero!");
        }
        if (valorDoDebito > this.saldo) {
            throw new Error("Saldo insuficiente para realizar a operação!");
        }
        // Se passa nas validações, chama o método original com o valor como argumento
        return originalMethod.apply(this, [valorDoDebito]);
    };
    // Retorna o descritor modificado
    return descriptor;
}
export function ValidaDeposito(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDeposito) {
        if (valorDoDeposito <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }
        return originalMethod.apply(this, [valorDoDeposito]);
    };
    return descriptor;
}
