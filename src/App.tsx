import { useEffect, useState } from "react";
import "./App.css";
import { fetchData, MyApiResponse } from "./api.ts";

function App() {
  const [data, setData] = useState<MyApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMyDataFromApi = async () => {
      const response = await fetchData();
      if (response) {
        setData(response.data);
        setLoading(false);
      } else {
        setError("API 호출에 실패했습니다.");
        setLoading(false);
      }
    };

    fetchMyDataFromApi();
  }, []);

  if (loading) {
    return (
        <div>
          <h1>데이터가 로딩중입니다...</h1>
        </div>
    );
  }

  if (error) {
    return (
        <div>
          <h2>오류발생!!!, 오류 메세지: {error}</h2>
        </div>
    );
  }

  return (
      <div>
        <h1>API 데이터 응답</h1>
        <p>
          받은 데이터: Text: {data?.text} / MyNumber: {data?.myNumber}
        </p>
      </div>
  );
}

export default App;