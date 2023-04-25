// компонент принимает xml и рисует токены

/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useEffect } from 'react';
// import BpmnViewer from 'bpmn-js/lib/Viewer';
// import BpmnModeler from 'bpmn-js/lib/Modeler';
// import { bpmnXml } from './Xmls/XmlTwo';
// import './BpmnViewerComponent.css';

// const BpmnViewerComponent = ({ incrementCounter }) => {
//   const [viewer, setViewer] = useState(null);
//   const [modeler, setModeler] = useState(null);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const getNextElement = (element) => {
//       const outgoing = element.outgoing && element.outgoing[0];
//       return outgoing && outgoing.target;
//     };

//     if (modeler && token) {
//       const { modeling } = modeler;
//       viewer.on('element.click', (event) => {
//         const element = event.element;

//         if (element.type === 'bpmn:Token' && element.id === token.id) {
//           const nextElement = getNextElement(element);
//           if (nextElement) {
//             modeling.moveShapes([element], { x: nextElement.x, y: nextElement.y });
//             modeling.removeElements([element]);
//             setToken(null);

//             if (element.businessObject && element.businessObject.custom) {
//               element.businessObject.custom.incrementCounter();
//             }
//           }
//         }
//       });
//     }
//   }, [modeler, token, viewer]);

//   useEffect(() => {
//     const container = document.getElementById('container');
//     if (!container) {
//       console.error('Container not found');
//       return;
//     }

//     const newViewer = new BpmnViewer();
//     setViewer(newViewer);
//     newViewer.attachTo(container);
//   }, []);

//   useEffect(() => {
//     if (viewer) {
//       const newModeler = new BpmnModeler({
//         container: '#container',
//       });

//       setModeler(newModeler);

//       let xml;

//       try {
//         xml = bpmnXml;
//       } catch (e) {
//         console.error('Failed to load XML:', e);
//         return;
//       }

//       newModeler.importXML(xml, (err) => {
//         if (err) {
//           console.error('Import error:', err);
//           return;
//         }

//         console.log('Import successful');

//         const elementFactory = newModeler.get('elementFactory');
//         const moddle = newModeler.get('moddle');
//         const token = moddle.create('bpmn:Token', { id: '__token_1' });

//         const newToken = elementFactory.createShape({
//           type: 'bpmn:Token',
//           businessObject: token,
//         });
//         newModeler.get('canvas').addShape(newToken);
//         setToken(newToken);

//         if (token.businessObject) {
//           token.businessObject.custom = { incrementCounter };
//         }
//       });
//     }
//   }, [viewer]);

//   return (
//     <div id="container" />
//   );
// };

// export default BpmnViewerComponent;






// Вот код без анимированного токена:
import React, { useState, useEffect } from 'react';
import BpmnViewer from 'bpmn-js/lib/Viewer';
import { bpmnXml } from './Xmls/XmlTwo';

const BpmnViewerComponent = () => {
  const [viewer, setViewer] = useState(null);

  useEffect(() => {
    if (viewer) {
      const newViewer = new BpmnViewer({ container: '#container' });
      newViewer.importXML(bpmnXml, (err) => {
        if (err) {
          console.error('Ошибка в импорте:', err);
        } else {
          console.log('Импорт успешно завершен');
        }
      });
    }
  }, [viewer]);

  useEffect(() => {
    const container = document.getElementById('container');
    const newViewer = new BpmnViewer({ container });
    setViewer(newViewer);

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