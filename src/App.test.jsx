import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('タスクを追加すると一覧と残タスク数に反映される', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByRole('textbox'), '買い物');
  await user.click(screen.getByRole('button', { name: 'タスクを追加' }));

  expect(screen.getByText('買い物')).toBeInTheDocument();
  expect(screen.getByText(/残りのタスク:1/)).toBeInTheDocument();
});
