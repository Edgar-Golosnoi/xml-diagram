export const bpmnXml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_1pb212d" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.4.2" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.15.0">
  <bpmn:collaboration id="Collaboration_1qptwme">
    <bpmn:participant id="Participant_0yoavem" name="Модальное окно ХОМУТ-12" processRef="Process_07rwga5" />
  </bpmn:collaboration>
  <bpmn:process id="Process_07rwga5" name="Формуляр ХОМУТ-12" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>Flow_15jxup0</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:serviceTask id="Activity_1t6pzak" name="Извлечь информацию о двойном нажатии на запись таблицы" camunda:class="org.pluscom.camunda.delegate.gridformular.CreateFormular">
      <bpmn:extensionElements />
      <bpmn:incoming>Flow_15jxup0</bpmn:incoming>
      <bpmn:outgoing>Flow_0ixlws3</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_0vsuu8d" name="Изменить режим вкладки" camunda:class="org.pluscom.camunda.delegate.util.SetTab">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="state">modal</camunda:inputParameter>
          <camunda:inputParameter name="message_id">Message_3es95en</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0ixlws3</bpmn:incoming>
      <bpmn:outgoing>Flow_18zoz9h</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:intermediateCatchEvent id="Event_0n67jur">
      <bpmn:incoming>Flow_18zoz9h</bpmn:incoming>
      <bpmn:outgoing>Flow_0ds6kny</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_0kc7a9f" messageRef="Message_3es95en" />
    </bpmn:intermediateCatchEvent>
    <bpmn:serviceTask id="Activity_00purcm" name="Получить список бланков" camunda:class="org.pluscom.camunda.delegate.dbaccessor.GetDigestClassifierById">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="id">1</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0ds6kny</bpmn:incoming>
      <bpmn:outgoing>Flow_0ugadm5</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_14900f8" name="Подготовить к инициализации выпадающий список &#34;Тип бланка&#34;" camunda:class="org.pluscom.camunda.delegate.initialization.PrepareDropdownComponent">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="userId">Тип бланка</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0ugadm5</bpmn:incoming>
      <bpmn:outgoing>Flow_075lmfp</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:intermediateCatchEvent id="Event_0htdfvz">
      <bpmn:incoming>Flow_0qanpa2</bpmn:incoming>
      <bpmn:outgoing>Flow_18dt4do</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_00y6ax1" messageRef="Message_3qt3ejc" />
    </bpmn:intermediateCatchEvent>
    <bpmn:serviceTask id="Activity_1pixc5t" name="Получить список журналов" camunda:class="org.pluscom.camunda.delegate.dbaccessor.GetDigestClassifierById">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="id">2</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_075lmfp</bpmn:incoming>
      <bpmn:outgoing>Flow_0siqybj</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_1nk3iwn" name="Подготовить к инициализации выпадающий список &#34;Журнал&#34;" camunda:class="org.pluscom.camunda.delegate.initialization.PrepareDropdownComponent">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="userId">Журнал</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0siqybj</bpmn:incoming>
      <bpmn:outgoing>Flow_0bw7q7y</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_1yen2n3" name="Получить древовидный список внешних структур" camunda:class="org.pluscom.camunda.delegate.dbaccessor.GetNestedClassifierByName">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="order">0</camunda:inputParameter>
          <camunda:inputParameter name="name">Внешние корреспонденты</camunda:inputParameter>
          <camunda:inputParameter name="depth">1</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0bw7q7y</bpmn:incoming>
      <bpmn:outgoing>Flow_01rdsov</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_1m9cfxg" name="Подготовить к инициализации выпадающий список &#34;Откуда&#34;" camunda:class="org.pluscom.camunda.delegate.initialization.PrepareDropdownComponent">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="userId">Откуда</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_01rdsov</bpmn:incoming>
      <bpmn:outgoing>Flow_0zgfshe</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_0tf86ps" name="Получить список внешнего персонала (Затычка!)" camunda:class="org.pluscom.camunda.delegate.dbaccessor.GetPersonnel">
      <bpmn:incoming>Flow_0zgfshe</bpmn:incoming>
      <bpmn:outgoing>Flow_1lw4nb4</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_12s4ooy" name="Подготовить к инициализации выпадающий список &#34;Инициатор&#34;" camunda:class="org.pluscom.camunda.delegate.initialization.PrepareDropdownComponent">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="userId">Инициатор</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_1lw4nb4</bpmn:incoming>
      <bpmn:outgoing>Flow_05qoq80</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_025zw8l" name="Получить список личного состава" camunda:class="org.pluscom.camunda.delegate.dbaccessor.GetPersonnel">
      <bpmn:incoming>Flow_05qoq80</bpmn:incoming>
      <bpmn:outgoing>Flow_0qj68ww</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_0cmnrf4" name="Подготовить к инициализации выпадающий список &#34;Исполнитель&#34;" camunda:class="org.pluscom.camunda.delegate.initialization.PrepareDropdownComponent">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="userId">Исполнитель</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0qj68ww</bpmn:incoming>
      <bpmn:outgoing>Flow_0d9eoj7</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_1shyzsr" name="Получить древовидный список внутренних структур" camunda:class="org.pluscom.camunda.delegate.dbaccessor.GetNestedClassifierByName">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="order">1</camunda:inputParameter>
          <camunda:inputParameter name="name">Оргструктура(test)</camunda:inputParameter>
          <camunda:inputParameter name="depth">1</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0d9eoj7</bpmn:incoming>
      <bpmn:outgoing>Flow_087fcwj</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_1v4cxvf" name="Подготовить к инициализации выпадающий список &#34;Отдел&#34;" camunda:class="org.pluscom.camunda.delegate.initialization.PrepareDropdownComponent">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="userId">Отдел</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_087fcwj</bpmn:incoming>
      <bpmn:outgoing>Flow_0co447l</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_1cagy7t" name="Получить список мероприятий" camunda:class="org.pluscom.camunda.delegate.dbaccessor.GetClassifierByName">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="name">Мероприятия</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0co447l</bpmn:incoming>
      <bpmn:outgoing>Flow_0t11q3v</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_1dz4qya" name="Подготовить к инициализации выпадающий список &#34;Мероприятие&#34;" camunda:class="org.pluscom.camunda.delegate.initialization.PrepareDropdownComponent">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="userId">Мероприятие</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0t11q3v</bpmn:incoming>
      <bpmn:outgoing>Flow_08ezy8f</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_1f2ebwv" name="Инициализировать вкладку" camunda:class="org.pluscom.camunda.delegate.initialization.InitializeComponents">
      <bpmn:extensionElements>
        <camunda:inputOutput>
          <camunda:inputParameter name="message_id">Message_3qt3ejc</camunda:inputParameter>
        </camunda:inputOutput>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_08ezy8f</bpmn:incoming>
      <bpmn:outgoing>Flow_0qanpa2</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:endEvent id="Event_0k7094h">
      <bpmn:incoming>Flow_1sr2xp8</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_15jxup0" sourceRef="StartEvent_1" targetRef="Activity_1t6pzak" />
    <bpmn:sequenceFlow id="Flow_0ixlws3" sourceRef="Activity_1t6pzak" targetRef="Activity_0vsuu8d" />
    <bpmn:sequenceFlow id="Flow_18zoz9h" sourceRef="Activity_0vsuu8d" targetRef="Event_0n67jur" />
    <bpmn:sequenceFlow id="Flow_0ds6kny" sourceRef="Event_0n67jur" targetRef="Activity_00purcm" />
    <bpmn:sequenceFlow id="Flow_0ugadm5" sourceRef="Activity_00purcm" targetRef="Activity_14900f8" />
    <bpmn:sequenceFlow id="Flow_075lmfp" sourceRef="Activity_14900f8" targetRef="Activity_1pixc5t" />
    <bpmn:sequenceFlow id="Flow_0qanpa2" sourceRef="Activity_1f2ebwv" targetRef="Event_0htdfvz" />
    <bpmn:sequenceFlow id="Flow_18dt4do" sourceRef="Event_0htdfvz" targetRef="Activity_1sc2512" />
    <bpmn:sequenceFlow id="Flow_0siqybj" sourceRef="Activity_1pixc5t" targetRef="Activity_1nk3iwn" />
    <bpmn:sequenceFlow id="Flow_0bw7q7y" sourceRef="Activity_1nk3iwn" targetRef="Activity_1yen2n3" />
    <bpmn:sequenceFlow id="Flow_01rdsov" sourceRef="Activity_1yen2n3" targetRef="Activity_1m9cfxg" />
    <bpmn:sequenceFlow id="Flow_0zgfshe" sourceRef="Activity_1m9cfxg" targetRef="Activity_0tf86ps" />
    <bpmn:sequenceFlow id="Flow_1lw4nb4" sourceRef="Activity_0tf86ps" targetRef="Activity_12s4ooy" />
    <bpmn:sequenceFlow id="Flow_05qoq80" sourceRef="Activity_12s4ooy" targetRef="Activity_025zw8l" />
    <bpmn:sequenceFlow id="Flow_0qj68ww" sourceRef="Activity_025zw8l" targetRef="Activity_0cmnrf4" />
    <bpmn:sequenceFlow id="Flow_0d9eoj7" sourceRef="Activity_0cmnrf4" targetRef="Activity_1shyzsr" />
    <bpmn:sequenceFlow id="Flow_087fcwj" sourceRef="Activity_1shyzsr" targetRef="Activity_1v4cxvf" />
    <bpmn:sequenceFlow id="Flow_0co447l" sourceRef="Activity_1v4cxvf" targetRef="Activity_1cagy7t" />
    <bpmn:sequenceFlow id="Flow_0t11q3v" sourceRef="Activity_1cagy7t" targetRef="Activity_1dz4qya" />
    <bpmn:sequenceFlow id="Flow_08ezy8f" sourceRef="Activity_1dz4qya" targetRef="Activity_1f2ebwv" />
    <bpmn:sequenceFlow id="Flow_0jfwupl" sourceRef="Activity_1sc2512" targetRef="Activity_1dlf8i6" />
    <bpmn:sequenceFlow id="Flow_1sr2xp8" sourceRef="Activity_1dlf8i6" targetRef="Event_0k7094h" />
    <bpmn:task id="Activity_1sc2512" name="Получить информацию о текущей записи (Запрос к БД по id)">
      <bpmn:incoming>Flow_18dt4do</bpmn:incoming>
      <bpmn:outgoing>Flow_0jfwupl</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Activity_1dlf8i6" name="Заполнить вкладку значениями текущей записи (setComponents по запросу к БД)">
      <bpmn:incoming>Flow_0jfwupl</bpmn:incoming>
      <bpmn:outgoing>Flow_1sr2xp8</bpmn:outgoing>
    </bpmn:task>
    <bpmn:textAnnotation id="TextAnnotation_01dc68i">
      <bpmn:text>Можно заменить данную часть на вызов ИП для инициализации</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Association_119et4k" sourceRef="Activity_00purcm" targetRef="TextAnnotation_01dc68i" />
  </bpmn:process>
  <bpmn:message id="Message_0triv3d" name="Message_0triv3d" />
  <bpmn:message id="Message_3db7rlb" name="Message_3db7rlb" />
  <bpmn:message id="Message_3es95en" name="Message_3es95en" />
  <bpmn:message id="Message_0s5ab92" name="Message_0s5ab92" />
  <bpmn:message id="Message_3qt3ejc" name="Message_3qt3ejc" />
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_1qptwme">
      <bpmndi:BPMNShape id="Participant_0yoavem_di" bpmnElement="Participant_0yoavem" isHorizontal="true">
        <dc:Bounds x="129" y="80" width="3671" height="300" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_01dc68i_di" bpmnElement="TextAnnotation_01dc68i">
        <dc:Bounds x="684" y="90" width="112" height="108" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="179" y="249" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_05z4ynq_di" bpmnElement="Activity_1t6pzak">
        <dc:Bounds x="270" y="227" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_05ivfhe_di" bpmnElement="Activity_0vsuu8d">
        <dc:Bounds x="430" y="227" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0cjyo11_di" bpmnElement="Event_0n67jur">
        <dc:Bounds x="592" y="249" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0g680g0_di" bpmnElement="Activity_00purcm">
        <dc:Bounds x="690" y="227" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_18hpcqn_di" bpmnElement="Activity_14900f8">
        <dc:Bounds x="860" y="227" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_03g1ebn_di" bpmnElement="Event_0htdfvz">
        <dc:Bounds x="3242" y="249" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0qpn5g3_di" bpmnElement="Activity_1pixc5t">
        <dc:Bounds x="1030" y="227" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0b83huf_di" bpmnElement="Activity_1nk3iwn">
        <dc:Bounds x="1200" y="227" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0682mt5_di" bpmnElement="Activity_1yen2n3">
        <dc:Bounds x="1370" y="227" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1jt1inz_di" bpmnElement="Activity_1m9cfxg">
        <dc:Bounds x="1540" y="227" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1w6d6as_di" bpmnElement="Activity_0tf86ps">
        <dc:Bounds x="1710" y="227" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1p6nj69_di" bpmnElement="Activity_12s4ooy">
        <dc:Bounds x="1880" y="227" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_18fckuy_di" bpmnElement="Activity_025zw8l">
        <dc:Bounds x="2050" y="227" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_16ucg92_di" bpmnElement="Activity_0cmnrf4">
        <dc:Bounds x="2220" y="227" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_07xrqlz_di" bpmnElement="Activity_1shyzsr">
        <dc:Bounds x="2390" y="227" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1tbxxfm_di" bpmnElement="Activity_1v4cxvf">
        <dc:Bounds x="2560" y="227" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1vk66ky_di" bpmnElement="Activity_1cagy7t">
        <dc:Bounds x="2730" y="227" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_189mhli_di" bpmnElement="Activity_1dz4qya">
        <dc:Bounds x="2900" y="227" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_01u09xc_di" bpmnElement="Activity_1f2ebwv">
        <dc:Bounds x="3070" y="227" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0k7094h_di" bpmnElement="Event_0k7094h">
        <dc:Bounds x="3712" y="249" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0inq6o2_di" bpmnElement="Activity_1sc2512">
        <dc:Bounds x="3350" y="227" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1bzo7bl_di" bpmnElement="Activity_1dlf8i6">
        <dc:Bounds x="3530" y="227" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_119et4k_di" bpmnElement="Association_119et4k">
        <di:waypoint x="739" y="227" />
        <di:waypoint x="737" y="198" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_15jxup0_di" bpmnElement="Flow_15jxup0">
        <di:waypoint x="215" y="267" />
        <di:waypoint x="270" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ixlws3_di" bpmnElement="Flow_0ixlws3">
        <di:waypoint x="370" y="267" />
        <di:waypoint x="430" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_18zoz9h_di" bpmnElement="Flow_18zoz9h">
        <di:waypoint x="530" y="267" />
        <di:waypoint x="592" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ds6kny_di" bpmnElement="Flow_0ds6kny">
        <di:waypoint x="628" y="267" />
        <di:waypoint x="690" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ugadm5_di" bpmnElement="Flow_0ugadm5">
        <di:waypoint x="790" y="267" />
        <di:waypoint x="860" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_075lmfp_di" bpmnElement="Flow_075lmfp">
        <di:waypoint x="960" y="267" />
        <di:waypoint x="1030" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0qanpa2_di" bpmnElement="Flow_0qanpa2">
        <di:waypoint x="3170" y="267" />
        <di:waypoint x="3242" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_18dt4do_di" bpmnElement="Flow_18dt4do">
        <di:waypoint x="3278" y="267" />
        <di:waypoint x="3350" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0siqybj_di" bpmnElement="Flow_0siqybj">
        <di:waypoint x="1130" y="267" />
        <di:waypoint x="1200" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0bw7q7y_di" bpmnElement="Flow_0bw7q7y">
        <di:waypoint x="1300" y="267" />
        <di:waypoint x="1370" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_01rdsov_di" bpmnElement="Flow_01rdsov">
        <di:waypoint x="1470" y="267" />
        <di:waypoint x="1540" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0zgfshe_di" bpmnElement="Flow_0zgfshe">
        <di:waypoint x="1640" y="267" />
        <di:waypoint x="1710" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1lw4nb4_di" bpmnElement="Flow_1lw4nb4">
        <di:waypoint x="1810" y="267" />
        <di:waypoint x="1880" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_05qoq80_di" bpmnElement="Flow_05qoq80">
        <di:waypoint x="1980" y="267" />
        <di:waypoint x="2050" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0qj68ww_di" bpmnElement="Flow_0qj68ww">
        <di:waypoint x="2150" y="267" />
        <di:waypoint x="2220" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0d9eoj7_di" bpmnElement="Flow_0d9eoj7">
        <di:waypoint x="2320" y="267" />
        <di:waypoint x="2390" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_087fcwj_di" bpmnElement="Flow_087fcwj">
        <di:waypoint x="2490" y="267" />
        <di:waypoint x="2560" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0co447l_di" bpmnElement="Flow_0co447l">
        <di:waypoint x="2660" y="267" />
        <di:waypoint x="2730" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0t11q3v_di" bpmnElement="Flow_0t11q3v">
        <di:waypoint x="2830" y="267" />
        <di:waypoint x="2900" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_08ezy8f_di" bpmnElement="Flow_08ezy8f">
        <di:waypoint x="3000" y="267" />
        <di:waypoint x="3070" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0jfwupl_di" bpmnElement="Flow_0jfwupl">
        <di:waypoint x="3450" y="267" />
        <di:waypoint x="3530" y="267" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1sr2xp8_di" bpmnElement="Flow_1sr2xp8">
        <di:waypoint x="3630" y="267" />
        <di:waypoint x="3712" y="267" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;