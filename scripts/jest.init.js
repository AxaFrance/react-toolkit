// TODO: Remove this `raf` polyfill once the below issue is sorted
// https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-332842582
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './jest.polyfills';
import '@testing-library/jest-dom';

Enzyme.configure({ adapter: new Adapter() });
