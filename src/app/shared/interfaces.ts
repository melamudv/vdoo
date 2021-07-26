export interface IResponse extends IPhone, ICar, ILaptop {
  items: [];
  title: string;
}
export interface IPhone {
  vendor: string;
  name: string;
  price: number;
}
export interface ICar extends IPhone{
  is_hybrid: boolean;
}
export interface ILaptop extends IPhone{
  system: string;
}
