const Home = () => {
  const handleClick = () => {
    console.log('Clicked Button');
  };

  const handleClickAgain = (name, e) => {
    console.log(`Clicked by ${name}`);
    console.log(e);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickAgain('Ralph', e)}>Click Again</button>
    </div>
  );
};

export default Home;
