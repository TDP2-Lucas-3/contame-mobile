import React, {useRef} from 'react';
import {View} from 'react-native';
import Wizard from 'react-native-wizard';
import CategoryStep from './steps/category';
import TitleStep from './steps/title';
import IncidentLocationMapViewStep from './steps/incident_location_map_view';
import DescriptionStep from './steps/description';
import ConfirmStep from './steps/confirm';

const NewReportForm = (props) => {
  const wizard = useRef(null);

  const next = () => {
    wizard.current.next();
  };

  const back = () => {
    wizard.current.prev();
  };

  const first = () => {
    wizard.current.goTo(0);
  };

  const onSelect = (...params) => {
    props.onChange(...params);
    next();
  };

  const stepList = [
    {
      content: <CategoryStep onChange={onSelect} selected={props.category} />,
    },
    {
      content: (
        <TitleStep
          onChange={props.onChange}
          onSelect={next}
          title={props.title}
          onBack={back}
        />
      ),
    },
    {
      content: (
        <DescriptionStep
          onChange={props.onChange}
          onSelect={next}
          onBack={back}
          description={props.description}
        />
      ),
    },
    {
      content: <IncidentLocationMapViewStep onSelect={onSelect} skip={next} />,
    },
    {
      content: <ConfirmStep first={first} />,
    },
  ];

  return (
    <View>
      <Wizard
        ref={wizard}
        steps={stepList}
        nextStepAnimation="slideRight"
        prevStepAnimation="slideLeft"
      />
    </View>
  );
};

export default NewReportForm;
