import { useDispatch, useSelector } from "react-redux";
import { tang, giam } from "~/store/actions/";
import { authSelector, testSelector } from "~/config/selectors";

function Test() {
  const dispatch = useDispatch();
  const dem = useSelector(testSelector);
  const auth = useSelector(authSelector);
  console.log(auth);

  const Tang = () => {
    dispatch(tang(2));
  };

  const Giam = () => {
    dispatch(giam(1));
  };

  return (
    <div>
      <h1>DEM: {dem}</h1>
      <button onClick={Tang}>Tang</button>
      <button onClick={Giam}>Giam</button>
    </div>
  );
}

export default Test;
