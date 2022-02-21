/* eslint-disable react/jsx-pascal-case */
import { Section1_1, Section1_10, Section1_5, Section1_6_1, Section1_8, Section1_8_2, Section1_9 } from '../pages/chapter-1';
import { Alpha, Linear, MyRect } from '../pages/chapter-2';
import { GetComputedStyleDemo, Html2CanasDemo, ReduxActionsDemo } from '../pages/test';

export interface Routers {
  name: string; // 在导航栏展示的名称
  path?: string; // 路由路径
  component?: JSX.Element; // 页面
  children?: Routers[]; // 子路由
}

const routerConfig: Routers[] = [
  {
    name: 'Chapter1',
    children: [
      {
        name: '1.1',
        path: '/chapter1/1.1',
        component: <Section1_1 />,
      },
      {
        name: '1.5clock',
        path: '/chapter1/1.5clock',
        component: <Section1_5 />,
      },
      {
        name: '1.6.1mouse',
        path: '/chapter1/1.6.1mouse',
        component: <Section1_6_1 />,
      },
      {
        name: '1.8HTML',
        path: '/chapter1/1.8HTML',
        component: <Section1_8 />,
      },
      {
        name: '1.8.2rubberband',
        path: '/chapter1/1.8.2rubberband',
        component: <Section1_8_2 />,
      },
      {
        name: '1.9PrintCanvas',
        path: '/chapter1/1.9PrintCanvas',
        component: <Section1_9 />,
      },
      {
        name: '1.10offscreenCanvas',
        path: '/chapter1/1.10offscreenCanvas',
        component: <Section1_10 />,
      },
    ],
  },
  {
    name: 'Chapter2',
    children: [
      {
        name: '2.3 My Rect',
        path: '/chapter2/2.3MyRect',
        component: <MyRect />,
      },
      {
        name: '2.4 Alpha',
        path: '/chapter2/2.4Alpha',
        component: <Alpha />,
      },
      {
        name: '2.5.1 Linear',
        path: '/chapter2/2.5.1Linear',
        component: <Linear/>,
      }
    ]
  },
  {
    name: 'Test',
    children: [
      {
        name: 'getComputedStyle',
        path: '/chapter2/getComputedStyle',
        component: <GetComputedStyleDemo />,
      },
      {
        name: 'reduxActionsDemo',
        path: '/chapter2/reduxActionsDemo',
        component: <ReduxActionsDemo />,
      },
      {
        name: 'html2CanasDemo',
        path: '/chapter2/html2CanasDemo',
        component: <Html2CanasDemo />,
      },
    ],
  },
];

export default routerConfig;
