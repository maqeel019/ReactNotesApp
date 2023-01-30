import logo from '../logo.svg'
function React() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ReactFacts</h1>

        <h3>React Course - Project 1</h3>
      </header>
      <body className="body">
        <h1>Fun Facts About React</h1>
        <ul id="ul">
          <li>Releaded in 2003</li>
          <li>By Jordan Walke</li>
          <li>100K on github</li>
          <li>Maintained by Facebook</li>
          <li>Use for web and app</li>
        </ul>
      </body>
    </div>
  )
}

export default React
