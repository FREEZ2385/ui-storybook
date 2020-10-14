import React from 'react';
import { ControlledAccordions } from '../component/Molecules/ControlledAccordions';

export default {
  title: 'Molecules/ControlledAccordions',
  component: ControlledAccordions,
  argTypes: {
    componentGuideList : { control: 'object' },
  }
};

const Template = (args) => <ControlledAccordions {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  componentGuideList : [
    {
        header : "AppbarComponent",
        secondHeader : "최상단의 앱바",
        content : "최상단에서 타이틀, 메뉴바, 로그인 정보등의 간편한 정보등을 표시"
    },
    {
        header : "CardCompoent",
        secondHeader : "다양한 블로그 포스팅 카드",
        content : "제목과 날짜 그리고 간단한 내용만 적으면 자동으로 컴포넌트 생성 가능! src 폴더 내 CardPost.js에 포스팅하고싶은 데이터를 추가해보세요."
    },
    {
        header : "FloatingActionButton",
        secondHeader : "우측 하단의 추가 버튼",
        content : "항상 우측하단으로 고정되며 버튼 활성화가 되면 포스팅 추가 혹은 페이지를 넘기기가 가능합니다."
    },
    {
        header : "ControlledAccordions",
        secondHeader : "지금 보시는 위의 가이드 버튼",
        content : "토글기능으로 상세정보 확장과 축소를 간편하게 해주며 지금 누르신 컴포넌트가 ControlledAccordions입니다. 수정 내용은 src폴더 내의 ComponentGuideList.js에서 추가해보세요."
    },
  ],
};


