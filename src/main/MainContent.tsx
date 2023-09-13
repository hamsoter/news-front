import React, { useEffect, useState } from "react";
import CustomDatePicker from "../components/CustomDatePicker";
import { apiTest } from "../utils/common";
import News from "./News";
import Share from "./Share";

const dummy: string[] = [
  `보는 길을 곳으로 기관과 풍부하게 것이다. 그들의 이상, 뼈 놀이 우리는 무엇을 속에서 되는
칼이다. 없으면, 위하여, 주는 아니더면, 끓는 옷을 일월과 청춘 인생의 것이다. 귀는 찾아다녀도,
그들은 뼈 밥을 트고, 창공에 위하여서. 없으면, 속에 구하지 어디 눈이 그들은 그것은 두기
일월과 황금시대다. 위하여서 작고 우리 긴지라 황금시대다. 인생의 몸이 대한 이는 튼튼하며,
무엇을 끓는다.`,
  `꽃이 새가 예가 시들어 소담스러운 그들의 것이다. 같은 이상이 창공에 그들의 구하지 때문이다.
가슴에 무엇이 때까지 얼음이 위하여서. 청춘 투명하되 들어 힘있다. 살 것은 튼튼하며, 싸인
봄바람을 영원히 그들의 이 있으랴?`,
  `없는 열매를 힘차게 듣기만 얼마나 황금시대다. 그들은 뼈 그들의 지혜는 얼마나 따뜻한 것이다.
이것이야말로 무엇을 때까지 못하다 따뜻한 풀이 위하여서, 심장의 아름다우냐? 들어 밝은 힘차게
동산에는 이것은 목숨이 같이, 이상이 아름다우냐? 품고 끝까지 구하지 바이며, 시들어
봄바람이다. 심장의 넣는 천하를 힘있다.`,
  `타오르고 스며들어 인생에 있으며, 풍부하게 수 수 없으면 피어나는 운다. 곧 반짝이는 영원히
  창공에 있는가? 두기 위하여, 심장의 있는가? 남는 꽃 찾아 낙원을 곧 이것이다. 남는 평화스러운
  위하여, 되려니와, 그들의 이것이다. 눈이 없으면, 청춘이 있다. 실로 원질이 피가 길지 끝에
  목숨을 보배를 있다.`,
  `품으며, 가치를 피가 있는 것이다. 갑 만물은 소리다.이것은 석가는 있는 구하지 지혜는
  봄바람이다. 이상 청춘은 방황하여도, 가치를 거선의 그들의 사막이다. 뜨고, 사랑의 뼈 피가
  원질이 이상을 이상 같이 가치를 말이다. 능히 곳이 두손을 돋고, 예수는 같지 길지 갑 피가
  것이다. 가지에 능히 투명하되 예수는 끓는다. 실현에 옷을 가슴에 타오르고 불어 싹이 보는
  것이다.`,
];

function MainContent() {
  // 뉴스를 받아볼 날짜
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  // 화면에 그릴 뉴스 요약본 배열
  const [newsList, setNewsList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // 날짜를 기반으로 뉴스를 요청
      // FIXME: apiTest => 실제 뉴스요청 api
      const result = await apiTest("api.url", selectedDate, dummy);
      setNewsList(result.data);
    };

    fetchData();
  }, [selectedDate]);

  return (
    <>
      <CustomDatePicker date={selectedDate} setDate={setSelectedDate} />
      <Share newsFullText={newsList.join("\n\n")}></Share>
      {/* FIXME: skeleton */}
      {newsList.length ? <News newsList={newsList} /> : null}
    </>
  );
}

export default MainContent;
