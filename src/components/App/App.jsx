import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppStyeled } from './App.style';
import scrollPage from 'helpers/scrollPage';
import pixabayApi from '../../serviceApi/pixabayApi';
import Searchbar from 'components/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ButtonLoadMore from 'components/Button';
import Loader from 'components/Loader';

class App extends Component {
  state = {
    searchValue: '',
    dataImg: [],
    page: 1,
    error: '',
    status: 'idle', //pending, sucsses, reject
  };

  async componentDidUpdate(_, prevState) {
    const { page, searchValue } = this.state;

    if (searchValue.trim() === '') {
      toast.error('Введите значение для поиска!');
      return;
    }
    try {
      if (prevState.page !== page || prevState.searchValue !== searchValue) {
        this.setState({
          status: 'pending',
        });

        const data = await pixabayApi(page, searchValue);

        const dataHits = data.hits.map(
          ({ id, webformatURL, largeImageURL, user }) => {
            return {
              id: id,
              webformatURL: webformatURL,
              largeImageURL: largeImageURL,
              user: user,
            };
          }
        );

        this.setState(prevState => ({
          dataImg: [...prevState.dataImg, ...dataHits],
          status: 'sucsses',
        }));
      }
    } catch ({ message }) {
      this.setState({
        error: message,
        status: 'idle',
      });
    }
  }

  incrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    scrollPage();
  };

  searchByValue = ({ name }) => {
    this.setState({
      searchValue: name,
      dataImg: [],
      page: 1,
    });
  };

  render() {
    const { dataImg, status, error } = this.state;

    return (
      <AppStyeled>
        <Searchbar
          onSubmitForm={this.searchByValue}
          status={status === 'pending'}
        />
        <ToastContainer theme="colored" />
        {status === 'pending' && <Loader />}
        {error && <p>Error {error}, please reload the page and try again!</p>}
 
        <ImageGallery onOpenModal={this.handleOpenModal} onSubmit={dataImg} />
        
        {status === 'sucsses' && (
          <ButtonLoadMore onIncrement={this.incrementPage} />
        )}
      </AppStyeled>
    );
  }
}

export default App;
