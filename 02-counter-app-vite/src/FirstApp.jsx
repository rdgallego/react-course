/* const newMessage = () => {
    return 'Roberto'
}; */

import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle}) => {
    if(!title){
        throw new Error('Titulo no existe')
    }
    return (
        <>
            <h1 data-testid="test-title"> {title} </h1>
            <p>{subtitle * 2}</p>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'Hola, Soy Roberto',
}