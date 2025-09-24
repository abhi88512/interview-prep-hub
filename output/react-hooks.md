what will be the output for beow and also explain concepts?

1. use state:

const [count, setCount] = useState(0);
const handleIncrement1 = () => {
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
};

const handleIncrement2 = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
};

