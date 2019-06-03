export default () => {
    window.localStorage.getItem('categories') || window.localStorage.setItem('categories', JSON.stringify([
        {id: 1, name: 'Limpeza' , icon: 'fa fa-shower'},
        {id: 2, name: 'Comida', icon: 'fa fa-cutlery'},
        {id: 3, name: 'Congelados', icon: 'fa fa-thermometer-empty'},
        {id: 4, name: 'Açougue', icon: 'fa fa-paw'}
    ]))
    window.localStorage.getItem('items') || window.localStorage.setItem('items', '[]')
}