import React from 'react';
import {shallow} from 'enzyme';
import ReportDetails from '../../../../src/components/screens/reports/list/report_details';
import {findByTestId} from '../../../support/helpers';

describe('ReportDetails', () => {
  let render;
  let props;

  beforeEach(() => {
    props = {
      title: 'a report',
      description: 'some description',
      images: ['some image data'],
    };
    render = (appProps) => shallow(<ReportDetails {...appProps} />);
  });

  it('renders without crashing', () => {
    expect(() => render(props)).not.toThrowError();
  });

  it('renders all values correctly', () => {
    expect(render(props)).toMatchSnapshot();
  });

  describe('when there is an image', () => {
    it('renders given image', () => {
      expect(findByTestId(render(props), 'card_image')).toHaveProp(
        'source',
        expect.objectContaining({uri: props.images[0]}),
      );
    });
  });
});
