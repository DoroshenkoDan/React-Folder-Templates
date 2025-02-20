import cn from 'classnames';
import s from './[FTName].module.scss';

interface T[FTName]Props extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >{
  className?: string;
}

/**
 *  [FTName] 
 *  @param className
 */

export default function [FTName]({ className = '', children }: T[FTName]Props) {
  return(
      <div className={cn(s.[FTName], className)}>
        {children}
      </div>
  )
}


