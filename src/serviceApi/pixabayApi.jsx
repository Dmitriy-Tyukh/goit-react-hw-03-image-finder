import axios from 'axios';
import PropTypes from 'prop-types';

const APIKEY = '30833606-8c70618e48dea164cb3e2224f';
axios.defaults.baseURL = 'https://pixabay.com/api/';

async function pixabayApi(page, searchValue) {
  const optionsApi = `?q=${searchValue}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const responce = await axios.get(optionsApi);
  return responce.data;
}

export default pixabayApi;

pixabayApi.propTypes = {
  page: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
};


