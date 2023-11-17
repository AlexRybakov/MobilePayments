import { mts, beeline, megafon, tele2, yota, tmobile, rostelekom, sbermobile } from '@/constants';

export const mainPath = '/';
export const operatorPath = '/operator';

export const mtsPath = `${operatorPath}/${mts}`;
export const beelinePath = `${operatorPath}/${beeline}`;
export const megafonPath = `${operatorPath}/${megafon}`;
export const tele2Path = `${operatorPath}/${tele2}`;
export const yotaPath = `${operatorPath}/${yota}`;
export const tmobilePath = `${operatorPath}/${tmobile}`;
export const rostelekomPath = `${operatorPath}/${rostelekom}`;
export const sbermobilePath = `${operatorPath}/${sbermobile}`;

export const pathsMap = {
  [mts]: mtsPath,
  [beeline]: beelinePath,
  [megafon]: megafonPath,
  [tele2]: tele2Path,
  [yota]: yotaPath,
  [tmobile]: tmobilePath,
  [rostelekom]: rostelekomPath,
  [sbermobile]: sbermobilePath,
};
