
import axios from 'axios'

const DIARY_REST_API_URL = 'http://localhost:9393/diary';

class DiaryService {

    getAllDiary () {
        return axios.get(DIARY_REST_API_URL);
    }

    createDiary(diary) {
        return axios.post(DIARY_REST_API_URL,diary);
    }
    getDiaryById (diaryId) {
        return axios.get(DIARY_REST_API_URL+ '/' + diaryId);
    }

    updateDiary(diaryId , diary)  {
        return axios.put(DIARY_REST_API_URL+ '/' + diaryId, diary);
    }

    deleteDiary(diaryId) {
        return axios.delete(DIARY_REST_API_URL+ '/' + diaryId);
    }
}

export default new DiaryService();    // 객체화해서 export