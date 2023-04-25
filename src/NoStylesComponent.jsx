// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useEffect, useRef } from 'react';
// import BpmnViewer from 'bpmn-js/lib/Viewer';
// import BpmnModeler from 'bpmn-js/lib/Modeler';
// import { bpmnXml } from './Xmls/XmlThree';
// import './BpmnViewerComponent.css';

// const BpmnViewerComponent = () => {
//   const [viewer, setViewer] = useState(null); 
//   const [modeler, setModeler] = useState(null);
//   const [token, setToken] = useState(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (modeler) {
//       modeler.importXML(bpmnXml, (err) => {
//         if (err) {
//           console.error('Ошибка в импорте:', err);
//         } else {
//           console.log('Импорт успешно завершен');
//           const newToken = modeler.get('elementFactory').createShape({
//             type: 'bpmn:Token',
//             attrs: {
//               circle: {
//                 fill: '#00ff00', // зеленый цвет
//               }
//             }
//           });

//           // Setting an expanded attribute on the token element
//           newToken.businessObject.di.set('di:isExpanded', true);

//           setToken(newToken);
        
//           // Disabling context menu
//           modeler.get('contextPad').set('connect', () => {});
//           modeler.get('canvas').setContextMenu((event) => {
//             event.preventDefault();
//           });
        
//           const contextMenu = modeler.get('contextPad');
//           contextMenu.addListener('open', function() {
//             const menuContainer = contextMenu.container;
//             menuContainer.style.backgroundColor = "#ffffff";
//           });
//         }
//       });
//     }
//   }, [modeler]);

//   useEffect(() => {
//     const container = containerRef.current;
//     const newViewer = new BpmnViewer();
//     setViewer(newViewer);
//     newViewer.attachTo(container);

//     container.style.left = '0';
//     container.style.height = '100vh';

//     return () => {
//       newViewer.detach();
//     };
//   }, []);

//   const handleClickOnTable = (event) => {
//     if (token) {
//       const currentTable = event.element;
//       const nextTable = getNextTable(currentTable);
//       if (nextTable) {
//         moveTokenToElement(nextTable);
//         removeToken();
//       }
//     }
//   };

//   const getNextTable = (currentTable) => {
//     const tableElements = modeler.get('elementRegistry').filter((element) => {
//       return element.type === 'bpmn:UserTask' && element !== currentTable;
//     });

//     if (tableElements.length > 0) {
//       return tableElements[0];
//     }

//     return null;
//   };

//   const moveTokenToElement = (nextTable) => {
//     const canvas = modeler.get('canvas');
//     if (token && nextTable) {
//       canvas.removeShape(token);
//       canvas.addShape(token, { x: nextTable.x, y: nextTable.y });
//     }
//   };

//   const removeToken = () => {
//     if (token) {
//       modeler.get('commandStack').execute('deleteElements', { elements: [token] });
//       setToken(null);
//     }
//   };

//   useEffect(() => {
//     if (viewer) {
//       const newModeler = new BpmnModeler({ container: containerRef.current });
//       setModeler(newModeler);
  
//       newModeler.on('element.click', 'bpmn:UserTask', handleClickOnTable);
//     }
//   }, [viewer]);
  
//   return (
//     <div>
//       <div ref={containerRef} id="container" />
//     </div>
//   );
// };

// export default BpmnViewerComponent;









// шаблон 

import React, { useState, useEffect } from 'react';
import BpmnViewer from 'bpmn-js/lib/Viewer';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import { bpmnXml } from './Xmls/XmlTwo';
import './BpmnViewerComponent.css';

const BpmnViewerComponent = () => {
  const [viewer, setViewer] = useState(null);

  useEffect(() => {
    if (viewer) {
      const modeler = new BpmnModeler({ container: '#container' });
      modeler.importXML(bpmnXml, (err) => {
        if (err) {
          console.error('Ошибка в импорте:', err);
        } else {
          console.log('Импорт успешно завершен');
          const token = modeler.get('elementFactory').createShape({
            type: 'bpmn:Token',
            attrs: {
              circle: {
                fill: '#00ff00', // зеленый цвет
              }
            }
          });
        
          // Setting an expanded attribute on the token element
          token.businessObject.di.set('di:isExpanded', true);
        
          modeler.get('canvas').addShape(token);
          
          const contextMenu = modeler.get('contextPad');
          contextMenu.addListener('open', function() {
            const menuContainer = contextMenu.container;
            menuContainer.style.backgroundColor = "#ffffff";
          });
        }

      });
    }
  }, [viewer]);

  useEffect(() => {
    const container = document.getElementById('container');
    const newViewer = new BpmnViewer();
    setViewer(newViewer);
    newViewer.attachTo(container);

    container.style.left = '0';
    container.style.height = '100vh';
  }, []);

  return (
    <div>
      <div id="container" />
    </div>
  );
};

export default BpmnViewerComponent;
