function Card(props) {
  return (
    <div className={`rounded-xl p-6 shadow-lg ${props.bgColor} `}>
      <h1 className="text-xl font-bold mb-2 text-white">{props.title}</h1>
      <h3 className="text-sm text-white/90 mb-4">{props.description}</h3>
      <p>{props.price}</p>
      <button
        className="
      bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200
      "
        onClick={props.onButtonClick}
      >
        Click Me
      </button>
    </div>
  );
}
export default Card;
