import React, { Component } from 'react';
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
          alert('Введите значение для поиска!')
          return
      }
        try {
          if (
            prevState.page !== page ||
            prevState.searchValue !== searchValue
          ) {
            this.setState({
              status: 'pending',
            });

            const data = await pixabayApi(page, searchValue);

            this.setState(prevState => ({
              dataImg: [...prevState.dataImg, ...data.hits],
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
      page: (prevState.page += 1),
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
        {status === 'pending' && <Loader />}
        {error && <p>Error {error}, please reload the page and try again!</p>}
        {status === 'sucsses' && (<ImageGallery onOpenModal={this.handleOpenModal} onSubmit={dataImg} />)}
        {status === 'sucsses' && (<ButtonLoadMore onIncrement={this.incrementPage} />)}
      </AppStyeled>
    );
  }
}

export default App;