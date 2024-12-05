import axios, {AxiosResponse} from 'axios'
const { VITE_API_KEY } = import.meta.env

export interface MyApiResponse {
    text: string;
    myNumber: number;
}

export const fetchData = async (): Promise<AxiosResponse<MyApiResponse> | null> => {
    try {
        return await axios.get<MyApiResponse>(
            "https://9244fd92-2cbe-4ad0-aa5a-381590a6aa7f.mock.pstmn.io/hello-world",
            {
                headers: {
                    'X-Api-Key': VITE_API_KEY,
                }
            }
        )
    } catch (err) {
        console.error('API를 요청하던 중 오류가 발생했습니다', err);
        return null;
    }
}