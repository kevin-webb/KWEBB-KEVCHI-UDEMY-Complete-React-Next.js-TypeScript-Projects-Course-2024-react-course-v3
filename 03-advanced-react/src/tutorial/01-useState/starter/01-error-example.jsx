const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count += 1;
    console.log(count);
  };

  return (
    <>
      <h2>useState error example</h2>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick}>
        Increase Count
      </button>
    </>
  );
};

export default ErrorExample;
