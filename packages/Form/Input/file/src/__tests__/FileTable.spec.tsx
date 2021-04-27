import React from 'react';
import { render } from '@testing-library/react';
import FileTable from '../FileTable';

describe('<File.FileTable>', () => {
  it('renders File.FileTable correctly', () => {
    const { asFragment } = render(
      <FileTable
        errors={[{ file: { name: 'youhou.txt', preview: '', size: 2 } }]}
        values={[
          { file: { name: 'superfile.pdf', preview: '', size: 2 }, id: 'id' },
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders File.FileTable correctly when no have values', () => {
    const { asFragment, queryByRole } = render(
      <FileTable
        errors={[{ file: { name: 'youhou.txt', size: 2, preview: '' } }]}
        values={[]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(queryByRole('list')).toHaveClass('af-form__file-errors-list');
    expect(queryByRole('list')).toBeInTheDocument();
  });

  it('renders Errors correctly with empty errors', () => {
    const { asFragment, queryByRole } = render(
      <FileTable
        values={[
          { file: { name: 'youhou.txt', size: 2, preview: '' }, id: 'id' },
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(queryByRole('list')).not.toHaveClass('af-form__file-errors-list');
  });
});
