import classNames from 'classnames';
import Styles from './Card.module.css';

export const Body = ({
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
        Styles['card-body'],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
} 