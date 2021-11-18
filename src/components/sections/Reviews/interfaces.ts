export interface IItem {
  name: string;
  img: string;
  feedback: string;
}

export interface IData {
  title: string;
  list: IItem[];
}

export interface IReviewsProps {
  data: IData;
}
