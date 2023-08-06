import React, { useEffect } from "react";

function KakaoChannelButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    try {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init("3a26d1c7d4f0c60290a93c1fea1feb9c");
        }
      }

      window.Kakao.Channel.createAddChannelButton({
        container: "#kakao-add-channel-button",
        channelPublicId: "_xdPbxhG",
        supportMultipleDensities: true,
      });

      document.body.appendChild(script);
      document.body.removeChild(script);
    } catch (err) {
      /* empty */
    }
  }, []);

  return <div id="kakao-add-channel-button" className="kakao-btn"></div>;
}

export default KakaoChannelButton;
