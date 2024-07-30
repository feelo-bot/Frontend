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
    description: "희선은 40대 후반의 엄마로, 20대 아들을 둔 어머니입니다. 그녀는 성숙한 시각과 깊이 있는 대화를 나누기를 선호합니다. 가정과 사회에서의 다양한 경험이 그녀의 지혜를 더해줍니다.",
    effects: [
      "성숙한 대화를 나눌 수 있습니다.",
      "인생 경험에서 오는 깊이 있는 소통이 가능합니다.",
      "조언을 제공하고 공감하는 방법을 배울 수 있습니다.",
      "자녀의 고민을 이해하고 지원할 수 있습니다.", 
    ],
    likeCount: 1283,
    img: heesun,
    chatRoomCreated: false,  
  },
  {
    name: "나연",
    tags: ["# 10대 초반", "# 사춘기의 중학생", "# 난이도 ⭐⭐⭐"],
    description: "나연은 중학생으로, 사춘기에 접어든 시점입니다. 그녀는 다양한 감정을 경험하며 자신의 정체성을 찾아가고 있습니다. 친구들과의 관계와 학교 생활에서 많은 고민을 하고 있습니다.",
    effects: [
      "사춘기의 고민을 이해하고 대화할 수 있습니다.",
      "다양한 감정과 반응을 이해할 수 있습니다.",
      "자기 표현과 고민에 대해 공감할 수 있습니다.",
      "자아 발견과 자존감 향상에 도움을 줄 수 있습니다.", 
    ],
    likeCount: 756,
    img: nayeon,
    chatRoomCreated: false, 
  },
];

export default characterData;
