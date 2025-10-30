export interface ServiceDataInterface {
  index: number;
  tag: string;
  title: string;
  desc: string;
  image: string;
  count: number;
  countDesc: string;
  points?: string[];
  onButtonClick?: () => void;
}
