function compose<TOriginalProps, TNextProps>(...funcs : Array<Function>)
{
  return funcs.reduce((a: Function, b: Function) => (...args: any) => a(b(...args)), (arg: any) => arg);
}

export default compose
