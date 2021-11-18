export interface IItem {
  title: string;
  text: string;
}

export interface IData {
  title: string;
  list: IItem[];
}

export interface IHowItWorksProps {
  data: IData;
}
