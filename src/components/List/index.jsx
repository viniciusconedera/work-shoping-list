import React from 'react'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(item => (
            <tr key={item.id}>
                <td>{/* <i className={() => {
                    const category = props.categories.find(category => category.id == item.categoryId)
                    return category.icon
                }} /> */}
                {item.name}</td>
                <td><button className='btn btn-danger fa fa-trash-o'
                onClick={() => props.handleDeleteItem(item)} />
                </td>
            </tr>
            )
        )
    }

    return (
    <table className='table table-striped col-12'>
        <thead className="thead-dark">
            <tr>
                <th className='col-10'>Descrição</th>
                <th className='col-2'>Ações</th>
            </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
    </table>
    )
}