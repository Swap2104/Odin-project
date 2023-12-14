const NewList = (props) => {
  console.log(props.animals.map());
  console.log(props);
  return (
    <ol>
         {/* props.map(animal => {<li key={animal}>{animal}</li>)}; */}
         {/* props.map(animal => */}
         {/* return( <li key={animal}> animal</li> )) */}
    </ol>
  );
}

export default NewList;
