import { useEffect, useState } from "react";
import CustomDatePicker from "../components/CustomDatePicker";
import News from "./News";
import Share from "./Share";
import { format } from "date-fns/esm";
import { getNews } from "../utils/api";
import ResponseDataType from "../utils/type";
import Error from "./Error";

function MainContent() {
  // 뉴스를 받아볼 날짜
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  // 화면에 그릴 뉴스 요약본 배열
  const [newsList, setNewsList] = useState<string[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const startMent = selectedDate
    ? `${selectedDate?.getFullYear()}년 ${
        selectedDate?.getMonth() + 1
      }월 ${selectedDate?.getDate()}일의 주요 뉴스입니다. \n\n`
    : "...";

  // 뉴스 전문 string
  const newsFullText = selectedDate ? startMent + newsList.join("\n\n") : "...";

  useEffect(() => {
    const fetchData = async () => {
      if (selectedDate) {
        // 날짜를 기반으로 뉴스를 요청
        // FIXME: apiTest => 실제 뉴스요청 api
        const formatDate = format(selectedDate, "yyyy-MM-dd");
        const response: ResponseDataType = await getNews(
          `https://hello-world-shrill-shadow-fb88.dldnwn99.workers.dev/${formatDate}`
        );

        if (response.success) {
          setNewsList(response.data);
          setIsError(false);
        } else {
          setNewsList([]);
          setIsError(true);
        }
      }
    };

    fetchData();
  }, [selectedDate]);

  return (
    <>
      <CustomDatePicker date={selectedDate} setDate={setSelectedDate} />
      {/* FIXME: skeleton */}
      {isError && newsList.length < 1 ? (
        <Error />
      ) : (
        <News newsList={newsList} startMent={startMent} />
      )}
      {isError ? <></> : <Share newsFullText={newsFullText}></Share>}
    </>
  );
}

export default MainContent;
