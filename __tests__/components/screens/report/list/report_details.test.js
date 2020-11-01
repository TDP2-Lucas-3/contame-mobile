import React from 'react';
import {shallow} from 'enzyme';
import ReportDetails from '../../../../../src/components/screens/reports/list/report_details';
import {findByTestId} from '../../../../support/helpers';

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

  describe('when there is only one image', () => {
    it('renders given image', () => {
      expect(findByTestId(render(props), 'card_image')).toHaveProp(
        'source',
        expect.objectContaining({uri: props.images[0]}),
      );
    });
  });

  describe('when there are multiple images', () => {
    beforeEach(() => {
      props.images = ['first image data', 'second image data'];
    });

    it('renders first image', () => {
      expect(findByTestId(render(props), 'card_image')).toHaveProp(
        'source',
        expect.objectContaining({uri: props.images[0]}),
      );
    });
  });

  describe('when there is no images', () => {
    beforeEach(() => {
      props.images = [];
    });

    it("doesn't render any image", () => {
      expect(findByTestId(render(props), 'card_image')).toHaveLength(0);
    });

    it('renders default icon', () => {
      expect(findByTestId(render(props), 'default_icon')).toHaveLength(1);
    });
  });
});
