export interface TarefaData {
    id?: number,
    titulo: string,
    descricao: string,
    usuario: object,
    subtarefas: [],
    ativa: boolean
}