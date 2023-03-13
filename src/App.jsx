import './App.css'
//Import Emr Tokens
import * as tokens from '@philips-internal/emr-tokens-variables';

function App() {

  const AppStyle = {
    fontFamily: tokens.FontSansnext,
    color: tokens.GlobalGray60,
  }

  const LogoStyle = {
    height: tokens.Size32,
    marginBottom: tokens.Size12,
  }

  const AppName = {
    fontSize: tokens.FontSize4,
    marginBottom: tokens.Size12,
  }

  const InputStyle = {
    borderColor: tokens.GlobalGray10,
    borderRadius: tokens.InputBorderRadius,
    fontSize: tokens.FontSize1,
    marginBottom: tokens.Size3,
    paddingLeft: tokens.Size4,
    backgroundColor: tokens.GlobalNeutralWhite,
    height: tokens.Size10,
  }

  const BtnStyle = {
    backgroundColor: tokens.GlobalGroupblue45,
    borderRadius: tokens.ButtonBorderRadius,
    color:tokens.ColorPrimaryNormalOnBackground,
    fontSize: tokens.FontRootBase,
    marginBottom: tokens.Size3,
    height: tokens.Size10,
    padding: tokens.ButtonPaddingNone,
  }

  const LinkStyle = {
    color: tokens.GlobalGray60,
  }

  return (
    <div className="App" style={ AppStyle }>
      <div>
          <img src="/philips-logo.svg"  style={ LogoStyle } alt="Philips Logo" />
          <h3 style={ AppName }>Application name</h3>
      </div>
      <div className="form">
        <input type="text" placeholder="Username" style={ InputStyle }/>
        <input type="password" placeholder="Password" style ={ InputStyle }/>
        <button style={ BtnStyle }>
          Log in
        </button>
        <a href="#" style={ LinkStyle } >
          Forgot password
        </a>
      </div>
    </div>
  )
}

export default App
