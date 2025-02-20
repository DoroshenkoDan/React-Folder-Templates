import React from 'react';
import cn from 'classnames';
import s from './[FTName].module.scss';

interface Props {
  className?: string;
}

/**
 *  [Name] 
 *  @param className
 */

export default function [FTName]({ className = '' }: Props) {
  return (
    <div className={cn(s.[FTName], className)}>
      
    </div>
  );
}