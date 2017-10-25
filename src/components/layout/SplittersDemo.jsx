import Splitter from 'm-react-splitters';
import 'm-react-splitters/lib/splitters.css';
import React, {Component} from 'react';

export default function SplittersDemo() {
       return (
           <div>
           <Splitter
               position="horizontal"
               primaryPaneMaxHeight="80%"
               primaryPaneMinHeight={0}
               primaryPaneHeight="400px"
               dispatchResize={true}
               postPoned={true}
           >
               <Splitter
                   position="vertical"
                   primaryPaneMaxWidth="80%"
                   primaryPaneMinWidth={0}
                   primaryPaneWidth="400px"
                   postPoned={false}
               >
                   <div></div>
                   <div></div>
               </Splitter>
               <div></div>
           </Splitter>
           </div>
       );
}