export interface IFoodOptions {
  position: "right" | "left";
}

export interface IFoodItem {
  name: string,
  description: string,
  img: string,
  options: IFoodOptions;
}

export interface IChefData {
  name: string;
  description: string;
  img: string;
  foodList: IFoodItem[];
}

export interface IItemOptions {
  position: "left" | "right"
}

export interface IItem {
  chef: IChefData;
  options: IItemOptions;
}

export interface IData {
  title: string;
  list: IItem[];
}

export interface IMeetTheChefsProps {
  data: IData;
}
