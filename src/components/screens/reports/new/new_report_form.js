import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Wizard from 'react-native-wizard';
import CategoryStep from './steps/category';
import TitleStep from './steps/title';
import IncidentLocationMapViewStep from './steps/incident_location_map_view';
import DescriptionStep from './steps/description';
import ImagesStep from './steps/images';
import ConfirmStep from './steps/confirm';
import COLORS from '../../../../styles/colors';
import RalewayText from '../../../common/raleway_text';

const newReportFormStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.main,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  wizardContainer: {
    margin: 20,
  },
  header: {
    height: 200,
    marginTop: 60,
    marginLeft: 20,
  },
  title: {
    fontSize: 48,
    color: 'white',
  },
  stepIndicator: {
    width: 10,
    height: 10,
    borderRadius: 20,
    color: 'white',
    marginRight: 10,
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
});

const NewReportForm = (props) => {
  const wizard = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

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
      content: (
        <CategoryStep
          onChange={props.onChange}
          category={props.data.category}
          subcategory={props.data.subcategory}
          onNext={next}
        />
      ),
    },
    {
      content: (
        <TitleStep
          onChange={props.onChange}
          onSelect={next}
          title={props.data.title}
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
          description={props.data.description}
        />
      ),
    },
    {
      content: (
        <IncidentLocationMapViewStep
          onSelect={onSelect}
          skip={next}
          onBack={back}
        />
      ),
    },
    {
      content: (
        <ImagesStep onNext={next} onChange={props.onChange} onBack={back} />
      ),
    },
    {
      content: (
        <ConfirmStep
          first={first}
          onSubmit={props.onSubmit}
          data={props.data}
        />
      ),
    },
  ];

  return (
    <>
      <View style={newReportFormStyles.header}>
        <RalewayText style={newReportFormStyles.title}>
          {'Nueva \nIncidencia'}
        </RalewayText>
        <View style={newReportFormStyles.stepIndicatorContainer}>
          {stepList.map((step, index) => (
            <View
              key={`indicator-${index}`}
              style={[
                newReportFormStyles.stepIndicator,
                {
                  backgroundColor:
                    currentStep === index
                      ? COLORS.main
                      : newReportFormStyles.stepIndicator.color,
                },
              ]}
            />
          ))}
        </View>
      </View>
      <View style={newReportFormStyles.container}>
        <View style={newReportFormStyles.wizardContainer}>
          <Wizard
            ref={wizard}
            steps={stepList}
            nextStepAnimation="slideRight"
            prevStepAnimation="slideLeft"
            useNativeDriver={true}
            currentStep={({currentStep}) => {
              setCurrentStep(currentStep);
            }}
          />
        </View>
      </View>
    </>
  );
};

export default NewReportForm;
