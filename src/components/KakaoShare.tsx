import { useEffect } from "react";
import { Button } from "@mui/material";

type Props = {
  content: string;
};

function KakaoShare({ content }: Props) {
  // 재랜더링시에 실행되게 해준다.
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    window.Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    window.Kakao.init("3a26d1c7d4f0c60290a93c1fea1feb9c");
  }, []);

  const thisHref = document.location.href;

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: "text",
      text: content,
      link: {
        // FIXME: url 배포용 링크로 수정
        mobileWebUrl: `${thisHref}`,
        webUrl: `${thisHref}`,
      },
    });
  };

  return (
    <Button
      variant="outlined"
      color="warning"
      sx={{ marginX: 0.5 }}
      onClick={() => {
        shareKakao();
      }}
    >
      카카오톡 공유
    </Button>
  );
}

export default KakaoShare;
