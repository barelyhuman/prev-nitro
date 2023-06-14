import Counter from '../components/counter';
import renderComponent from 'preact-render-to-string';

export default defineEventHandler(() => {
  return renderComponent(<Counter />);
});
