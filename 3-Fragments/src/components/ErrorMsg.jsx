const ErrorMsg = ({ food }) => {

   return (<>
      {food.length === 0 ? <h3>I am Still hungry</h3> : null}
      {food.length === 0 && <h3>I need food ASAP</h3>}
   </>
   )
};

export default ErrorMsg;

/* && & ? both doing same thing*/