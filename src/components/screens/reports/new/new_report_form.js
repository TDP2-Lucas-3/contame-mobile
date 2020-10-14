import React, {useRef} from 'react';
import {View} from 'react-native';
import Wizard from 'react-native-wizard';
import CategoryStep from './steps/category';
import TitleStep from './steps/title';
import IncidentLocationMapViewStep from './steps/incident_location_map_view';

const NewReportForm = (props) => {
  const wizard = useRef(null);

  const next = () => {
    wizard.current.next();
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
      content: <TitleStep onChange={props.onChange} onSelect={next} />,
    },
    {
      content: <IncidentLocationMapViewStep onSelect={onSelect} skip={next} />,
    },
  ];

  return (
    <View>
      <Wizard ref={wizard} steps={stepList} />
    </View>
  );
};

export default NewReportForm;
