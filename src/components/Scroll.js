import './Scroll.css';

function Scroll(props) {
  return (
    <div
      className="scroll-container"
      style={{
        overflowY: 'scroll',
        border: '5px solid #0ccac4',
        height: '900px',
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
