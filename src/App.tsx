import { useCount, useIfNeeded } from './hooks/useCount';

export const App = () => {
  useIfNeeded(useCount);

  console.log('render App');

  return (
    <>
      <h1>Count</h1>
      <div className="card">
        {/* {JSON.stringify(data)} */}
        {/* <button onClick={increment}>count is {count}</button> */}
      </div>
    </>
  );
};
