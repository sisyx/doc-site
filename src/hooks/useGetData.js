import { useQuery } from "@tanstack/react-query";
import apiRequest from "../configs/axios";

const useGetData = (
    key,
    url,
    options,

) => {
    const { data, isPending, isFetching, isLoading, status, isError, refetch, isSuccess } = useQuery({
        queryKey: key,
        queryFn: async () => {
            const response = await apiRequest.get(url);
            return response.data;
        },
        onError: (error) => {
            console.log(error);
        },
        ...options,
    });
    return { data, isPending, status, isError, isLoading, refetch, isSuccess, isFetching };
};

export default useGetData;