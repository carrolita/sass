import React from "react"
import "./App.scss"

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="centered-container">
          <div className="tab-container">
            <div className="tab active">
              <span>Flyg</span>
            </div>
            <div className="tab">
              <span>Flyg + Hotell</span>
            </div>
            <div className="tab">
              <span>Hyrbil</span>
            </div>
            <div className="tab">
              <span>Hotell</span>
            </div>
            <div className="tab">
              <span>Reward</span>
            </div>
          </div>
          <form className="form" action="/action_page.php">
            <div className="input-items">
              <div className="input-container">
                <span htmlFor="from">Flyg från</span>
                <input id="from" className="input" type="text" name="from" placeholder="Stockholm-Arlanda (ARN)" />
              </div>
              <div className="input-container">
                <span htmlFor="to">Flyg till</span>
                <input id="to" className="input" type="text" name="to" placeholder="Vart vill du resa?" />
              </div>
            </div>
            <div className="button-container">
              <button className="button" type="submit">Sök och beställ</button>
            </div>
          </form>
        </div>

      </div>
    )
  }

}

export default App
