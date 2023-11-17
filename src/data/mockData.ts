import { StaticImageData } from "next/image";
import { IPaymentForm, OperatorName } from "@/types";
import { mts, beeline, megafon, tele2, yota, tmobile, rostelekom, sbermobile} from '@/constants';
import LogoMts from '@/assets/mts.png';
import LogoBeeline from '@/assets/beeline.png';
import LogoMegafon from '@/assets/megafon.png';
import LogoTele2 from '@/assets/tele2.png';
import LogoYota from '@/assets/yota.png';
import LogoTmobile from '@/assets/tmobile.png';
import LogoRostelekom from '@/assets/rostelekom.png';
import LogoSbermobile from '@/assets/sbermobile.png';

export interface Operator {
  logo: StaticImageData;
  title: string;
  name: OperatorName;
}

export const data: Operator[] = [
  {
    logo: LogoMts,
    title: "МТС",
    name: mts,
  },
  {
    logo: LogoBeeline,
    title: "БИЛАЙН",
    name: beeline,
  },
  {
    logo: LogoMegafon,
    title: "МЕГАФОН",
    name: megafon,
  },
  {
    logo: LogoTele2,
    title: "ТЕЛЕ2",
    name: tele2,
  },
  {
    logo: LogoYota,
    title: "ЙОТА",
    name: yota,
  },
  {
    logo: LogoTmobile,
    title: "ТМОБАЙЛ",
    name: tmobile,
  },
  {
    logo: LogoRostelekom,
    title: "РОСТЕЛЕКОМ",
    name: rostelekom,
  },
  {
    logo: LogoSbermobile,
    title: "СБЕРМОБАЙЛ",
    name: sbermobile,
  },
];

const COMMIT_PAYMENT_DURATION = 2000;

export const commitPaymentRequest = (requestPayload: IPaymentForm): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = Math.random() < 0.5;
      resolve(result);
    }, COMMIT_PAYMENT_DURATION);
  });
};
