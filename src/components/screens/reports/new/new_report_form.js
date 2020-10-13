import React, {useRef} from 'react';
import Wizard from 'react-native-wizard';
import CategoryStep from './steps/category';

const NewReportForm = (props) => {
  const wizard = useRef(null);

  const stepList = [
    {
      content: (
        <CategoryStep onChange={props.onChange} selected={props.category} />
      ),
    },
  ];

  return <Wizard ref={wizard} steps={stepList} />;
};

export default NewReportForm;
