import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import Wizard from 'react-native-wizard';
import CategoryStep from './steps/category';
import TitleStep from './steps/title';
import {Button} from 'react-native-elements';

const NewReportForm = (props) => {
  const wizard = useRef(null);
  const [onLastStep, setOnLastStep] = useState(0);

  const stepList = [
    {
      content: (
        <CategoryStep onChange={props.onChange} selected={props.category} />
      ),
    },
    {
      content: <TitleStep onChange={props.onChange} />,
    },
  ];

  const nextButton = (
    <Button title="Siguiente" onPress={() => wizard.current.next()} />
  );

  const completeButton = <Button title="Contame!" onPress={props.onSubmit} />;

  return (
    <View>
      <Wizard
        ref={wizard}
        steps={stepList}
        currentStep={({isLastStep}) => setOnLastStep(isLastStep)}
      />
      {onLastStep ? completeButton : nextButton}
    </View>
  );
};

export default NewReportForm;
