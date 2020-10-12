export const findByTestId = (wrapper, id) =>
  wrapper.findWhere((node) => node.prop('testID') === id);
