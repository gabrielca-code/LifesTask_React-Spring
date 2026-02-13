import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { TarefaData } from "../interface/TarefaData"

const postData = async (data: TarefaData): AxiosPromise<any> => {
    const response = axios.post("http://localhost:8080/tarefa", data)
    return response
}

export function useTarefaDataMutate() {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['tarefa-data']})
        }
    })

    console.log(mutate)

    return mutate
}