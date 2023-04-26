/* eslint-disable react/jsx-no-bind */
/**
 * @file Contains the App top level component.
 */
import React, { Profiler, useState, useEffect } from 'react';
import now from 'performance-now';
import Layout from './components/Layout';
import { useWasm } from './hooks/wasm';
import FileHandlerModule from './cpp/file_handler';
import './App.css';
import SectraTheme from './components/SectraTheme';

/**
 * Top level component.
 *
 * @returns top level component
 */
function App(): JSX.Element {
  const [fileHandler, setFileHandler] = useState();
  const [renderCount, setRenderCount] = useState(0);
  const fileHandlerModule = useWasm(FileHandlerModule);
  /**
   *
   * @param n
   */
  function calcFib(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return calcFib(n - 1) + calcFib(n - 2);
  }

  // useEffect(() => {
  //   if (fileHandlerModule) {
  //     setFileHandler(new fileHandlerModule.FileHandler());
  //   }
  // }, []);

  useEffect(() => {
    if (fileHandlerModule) {
      setFileHandler(new fileHandlerModule.FileHandler());
    }
  }, [fileHandlerModule]);

  /**
   * Callback function for the Profiler component.
   *
   * @param id  The "id" prop of the Profiler tree that has just committed
   * @param phase Either "mount" (if the tree just mounted) or "update" (if it re-rendered)
   * @param actualDuration time spent rendering the committed update
   * @param baseDuration estimated time to render the entire subtree without memoization
   * @param startTime when React began rendering this update
   * @param commitTime when React committed this update
   * @param interactions Set of interactions belonging to this update
   */
  function onRendr(
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
    interactions: any
  ) {
    console.log(
      `time:${actualDuration}`,
      `phase:${phase}`,
      `baseDuration:${baseDuration}`,
      `starttime:${startTime}`,
      `commitTime:${commitTime}`,
      `interactions:${interactions}`
    );
  }

  return (
    <div className="App mui-theme">
      <button
        type="button"
        onClick={() => {
          const start = now();
          console.log(calcFib(35));
          const end = now();
          console.log(`fib time:${end - start} ms`);
        }}
      >
        calulate fib
      </button>
      <button
        type="button"
        onClick={() => {
          setRenderCount(renderCount + 1);
        }}
      >
        rerender
      </button>
      <SectraTheme render={renderCount}>
        <Profiler id="App" onRender={onRendr}>
          <div style={{ display: 'flex' }}>
            <Layout fileHandler={fileHandler} />
          </div>
        </Profiler>
      </SectraTheme>
    </div>
  );
}

export default App;
