import minsoo from '../assets/민수.png';
import nayeon from '../assets/나연.png';
import heesun from '../assets/희선.png';

const characterData = [
  {
    name: "민수",
    tags: ["# 20대 중반", "# 봉사동아리 회장", "# 난이도 ⭐"],
    description: "민수는 현재 특수 교육을 전공하며 대학에 재학 중입니다. 그는 따뜻한 마음씨를 가지고 있으며 봉사 동아리 회장으로, 최대한 쉬운 언어로 소통을 시도합니다.",
    effects: [
      "가벼운 대화를 이어갈 수 있습니다.",
      "편안하고 진심 어린 소통이 가능합니다.",
      "친근하고 따뜻한 반응을 받을 수 있습니다.",
      "위로하고 공감하는 방법을 배울 수 있습니다.",
    ],
    likeCount: 2148,
    img: minsoo,
    chatRoomCreated: true,
  },
  {
    name: "희선",
    tags: ["# 40대 후반", "# 20대 아들을 둔 어머니", "# 난이도 ⭐⭐"],
    description: "희선은 40대 후반의 주부로, 20대 아들을 두고 있으며 가족들과 많은 대화를 합니다.  희선은 자폐인들과의 소통에 대해 깊은 이해와 배려를 가지고 있습니다.",
    effects: [
      "경험과 지혜를 바탕으로 한 조언을 받을 수 있습니다.",
      "따뜻하고 배려심 깊은 소통을 경험할 수 있습니다.",
      "일상생활에서의 문제 해결 방법을 배울 수 있습니다.",
      "부모의 입장에서 공감하고 위로하는 법을 배울 수 있습니다.", 
    ],
    likeCount: 1283,
    img: heesun,
    chatRoomCreated: false,  
  },
  {
    name: "나연",
    tags: ["# 10대 초반", "# 사춘기의 중학생", "# 난이도 ⭐⭐⭐"],
    description: "나연은 10대 초반의 중학생으로, 사춘기를 겪고 있습니다. 그녀는 학교 생활과 친구 관계에서 다양한 경험을 쌓고 있으며, 자신의 감정과 생각을 표현하는 방법을 배우고 있습니다. ",
    effects: [
      "또래 친구와의 소통 방법을 배울 수 있습니다.",
      "감정을 솔직하게 표현하는 법을 익힐 수 있습니다.",
      "사춘기 시절의 다양한 감정을 이해하고 공감할 수 있습니다.",
      "학교 생활에서의 문제 해결 방법을 배울 수 있습니다.", 
    ],
    likeCount: 756,
    img: nayeon,
    chatRoomCreated: true, 
  },
];

export default characterData;
