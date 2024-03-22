import { Counter } from "~/components/counter";

export default defineRenderHandler(() => {
  return {
    body: <Counter />,
  };
});
