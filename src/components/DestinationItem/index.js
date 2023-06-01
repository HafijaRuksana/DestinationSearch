import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="place-card">
      <img src={imgUrl} alt={name} className="place-image" />
      <p className="place-name">{name}</p>
    </li>
  )
}
export default DestinationItem
