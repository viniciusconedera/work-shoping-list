import React, {Component} from 'react';
import StorageLoader from '../../service/localStorage'

import {getCategories} from '../../service/categories'
import {getItems, addItem, deleteItem} from '../../service/items'
import client from '../../providers/client'
import Form from '../Form'
import List from '../List'

class Shopping extends Component {
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
  }

  loadLogedItems = async() => {
    const load = await client('items')
    if (load === 'Error: Request failed with status code 401') {
      console.log('ok')
    } else {
      console.log('não ok')
    }
    console.log(load)
  }

  handleChangeName = e => {
    this.setState({
      ...this.state,
      item: {
        name: e.target.value,
        categoryId: this.state.item.categoryId
      }
    })
  }

  handleChangeCategory = e => {
    this.setState({
      ...this.state,
      item: {
        name: this.state.item.name,
        categoryId: e.target.value
      }
    })
  }

  handleAddItem = e => {
    e.preventDefault()
    const name = this.state.item.name
    const categoryId = this.state.item.categoryId
    if (name && categoryId>0) {
      addItem({name, categoryId})
      this.refresh()
      this.handleClear(e)
    } else {
      alert('Preencha todos os items')
    }
  }

  handleDeleteItem = item => {
    deleteItem(item.id)
    this.refresh()
  }

  handleClear = (e) => {
    e.preventDefault()
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
    let list = await getItems();
    console.log(categories.find(cat => cat.id === 1))
    list = list.map(item => {
      return item = {...item, 
        category: categories.find(cat => cat.id === Number(item.categoryId))}
    })
    this.setState({categories, list})

    
    client('items')
    .then(response => {
      console.log(response)
      this.setState({...this.state, list: response.data})})
    .catch(() => {
      alert('\t\tVoce não esta logado\n'+
      'O sistema usará o armazenamento local')
    })
  }

  render() {
    return (
      <div className='container' style={{marginTop: 30+'px'}}>
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
    );
  }
}

export default Shopping;
