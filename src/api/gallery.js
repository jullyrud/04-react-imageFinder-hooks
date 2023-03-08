import axios from 'axios';

const API_KEY = '32077204-5e26fe343192f5bf28aa1a8c1'

export const getGallery = (q, page) => {

return axios.get(`https://pixabay.com/api/?q=${q}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`)
}