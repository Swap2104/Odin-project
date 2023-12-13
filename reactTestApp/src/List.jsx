function ListAnimal() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    const animalsList = animals.map(animal => <li key={animal}>{animal}</li>);

    return (
      <div>
        <h1>Animals: </h1>
        <ul>{animalsList}</ul>
      </div>
    );
    // https://tenor.com/view/understandable-have-nice-day-have-a-great-day-have-a-good-day-nice-gif-20850110
}

export default ListAnimal;