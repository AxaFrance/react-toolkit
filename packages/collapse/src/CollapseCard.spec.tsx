import React, { ComponentProps } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CollapseCard from './CollapseCard';

const setup = (
  props: Omit<ComponentProps<typeof CollapseCard>, 'children'>
) => {
  const utils = render(
    <CollapseCard {...props}>
      <CollapseCard.Header>Collapsible Group Item #1</CollapseCard.Header>
      <CollapseCard.Body>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
        beer farm-to-table, raw denim aesthetic synth nesciunt you probably
        haven&apos;t heard of them accusamus labore sustainable VHS.
      </CollapseCard.Body>
    </CollapseCard>
  );
  return { ...utils };
};

describe('CollapseCard', () => {
  it('renders CollapseCard correctly', () => {
    const { asFragment } = setup({ id: 'collapse1' });
    expect(asFragment()).toMatchSnapshot();
  });

  it('onToggle call onToggle', async () => {
    const onToggle = jest.fn();
    const { getByRole } = setup({
      onToggle,
      id: 'collapse1',
      classModifier: 'classModifier',
      className: '',
      isOpen: false,
    });
    const header = getByRole('link');

    fireEvent.click(header);

    await waitFor(() => {
      expect(onToggle).toHaveBeenCalledWith({
        isOpen: true,
        id: 'collapse1',
        index: 0,
      });
    });
  });

  it('should render any child', () => {
    const { container } = render(
      <CollapseCard>
        <h1>h1</h1>
        <p>p</p>
      </CollapseCard>
    );
    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('p')).toBeInTheDocument();
  });
});
