import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: 'AIzaSyB9cShuzOCScjI6zKf8xnjyBPKP1TqtgiY',
    cx: '85487dbbc991044f6'
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};





// AIzaSyB9cShuzOCScjI6zKf8xnjyBPKP1TqtgiY
// AIzaSyD8OEPBBHNcZcX9fj4qZaCRPi4rJJOxIhI

// 85487dbbc991044f6
{/* <script async src="https://cse.google.com/cse.js?cx=c0f5aafba47f44eee">
</script>
<div class="gcse-search"></div> */}