import "./Scroll.css"

function Scroll (props) {
  return (
    <div
      style={{ overflowY: 'scroll', border: "5px solid #0ccac4", height: "800px" }} >
      {props.children}
    </div>
  );
};

export default Scroll;
