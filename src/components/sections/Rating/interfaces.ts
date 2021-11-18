export interface IItem {
  indicator: String;
  text: String;
}

export interface IData {
  title: String;
  list: IItem[];
}

export interface IRatingProps {
  data: IData;
}
