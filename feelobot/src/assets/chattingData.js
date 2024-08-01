import index from '../assets/index';
import 나연 from './나연chattingData';
import 민수 from './민수chattingData';
import 희선 from './희선chattingData';

let chattingData = [];

// index[0].name의 값에 따라 chattingData를 설정합니다.
switch (index[0].name) {
  case '나연':
    chattingData = 나연;
    break;
  case '민수':
    chattingData = 민수;
    break;
  case '희선':
    chattingData = 희선;
    break;
  default:
    console.error('Unknown name in index[0].name');
    chattingData = []; // 또는 다른 적절한 기본값을 설정할 수 있습니다.
}

export default chattingData;
