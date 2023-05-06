function App() {
  const currDate = new Date()

  return (
    <div className="App">
      <h1>Time: {currDate.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
