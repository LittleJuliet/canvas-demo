/* eslint-disable react/jsx-pascal-case */
import { Section1_1, Section1_5, Section1_6_1, Section1_8, Section1_9 } from '../pages/chapter-1';
import { GetComputedStyleDemo } from '../pages/test';

export interface Routers {
  name: string; // 在导航栏展示的名称
  path?: string; // 路由路径
  component?: JSX.Element; // 页面
  children?: Routers[]; // 子路由
}

const routerConfig: Routers[] = [
  {
    name: 'chapter1',
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
        name: '1.9rubberband',
        path: '/chapter1/1.9rubberband',
        component: <Section1_9 />,
      },
    ],
  },
  {
    name: 'chapter2',
    children: [
      {
        name: 'getComputedStyle',
        path: '/chapter2/getComputedStyle',
        component: <GetComputedStyleDemo />,
      },
    ],
  },
];

export default routerConfig;
