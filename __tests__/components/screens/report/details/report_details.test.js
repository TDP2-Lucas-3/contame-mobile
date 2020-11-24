import React from 'react';
import {shallow} from 'enzyme';
import ReportDetails from '../../../../../src/components/screens/reports/details/report_details';

describe('ReportDetails', () => {
  let render;
  let props;

  beforeEach(() => {
    props = {
      report: {
        title: 'a report',
        description: 'some description',
        images: ['some image data'],
        location: {
          latitude: -1,
          longitude: -1,
        },
        creationDate: new Date('11/18/2020'),
        category: {},
      },
    };
    render = (appProps) => shallow(<ReportDetails {...appProps} />);
  });

  it('renders without crashing', () => {
    expect(() => render(props)).not.toThrowError();
  });

  it('renders all values correctly', () => {
    expect(render(props)).toMatchSnapshot();
  });
});
