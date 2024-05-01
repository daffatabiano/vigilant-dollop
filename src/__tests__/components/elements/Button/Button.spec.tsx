import { render } from '@testing-library/react';
import Button from 'src/components/elements/Button/Button';

describe('button element', () => {
    it('should render correctly button', () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
    });
});
