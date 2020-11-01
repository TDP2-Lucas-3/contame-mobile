import React from 'react';
import {shallow} from 'enzyme';
import NewReportForm from '../../../../../src/components/screens/reports/new/new_report_form';

describe('NewReportForm', () => {
  let render;
  let props;

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      loading: false,
      data: {},
    };
    render = (appProps) => shallow(<NewReportForm {...appProps} />);
  });

  it('renders without crashing', () => {
    expect(() => render(props)).not.toThrowError();
  });

  it('renders all values correctly', () => {
    expect(render(props)).toMatchSnapshot();
  });
});
