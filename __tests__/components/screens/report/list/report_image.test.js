import React from 'react';
import {shallow} from 'enzyme';
import {findByTestId} from '../../../../support/helpers';
import {ReportImage} from '../../../../../src/components/screens/reports/list/report_image';

describe('ReportImage', () => {
  let render;
  let props;

  beforeEach(() => {
    props = {
      image: 'some image data',
      state: 'REPORTED',
    };
    render = (appProps) => shallow(<ReportImage {...appProps} />);
  });

  it('renders without crashing', () => {
    expect(() => render(props)).not.toThrowError();
  });

  it('renders all values correctly', () => {
    expect(render(props)).toMatchSnapshot();
  });

  describe('when there are multiple images', () => {
    beforeEach(() => {
      props.image = 'image';
    });

    it('renders image', () => {
      expect(findByTestId(render(props), 'card_image')).toHaveProp(
        'source',
        expect.objectContaining({uri: props.image}),
      );
    });
  });

  describe('when there is no image', () => {
    beforeEach(() => {
      props.image = undefined;
    });

    it("doesn't render any image", () => {
      expect(findByTestId(render(props), 'card_image')).toHaveLength(0);
    });

    it('renders default icon', () => {
      expect(findByTestId(render(props), 'default_icon')).toHaveLength(1);
    });
  });
});
