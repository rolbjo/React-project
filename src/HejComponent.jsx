import PropTypes from 'prop-types'
import './HejComponent.css'

function HejComponent(props) {
  return (
    // backticks funkar inte för att skapa radbrytning här
    <p className='HejComponent-NameProp'>
      {`Hi ${props.userName}, \n
    if you are interested in adopting feel free to contact us!`}{' '}
    </p>
  )
}

HejComponent.propTypes = {
  userName: PropTypes.string,
}

export default HejComponent
