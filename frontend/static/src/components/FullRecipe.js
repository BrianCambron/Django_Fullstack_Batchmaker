
function FullRecipe(props){
  return(
    <>
    <div className="card" style={{marginRight:'8%'}}>
      <h5 style={{textAlign: 'center'}}>{props.pickedRecipe.name}</h5>
      <img src={props.pickedRecipe.image} alt=""/>
      <div className='p-4'>
        <p>Ingredients you will need:</p>
        <p>{props.pickedRecipe.ingredients}</p>
        <p>Instructions:</p>
        <p>{props.pickedRecipe.instructions}</p>
        <p>Notes:</p>
        <p>{props.pickedRecipe.notes}</p>
        <button className="btn btn-danger" onClick={() => props.deleteRecipe(props.pickedRecipe.id)}>Delete</button>
      </div>

    </div>
    </>
  )
}
export default FullRecipe;
