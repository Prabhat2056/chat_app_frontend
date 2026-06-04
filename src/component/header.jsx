const Header = () => {
  return (
    <div className="app-header">
      <div className="app-logo">
        <i className="fa-solid fa-message" aria-hidden="true"></i>
        Quick Chat
      </div>
      <div className="app-user-profile">
        <div className="logged-user-name">Prabhat</div>
        <div className="logged-user-profile-pic">PB</div>
      </div>
    </div>
  );
};

export default Header;
