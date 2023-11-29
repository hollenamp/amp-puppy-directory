import classNames from 'classnames';
import Styles from './Card.module.css';

export const Head = ({
  children, 
  className="", 
  ...props 
}:{
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div 
      className={classNames(
        className,
        Styles['card-head'],
      )}
      {...props}
    >
      {children}
    </div>
  )
} 