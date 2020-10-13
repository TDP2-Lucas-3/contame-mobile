import React from 'react';
import {shallow} from 'enzyme';
import NewReportForm from '../../../../src/components/screens/reports/new/new_report_form';
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

  describe('Wizard', () => {
    let component;

    beforeEach(() => {
      component = render(props);
    });

    it('renders category as first step', () => {
      expect(() => findByTestId(component, 'category_step')).not.toThrowError();
    });
  });
});
