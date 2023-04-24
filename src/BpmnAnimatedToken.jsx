import React, { useState, useEffect, useCallback } from 'react';
import BpmnViewer from 'bpmn-js';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import { bpmnXml } from './Xmls/Xml';
import anime from 'animejs';

const BpmnViewerComponent = () => {
  const [viewer, setViewer] = useState(null);

  const importXml = useCallback(async () => {
    if (!bpmnXml || !viewer) return;

    try {
      const modeler = new BpmnModeler({ container: '#container' });
      await modeler.importXML(bpmnXml);

      console.log('Успешно импортирован!');

      modeler.on('import.done', (event) => {
        const { definitions } = event;
        const rootElement = definitions.rootElements[0];
        const flowElements = rootElement.flowElements;

        let currentIndex = 0;

        const animateToken = () => {
          if (currentIndex >= flowElements.length) {
            currentIndex = 0;
          }

          const element = flowElements[currentIndex];

          if (element.$type === 'bpmn:StartEvent') {
            currentIndex++;
            animateToken();
            return;
          }

          const token = modeler.get('elementFactory').createShape({
            type: 'bpmn:Token',
            x: element.x - 10,
            y: element.y + 20,
            attrs: {
              circle: {
                fill: 'green',
                stroke: 'blue',
                strokeWidth: 1,
                strokeOpacity: 1
              }
            },
            class: 'bpmn-token'
          });

          modeler.get('canvas').addShape(token, element);
          
          const tokenSubjectRef = modeler.get('moddle').create('bpmn:TokenSubjectReference');
          tokenSubjectRef.$parent = element;
          token.businessObject.tokenSubjectRef = tokenSubjectRef;

          const animation = anime({
            targets: token.node.querySelector('circle'),
            translateX: element.x + 15,
            translateY: element.y + 20,
            duration: 5000,
            easing: (t) => Math.sin(t * Math.PI / 2),
            begin: () => {
              console.log('Token move started');
            },
            complete: () => {
              console.log('Token move ended');
              currentIndex++;
              animateToken();
            }
          });
        };

        modeler.get('eventBus').on('element.click', (event) => {
          const { element } = event;
          currentIndex = flowElements.indexOf(element);
          animateToken();
        });
      });
    } catch (err) {
      console.error('Ошибка импорта', err);
    }
  }, [viewer]);

  useEffect(() => {
    try {
      const container = document.getElementById('container');
      const newViewer = new BpmnViewer();
      setViewer(newViewer);
      newViewer.attachTo(container);

      container.style.left = '0';
      container.style.height = '100vh';
    } catch (err) {
      console.error('Ошибка создания BpmnViewer:', err);
    }
  }, []);

  useEffect(() => {
    importXml();
  }, [importXml]);

  return (
    <div>
      <div id="container" />
    </div>
  );
};

export default BpmnViewerComponent;