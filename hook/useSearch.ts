import { useState, useEffect } from "react";

export function useSearch(query: string) {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const controller = new AbortController(); // Для отмены запроса, если ввод продолжается
    const timeout = setTimeout(() => {
      setLoading(true);
      fetch(`/api/search?q=${query}`, { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => setResults(data.results))
        .catch((err) => {
          if (err.name !== "AbortError") console.error(err);
        })
        .finally(() => setLoading(false));
    }, 300); // Задержка 300 мс для debounce

    return () => {
      clearTimeout(timeout); // Очищаем таймер при изменении запроса
      controller.abort(); // Отменяем предыдущий запрос
    };
  }, [query]);

  return { results, loading };
}