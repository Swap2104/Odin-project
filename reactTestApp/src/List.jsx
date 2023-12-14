import NewList from "./props";
function ListAnimal() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <ol>
          <NewList animals={animals} />
      </ol>
    </div>
  );
}

export default ListAnimal;
