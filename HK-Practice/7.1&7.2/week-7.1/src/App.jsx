import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, EvenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <EvenCounter></EvenCounter>
    </div>
  );
}

function EvenCounter() {
  const isEven = useRecoilValue(EvenSelector);
  return <div>{isEven ? "it is even" : null}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => {
            return count + 1;
          });
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => {
            return count - 1;
          });
        }}
      >
        Decrease
      </button>
    </div>
  );
}
export default App;
