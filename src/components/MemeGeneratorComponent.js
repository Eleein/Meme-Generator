import React from "react";

export function MemeGeneratorComponent({
  topText,
  bottomText,
  imgSrc,
  addTextToImg,
  genImg,
}) {
  return (
    <div>
      <form className="meme-form">
        <input
          type="text"
          name="topText"
          value={topText}
          placeholder="insert text here"
          onChange={addTextToImg}
        />
        <input
          type="text"
          name="bottomText"
          value={bottomText}
          placeholder="insert text here"
          onChange={addTextToImg}
        />

        <button type="button" onClick={genImg}>
          Gen
        </button>
      </form>
      <div className="meme">
        <img src={imgSrc} alt="random-meme"/>
        <h2 className="top">{topText}</h2>
        <h2 className="bottom">{bottomText}</h2>
      </div>
    </div>
  );
}
