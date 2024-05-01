import { render } from '@testing-library/react';
import HomeView from 'src/view/Home';

describe('Home View', () => {
    it('should be render home view', () => {
        const { container } = render(<HomeView />);
        expect(container).toMatchSnapshot();
    });
});
