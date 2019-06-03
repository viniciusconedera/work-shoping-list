import React, {Component} from 'react';
import StorageLoader from './service/localStorage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import {getCategories} from './service/categories'
import {getItems, addItem, deleteItem} from './service/items'
import Form from './components/Form'
import List from './components/List'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {
        name: '',
        categoryId: '',
      },
      categories: [],
      list: []
    }
    StorageLoader()
    this.refresh()

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeCategory = this.handleChangeCategory.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleChangeName(e) {
    this.setState({
      ...this.state,
      item: {
        name: e.target.value,
        categoryId: this.state.item.categoryId
      }
    })
  }

  handleChangeCategory(e) {
    this.setState({
      ...this.state,
      item: {
        name: this.state.item.name,
        categoryId: e.target.value
      }
    })
  }

  handleAddItem() {
    const name = this.state.item.name
    const categoryId = this.state.item.categoryId
    if (name && categoryId>0) {
      addItem({name, categoryId})
      this.refresh()
      this.handleClear()
    } else {
      alert('Preencha todos os items')
    }
  }

  handleDeleteItem(item) {
    deleteItem(item.id)
    this.refresh()
  }

  handleClear() {
    this.setState({
      ...this.state,
      item: {
        name: '',
        categoryId: '0'
      }
    })
  }

  async refresh() {
    const categories = await getCategories()
    const list = await getItems();
     this.setState({categories, list})
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <h1>Lista de Compras</h1>
          <Form categories={this.state.categories}
          item={this.state.item}
          handleChangeName={this.handleChangeName}
          handleChangeCategory={this.handleChangeCategory}
          handleAddItem={this.handleAddItem}
          handleClear={this.handleClear}/>
          <List categories={this.state.categories}
          list={this.state.list}
          handleDeleteItem={this.handleDeleteItem}/>
        </div>
      </div>
    );
  }
}

export default App;
