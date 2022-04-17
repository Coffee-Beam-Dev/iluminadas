import './style.css';

export const LayoutComponents = props => {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login-logo">
          <img className="image-logo" src="./logo-menor.png" alt="Logo" />
        </div>
        <div className="wrap-login">{props.children}</div>
      </div>
    </div>
  );
};
