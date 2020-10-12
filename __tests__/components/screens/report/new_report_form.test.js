import React from 'react';
import {shallow} from 'enzyme';
import NewReportForm from '../../../../src/components/screens/reports/new_report_form';
import {findByTestId} from '../../../support/helpers';

describe('NewReportForm', () => {
  let render;
  let props;

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      loading: false,
    };
    render = (appProps) => shallow(<NewReportForm {...appProps} />);
  });

  it('renders without crashing', () => {
    expect(() => render(props)).not.toThrowError();
  });

  it('renders all values correctly', () => {
    expect(render(props)).toMatchSnapshot();
  });

  describe('onChange', () => {
    let value;
    let expectedKey;
    let testId;

    const itCallsOnChangeWithRightValues = () =>
      it('calls onChange prop with right keys', () => {
        findByTestId(render(props), testId).props().onChangeText(value);

        expect(props.onChange).toHaveBeenCalledWith(expectedKey, value);
      });

    describe('when changing title', () => {
      beforeEach(() => {
        value = 'some title';
        expectedKey = 'title';
        testId = 'title_input';
      });

      itCallsOnChangeWithRightValues();
    });

    describe('when changing description', () => {
      beforeEach(() => {
        value = 'some description';
        expectedKey = 'description';
        testId = 'description_input';
      });

      itCallsOnChangeWithRightValues();
    });

    describe('when changing location', () => {
      beforeEach(() => {
        value = 'some location';
        expectedKey = 'location';
        testId = 'location_input';
      });

      itCallsOnChangeWithRightValues();
    });
  });
});
