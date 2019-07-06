import { MyDemoModule } from './my-demo.module';

describe('MyDemoModule', () => {
  let myDemoModule: MyDemoModule;

  beforeEach(() => {
    myDemoModule = new MyDemoModule();
  });

  it('should create an instance', () => {
    expect(myDemoModule).toBeTruthy();
  });
});
