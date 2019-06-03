import React from 'react'
import './form.css'

export default props => {

    const keyHandler = e => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    const categories = props.categories || []

    return (
        <div role='form' className='form row justify-content-center'>
            <div className='col-7'>
                <input id='description' className='form-control'
                placeholder='Adicione uma tarefa'
                onChange={props.handleChangeName}
                value={props.description}
                onKeyUp={keyHandler} />
            </div>
            <div className='col-3'>
            <select className="btn dropdown-toggle"
            onChange={props.handleChangeCategory}>
                <option value='0'>Selecione</option>
                {categories.map(category => 
                <option key={category.id} value={category.id}>{category.name}</option>)}
            </select>
            </div>
            <div className='col-2'>
                <button className='btn btn-primary fa fa-plus'
                onClick={props.handleAddItem} />
                <button className='btn btn-danger fa fa-close'
                onClick={props.handleClear} />
            </div>
        </div>
    )
}