const GridEntry = (props) => {
  let { puppy } = props;
  let style = { backgroundImage: "url(" + puppy.image + ")" };
  return (
    <div className="grid-entry" style={style}>
      {puppy.firstName} {puppy.lastName}
    </div>
  );
};

export default GridEntry;
