import { useState } from 'preact/hooks';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={(_) => setCount(count + 1)}>{count}</button>;
}
