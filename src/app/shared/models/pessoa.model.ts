export class Pessoa {
    constructor(
        public id?: number,
        public nome?: string,
        public idade: number = 0,
        public dataNascimento? : string,
        public motorista?: string){
    }
}
