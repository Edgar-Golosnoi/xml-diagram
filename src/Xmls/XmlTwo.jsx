export const bpmnXml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_1n35as2" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.4.2" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.15.0">
  <bpmn:collaboration id="Collaboration_0f4us28">
    <bpmn:participant id="Participant_07rlxkk" name="Переключение на другую вкладку" processRef="Process_0yhlyzn" />
  </bpmn:collaboration>
  <bpmn:process id="Process_0yhlyzn" name="АТС, переключение на перечень" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>Flow_05e101x</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:endEvent id="Event_0t06k9u">
      <bpmn:incoming>Flow_1679h5v</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:intermediateCatchEvent id="Event_0cdg81a">
      <bpmn:incoming>Flow_1rvq6v5</bpmn:incoming>
      <bpmn:outgoing>Flow_0y3op9v</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_140yt0t" messageRef="Message_1sae8ea" />
    </bpmn:intermediateCatchEvent>
    <bpmn:serviceTask id="Activity_1ubskk8" name="Переключить режим работы на другую вкладку" camunda:class="org.pluscom.camunda.delegate.util.SetCurrentTabId">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="newTabName">Перечень АТС</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_05e101x</bpmn:incoming>
      <bpmn:outgoing>Flow_12zchn1</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_0gkwlt7" name="Изменить режим вкладки" camunda:class="org.pluscom.camunda.delegate.util.SetTab">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="state">normal</camunda:inputParameter>
          <camunda:inputParameter name="message_id">Message_1sae8ea</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_12zchn1</bpmn:incoming>
      <bpmn:outgoing>Flow_1rvq6v5</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_0ppqi1q" name="Сделать вкладку активной" camunda:class="org.pluscom.camunda.delegate.util.SetActiveTab">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="hasParent">1</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0y3op9v</bpmn:incoming>
      <bpmn:outgoing>Flow_1679h5v</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_05e101x" sourceRef="StartEvent_1" targetRef="Activity_1ubskk8" />
    <bpmn:sequenceFlow id="Flow_1679h5v" sourceRef="Activity_0ppqi1q" targetRef="Event_0t06k9u" />
    <bpmn:sequenceFlow id="Flow_1rvq6v5" sourceRef="Activity_0gkwlt7" targetRef="Event_0cdg81a" />
    <bpmn:sequenceFlow id="Flow_0y3op9v" sourceRef="Event_0cdg81a" targetRef="Activity_0ppqi1q" />
    <bpmn:sequenceFlow id="Flow_12zchn1" sourceRef="Activity_1ubskk8" targetRef="Activity_0gkwlt7" />
  </bpmn:process>
  <bpmn:message id="Message_1sae8ea" name="Message_1sae8ea" />
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_0f4us28">
      <bpmndi:BPMNShape id="Participant_07rlxkk_di" bpmnElement="Participant_07rlxkk" isHorizontal="true">
        <dc:Bounds x="129" y="52" width="780" height="250" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="179" y="159" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0t06k9u_di" bpmnElement="Event_0t06k9u">

Edgar Golosnoi, [21.04.2023 14:06]
<dc:Bounds x="852" y="159" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_19nl4hx_di" bpmnElement="Event_0cdg81a">
        <dc:Bounds x="592" y="159" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0jvma39_di" bpmnElement="Activity_1ubskk8">
        <dc:Bounds x="270" y="137" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0h3piv4_di" bpmnElement="Activity_0gkwlt7">
        <dc:Bounds x="430" y="137" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1el5wdh_di" bpmnElement="Activity_0ppqi1q">
        <dc:Bounds x="690" y="137" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_05e101x_di" bpmnElement="Flow_05e101x">
        <di:waypoint x="215" y="177" />
        <di:waypoint x="270" y="177" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1679h5v_di" bpmnElement="Flow_1679h5v">
        <di:waypoint x="790" y="177" />
        <di:waypoint x="852" y="177" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1rvq6v5_di" bpmnElement="Flow_1rvq6v5">
        <di:waypoint x="530" y="177" />
        <di:waypoint x="592" y="177" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0y3op9v_di" bpmnElement="Flow_0y3op9v">
        <di:waypoint x="628" y="177" />
        <di:waypoint x="690" y="177" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_12zchn1_di" bpmnElement="Flow_12zchn1">
        <di:waypoint x="370" y="177" />
        <di:waypoint x="430" y="177" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;