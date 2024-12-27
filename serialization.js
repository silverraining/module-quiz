//데이터 직렬화 관련 함수들 // serializeUser...
// 사용자 정보를 문자열로 직렬화하는 함수
function serializeUser(user) {
  const { name, email, age, grade, createdAt } = user;
  return `${name},${email},${age},${grade},${createdAt}`;
}

export default serializeUser;