import React from 'react';

type HOC<T extends {}, S> = (
  BaseComponent: React.ComponentType<T>
) => React.ComponentType<S>;
function compose<T, P>(
  f1: HOC<T, P>
): (BaseComponent: React.ComponentType<T>) => React.ComponentType<P>;
function compose<T, S1, P>(
  f1: HOC<S1, P>,
  f2: HOC<T, S1>
): (BaseComponent: React.ComponentType<T>) => React.ComponentType<P>;
function compose<T, S1, S2, P>(
  f1: HOC<S2, P>,
  f2: HOC<S1, S2>,
  f3: HOC<T, S1>
): (BaseComponent: React.ComponentType<T>) => React.ComponentType<P>;
function compose<T, S1, S2, S3, P>(
  f1: HOC<S3, P>,
  f2: HOC<S2, S3>,
  f3: HOC<S1, S2>,
  f4: HOC<T, S1>
): (BaseComponent: React.ComponentType<T>) => React.ComponentType<P>;
function compose<T, S1, S2, S3, S4, P>(
  f1: HOC<S4, P>,
  f2: HOC<S3, S4>,
  f3: HOC<S2, S3>,
  f4: HOC<S1, S2>,
  f5: HOC<T, S1>
): (BaseComponent: React.ComponentType<T>) => React.ComponentType<P>;
function compose<T, S1, S2, S3, S4, S5, P>(
  f1: HOC<S5, P>,
  f2: HOC<S4, S5>,
  f3: HOC<S3, S4>,
  f4: HOC<S2, S3>,
  f5: HOC<S1, S2>,
  f6: HOC<T, S1>
): (BaseComponent: React.ComponentType<T>) => React.ComponentType<P>;
function compose<T, S1, S2, S3, S4, S5, S6, P>(
  f1: HOC<S6, P>,
  f2: HOC<S5, S6>,
  f3: HOC<S4, S5>,
  f4: HOC<S3, S4>,
  f5: HOC<S2, S3>,
  f6: HOC<S1, S2>,
  f7: HOC<T, S1>
): (BaseComponent: React.ComponentType<T>) => React.ComponentType<P>;
function compose(
  ...fns: Array<HOC<any, any>>
): (BaseComponent: React.ComponentType<any>) => React.ComponentType<any>;
function compose(...fns: any) {
  return fns.reduce(
    (a: any, b: any) => (...args: any) => a(b(...args)),
    (arg: any) => arg
  );
}

export default compose;
