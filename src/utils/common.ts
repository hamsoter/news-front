// Test Api사용법
/**
 * @param {string} dummyUrl - request요청 url
 * @param {unknown} input - request요청시 함께 보내는 데이터
 * @param {unknown} output - response로 받고자 하는 더미데이터 삽입
 * @returns {unknown} output -
 *
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiTest: any = (dummyUrl: string, input?: unknown, output?: unknown) => {
  return new Promise((resolve) => {
    const response = { data: output ? output : "Hello World!" }; // dummy response
    resolve(response);
  });
};
