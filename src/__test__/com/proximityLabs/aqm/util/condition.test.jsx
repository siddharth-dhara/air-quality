import { getCondition } from '../../../../../com/proximityLabs/aqm/util/condition';

it(' getCondition should return proper level and color', () => {
  expect(getCondition(0).color).toEqual('#009966');
  expect(getCondition(0).level).toEqual('Good');
  expect(getCondition(150).color).toEqual('#FF9933');
  expect(getCondition(150).level).toEqual('Moderate');
  expect(getCondition(350).color).toEqual('#7E0023');
  expect(getCondition(350).level).toEqual('Sever & Hazardous');
});
