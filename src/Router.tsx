/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import routerConfig, { Routers } from './config/homeMenuRouter';
import Home from './pages';

const routeList: JSX.Element[] = [];

/**
 * 解析路由配置
 */
function getChildrenComponents(childrenRouters: Routers[]) {
  return childrenRouters.forEach((item: Routers) => {
    if (item.children) {
      getChildrenComponents(item.children);
    }
    routeList.push(
      <Route key={item.name} path={item.path} element={item.component} />
    );
  });
}

function Router() {
  getChildrenComponents(routerConfig);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {routeList}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
