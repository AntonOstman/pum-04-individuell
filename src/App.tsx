/**
 * @file Contains the App top level component.
 */
 
import Box from '@mui/material/Box';
import { GraphComponent, InfoboxComponent } from './components/basecomponent';

import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import DragAndDropzone from './components/DragAndDropzone';
import './App.css';
import { useWasm } from './hooks/wasm';
import CalculatorModule from './cpp/Calculator';
import FileHandlerModule from './cpp/FileHandler';


/**
 * Top level component.
 *
 * @returns top level component
 */
function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const [fileHandler, setFileHandler] = useState();

  const calcModule = useWasm(CalculatorModule);
  const fileHandlerModule = useWasm(FileHandlerModule);

  useEffect(() => {
    if (fileHandlerModule) {
      setFileHandler(new fileHandlerModule.FileHandler());
    }
  },[fileHandlerModule]);

  // -------------------- FileReader example --------------------
  const filereader = new FileReader();

  if (files.length > 0) {
    filereader.readAsText(files[0]);
  }

  filereader.onload = () => {
    // TODO: Handle names (multiple files)
    fileHandler.add_file(filereader.result as string, files[0].name);
    /*
    files.forEach(element => {
      fileHandler.add_file(filereader.result as string, fileHandler.name);
    });
    */
    //console.log(`file contents read: ${filereader.result}`);
  };
  filereader.onabort = () => console.log('file reading was aborted');
  filereader.onerror = () => console.log('file reading has failed');

  // -------------------- FileReader example --------------------
  return (
    <div className="App">
      <div className="grid-container">
        meny? kan ta bort
        <Box
          sx={{
            flexDirection: 'column',
            display: 'inline-flex',
            backgroundColor: 'grey',
          }}
        >
          <GraphComponent />
          <InfoboxComponent />
        </Box>
      </div>

      <div>
        <p>Uploaded files: {JSON.stringify(files)}</p>
        <DragAndDropzone setter={setFiles} value={files} />
      </div>
      {/* 
      Everything under here test webassembly and will not stay till final product 
      */}
      <div className="card">
        <button
          data-testid="count-button"
          type="button"
          onClick={() => {
            setCount(() => {
              if (count >= 10) {
                return 0;
              }
              return count + 1;
            });
          }}
        >
          count is {count}
        </button>
        <Button
          color="secondary"
          type="button"
          onClick={() => setCount((currentCount) => currentCount + 1)}
        >
          count is {count}
        </Button>

        <Button
          color="primary"
          type="button"
          onClick={() => {
            let regexStart = /{method="/g;
            let regexEnd = /{method="\w*/g;
            let newRegex = /(?<={method=")\w*/g; //fuck I hate RegEx I hope this works
            let metrics: Map<String,Map<number,number>> = new Map<String,Map<number,number>>();
            
            // this will then display a text file
            let text = filereader.result as string;
            let lines = text.split('\n');
            lines.forEach(element => {
              if(element.includes("{method=\"")){
                console.log(element);
                //let metricName = element.substring(element.search(regexStart),element.search(regexEnd))
                let match = element.match(newRegex);
                if (match !== null) {
                  let metricName = match[0];
                  let metricStats = new Map<number,number>();
                  if(metricName!=""){
                    console.log(metricName);
                    console.log(metricStats);
                    metrics.set(metricName,metricStats);
                  }
                  //add entries to metricStats
                }
              }
            });
            if(metrics.size != 0){
              console.log("Info in file!");
              console.log(metrics);
              metrics.forEach(element => {
                console.log(metrics.keys);
              });
            }
            else{
              console.log("No info in file! :(")
            }
            
          }}
        >
          Extract metrics
        </Button>
        <Button color="primary" type="button">
          Just a visual MUI button
        </Button>
      </div>
    </div>
  );
}

export default App;
