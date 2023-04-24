export const bpmnXml = `<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_1ew70lk" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.4.2" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.15.0">
<bpmn:collaboration id="Collaboration_1bmoxn0">
<bpmn:participant id="Participant_0prwmpx" name="Изменить активность журнала" processRef="Process_134n7gf"/>
</bpmn:collaboration>
<bpmn:process id="Process_134n7gf" name="Лира, Хомуты, Хомут-12, Ввод бланков, Изменение активности журнала" isExecutable="true">
<bpmn:startEvent id="StartEvent_1">
<bpmn:outgoing>Flow_0tg13dr</bpmn:outgoing>
</bpmn:startEvent>
<bpmn:serviceTask id="Activity_1hd3q58" name="Изменить активность компонента согласно чекбоксу" camunda:class="org.pluscom.camunda.delegate.uihandler.ReadCheckboxFromMessage">
<bpmn:extensionElements>
<camunda:inputOutput>
<camunda:inputParameter name="mode">toggleFieldReverse</camunda:inputParameter>
</camunda:inputOutput>
</bpmn:extensionElements>
<bpmn:incoming>Flow_0tg13dr</bpmn:incoming>
<bpmn:outgoing>Flow_12lt47r</bpmn:outgoing>
</bpmn:serviceTask>
<bpmn:serviceTask id="Activity_1wp3i80" name="Подготовить к инициализации выпадающий список "Журнал"" camunda:class="org.pluscom.camunda.delegate.initialization.PrepareComponentInitialization">
<bpmn:extensionElements>
<camunda:inputOutput>
<camunda:inputParameter name="userId">Журнал</camunda:inputParameter>
</camunda:inputOutput>
</bpmn:extensionElements>
<bpmn:incoming>Flow_12lt47r</bpmn:incoming>
<bpmn:outgoing>Flow_0rdeeeu</bpmn:outgoing>
</bpmn:serviceTask>
<bpmn:endEvent id="Event_1ywcqc9">
<bpmn:incoming>Flow_0fgrfxg</bpmn:incoming>
</bpmn:endEvent>
<bpmn:serviceTask id="Activity_0q14rb4" name="Инициализировать вкладку" camunda:class="org.pluscom.camunda.delegate.initialization.InitializeComponents">
<bpmn:incoming>Flow_0rdeeeu</bpmn:incoming>
<bpmn:outgoing>Flow_0fgrfxg</bpmn:outgoing>
</bpmn:serviceTask>
<bpmn:sequenceFlow id="Flow_0tg13dr" sourceRef="StartEvent_1" targetRef="Activity_1hd3q58"/>
<bpmn:sequenceFlow id="Flow_12lt47r" sourceRef="Activity_1hd3q58" targetRef="Activity_1wp3i80"/>
<bpmn:sequenceFlow id="Flow_0rdeeeu" sourceRef="Activity_1wp3i80" targetRef="Activity_0q14rb4"/>
<bpmn:sequenceFlow id="Flow_0fgrfxg" sourceRef="Activity_0q14rb4" targetRef="Event_1ywcqc9"/>
</bpmn:process>
<bpmndi:BPMNDiagram id="BPMNDiagram_1">
<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_1bmoxn0">
<bpmndi:BPMNShape id="Participant_0prwmpx_di" bpmnElement="Participant_0prwmpx" isHorizontal="true">
<dc:Bounds x="152" y="115" width="680" height="250"/>
<bpmndi:BPMNLabel/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="BPMNShape_1bqmk1q" bpmnElement="StartEvent_1">
<dc:Bounds x="202" y="222" width="36" height="36"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Activity_17n84ra_di" bpmnElement="Activity_1hd3q58">
<dc:Bounds x="293" y="200" width="100" height="80"/>
<bpmndi:BPMNLabel/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Activity_1pw9rgw_di" bpmnElement="Activity_1wp3i80">
<dc:Bounds x="453" y="200" width="100" height="80"/>
<bpmndi:BPMNLabel/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Event_1ywcqc9_di" bpmnElement="Event_1ywcqc9">
<dc:Bounds x="775" y="222" width="36" height="36"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Activity_0tps6w1_di" bpmnElement="Activity_0q14rb4">
<dc:Bounds x="613" y="200" width="100" height="80"/>
<bpmndi:BPMNLabel/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge id="Flow_0tg13dr_di" bpmnElement="Flow_0tg13dr">
<di:waypoint x="238" y="240"/>
<di:waypoint x="293" y="240"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_12lt47r_di" bpmnElement="Flow_12lt47r">
<di:waypoint x="393" y="240"/>
<di:waypoint x="453" y="240"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_0rdeeeu_di" bpmnElement="Flow_0rdeeeu">
<di:waypoint x="553" y="240"/>
<di:waypoint x="613" y="240"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_0fgrfxg_di" bpmnElement="Flow_0fgrfxg">
<di:waypoint x="713" y="240"/>
<di:waypoint x="775" y="240"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</bpmn:definitions>`;