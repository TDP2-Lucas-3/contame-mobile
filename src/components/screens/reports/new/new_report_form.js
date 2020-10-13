import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import Wizard from 'react-native-wizard';
import CategoryStep from './steps/category';
import TitleStep from './steps/title';
import {Button} from 'react-native-elements';
import {styles} from '../../../../styles/common';

const NewReportForm = (props) => {
  const wizard = useRef(null);
  const [isLastStep, setIsLastStep] = useState(0);

  const stepList = [
    {
      content: (
        <CategoryStep
          onChange={props.onChange}
          selected={props.category}
          testID="category_step"
        />
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
    <View style={styles.m_1}>
      <Wizard
        ref={wizard}
        steps={stepList}
        currentStep={({isLastStep}) => setIsLastStep(isLastStep)}
      />
      {isLastStep ? completeButton : nextButton}
    </View>
  );
};

export default NewReportForm;
