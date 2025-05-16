import { useState, useCallback } from "react";

interface UseApiState {
  data: JSON | null;
  isLoading: boolean;
  error: Error | null;
}

interface UseApiReturnType extends UseApiState {
  fetchApi: () => Promise<void>;
}

const useApi = (urlApi: string, tokenApi: string): UseApiReturnType => {
  const [data, setData] = useState<JSON | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchApi = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(urlApi, {
        headers: {
          "x-api-key": tokenApi,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Erro na API: ${response.status} ${response.statusText}`
        );
      }

      const result: JSON = await response.json();

      if (result) {
        setData(result);
      } else {
        throw new Error("Nada foi retornado pela API.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("Ocorreu um error desconhecido."));
      }

      console.error("Falha ao buscar elemento: ", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error, fetchApi };
};

export default useApi;
