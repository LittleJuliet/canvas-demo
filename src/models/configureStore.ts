import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { ReduxState, rootReducers } from './combine';

const isDebuggingInChrome =
  process.env.NODE_ENV === 'development' && !!window.navigator.userAgent;
const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const middleware: any[] = isDebuggingInChrome ? [logger] : [];

export default function configureStore(initialState?: Partial<ReduxState>) {
  const appliedMiddleware = applyMiddleware(...middleware);

  const store = createStore(
    rootReducers,
    initialState,
    compose(
      appliedMiddleware,
      isDebuggingInChrome && (window as any).devToolsExtension
        ? (window as any).devToolsExtension()
        : (f: any) => f
    )
  );

  return store;
}
