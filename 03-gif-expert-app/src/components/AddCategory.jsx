import { useState } from "react"
import  PropTypes from "prop-types"

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('One punch')
    const handleValue = ({target}) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onAddCategory(inputValue)
        setInputValue('');
    }
  return (
    <form aria-label="form" onSubmit={onSubmit}>
        <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={handleValue}></input>
    </form>
  )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}