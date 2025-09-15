import { useSelector } from "react-redux";

const useCselector = ( sliceName ) => {
  const data = useSelector((state) => state[sliceName]);
  return data;
};
export default useCselector;
