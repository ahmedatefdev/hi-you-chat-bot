import { ReactNode } from "react";

export type TextStep = {
  id: number | string;
  message: number | string | Function;
  trigger?: String | Number | Function;
  avatar?: String;
  end?: boolean;
  delay?: Number;
  placeholder?: String;
  hideInput?: Boolean;
  inputAttributes?: Object;
  metadata?: Object;
};
// Example
// {
//   id: '1',
//   message: 'Hello World',
//   trigger: '2',
// },
// {
//   id: '2',
//   message: ({ previousValue, steps }) => 'Hello',
//   trigger: ({ value, steps }) => '3',
// },
// {
//   id: '3',
//   message: 'Bye',
//   end: true,
// }
export type optionsStep = {
  id: number | string;
  options: { value: any; label: string; trigger: string | number | Function }[];
  end?: boolean;
  placeholder?: string;
  hideInput?: boolean;
  metadata?: {};
};
// Example
// {
//   id: '1',
//   options: [
//     { value: 1, label: 'Number 1', trigger: '3' },
//     { value: 2, label: 'Number 2', trigger: '2' },
//     { value: 3, label: 'Number 3', trigger: '2' },
//   ],
// }
export type UserStep = {
  id: String | Number;
  user: Boolean;
  trigger?: String | Number | Function;
  validator?: Function;
  end?: Boolean;
  placeholder?: String;
  metadata?: Object;
};
// Example
// {
//   id: '1',
//   user: true,
//   end: true,
// }
export type CustomStep = {
  id: String | number;
  component: ReactNode;
  replace?: Boolean;
  waitAction?: Boolean;
  asMessage?: Boolean;
  trigger?: String | Number | Function;
  delay?: Number;
  end?: Boolean;
  placeholder?: String;
  hideInput?: Boolean;
  metadata?: Object;
};
// Example
// {
//   id: '1',
//   component: <CustomComponent />
//   trigger: '2'
// }

export type UpdateStep = {
  id: String | Number;
  update: String | Number;
  trigger: String | Number | Function;
  placeholder?: String;
  metadata?: Object;
};
// Example
// {
//   id: '1',
//   update: '2',
//   trigger: '3',
// }

type ChatStep = UpdateStep | CustomStep | TextStep | UserStep | optionsStep;
export default ChatStep;
