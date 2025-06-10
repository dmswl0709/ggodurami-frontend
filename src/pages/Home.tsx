import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";

export default function Home() {
  const markers = [
    { lat: 37.5665, lng: 126.978, message: "버 충전시설 변형흔 발생" },
    { lat: 35.1796, lng: 129.0756, message: "버 충전시설 변형흔 발생" },
  ];

  return (
    <div className="bg-[#FFF5E5] min-h-screen w-full flex justify-center">
      {/* 이 내부 div가 전체 콘텐츠를 수직 방향으로 중앙 정렬 */}
      <div className="flex flex-col items-center w-full max-w-[1200px] px-4 py-6">
        {/* Header */}
        <header className="w-full flex justify-between items-center pb-6">
          <h1 className="text-3xl font-bold text-green-800">꼬두라미</h1>
          <nav className="space-x-6 text-sm">
            <span>신고상황</span>
            <span>커뮤니티</span>
            <span>지원금 및 세미나 정보</span>
            <span>로그인/회원가입</span>
            <span>마이페이지</span>
          </nav>
        </header>

        {/* Map */}
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-md mb-6">
          <Map
            center={{ lat: 36.5, lng: 127.8 }}
            style={{ width: "100%", height: "100%" }}
            level={13}
          >
            {markers.map((marker, i) => (
              <CustomOverlayMap
                key={i}
                position={{ lat: marker.lat, lng: marker.lng }}
                yAnchor={1}
              >
                <div className="bg-white px-2 py-1 text-sm rounded shadow-md border border-gray-300">
                  {marker.message}
                </div>
              </CustomOverlayMap>
            ))}
          </Map>
        </div>

        {/* 신고 버튼 */}
        <div className="mb-10">
          <button className="bg-red-100 text-red-600 font-bold py-2 px-6 border border-red-400 rounded-full text-lg">
            ⚠️ 실시간 피해 신고하기
          </button>
        </div>

        {/* 세미나 정보 */}
        <section className="w-full">
          <h2 className="text-xl font-bold mb-4">지원금 및 세미나 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md p-4 rounded-xl border border-gray-200"
                >
                  <p className="text-sm text-green-600 font-bold mb-2">
                    공지사항
                  </p>
                  <p className="font-semibold mb-2">
                    마을 공동체 참여 없이도 직불금 수령...
                  </p>
                  <div className="text-xs text-gray-500 flex justify-between">
                    <span>2025-05-29</span>
                    <span>민혜경</span>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}