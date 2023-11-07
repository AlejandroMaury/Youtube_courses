import "./TwitterCard.css";
import { useState } from "react";
// eslint-disable-next-line react/prop-types, no-unused-vars
export function TwitterCard({ formatUserName, userName, name }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const imageSource = `https://unavatar.io/${userName}`;
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img className="avatar" src={imageSource} alt="imagen de usuario" />

          <div className="tw-followCard-info">
            <strong className="tw-followCard-username">{name}</strong>

            <span>{formatUserName(userName)}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-text">{text} </span>
            <span className="tw-followCard-unFollow">Dejar de seguir</span>
          </button>
        </aside>
      </article>
    </>
  );
}
