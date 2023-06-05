import { render, screen } from '@testing-library/react';
import PageDescription from '@/components/PageDescription';
import '@testing-library/jest-dom';
 
describe('Home page', () => {
  it('renders a heading', () => {
    const title = "DAILY MENU";
    const subtitle= "YUCATAN FOOD";
    const description = "Select your favorite dish or dessert, add it to the cart, and place an order."
    render(<PageDescription title={title} subtitle={subtitle} description={description}/>);
 
    const heading = screen.getByText(title);
    expect(heading).toBeInTheDocument();
    const tSubtitle = screen.getByText(subtitle);
    expect(tSubtitle).toBeInTheDocument();
  });
});