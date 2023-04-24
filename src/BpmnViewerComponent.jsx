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
        
          // Disabling context menu
          modeler.get('contextPad').set('connect', () => {});
          modeler.get('canvas').setContextMenu((event) => {
            event.preventDefault();
          });
        
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
