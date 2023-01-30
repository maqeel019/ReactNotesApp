
export default function (props) {
    console.log(props);
  return (
    <div className='contact'>
    <img src={props.image} />
    <h3>{props.name}</h3>
    <div className='info'>
        <img src={props.icon}/>
        <p>{props.number}</p>
    </div>
    <div className='info'>
        <img src={props.icon}/>
        <p>{props.email}</p>
    </div>
    </div>
    
  )
}
