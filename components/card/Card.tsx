import { Head } from "./Head"
import { Body } from "./Body"
import { Foot } from "./Foot";
import Styles from './Card.module.css';
import type { AMPThemeColors, AMPThemeRadius } from '@/interfaces/AMPTheme';
import classNames from "classnames";

type CardRadius = Pick<AMPThemeRadius, 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'>;

type Props = {
  id?:string;
  children?: React.ReactNode;
  className?: string;
  onClick?:any;
  color?:keyof AMPThemeColors;
  radius?:keyof CardRadius;
  style?:React.CSSProperties;
}

export const Card = ({
  color,
  radius,
  children, 
  className="", 
  style,
}:Props) => {
  const radiusSize = `card-radius-${radius}`;
  const cardColor = `card-${color ? color: 'LightGray'}`; 
  return (
    <div className={classNames(
      Styles.card,
      Styles[cardColor],
      Styles[radiusSize],
      className
    )}
    style={style}
    >
      {children}
    </div>
  )
} 

Card.Head = Head
Card.Body = Body
Card.Foot = Foot