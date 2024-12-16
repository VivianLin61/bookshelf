import React from 'react';

interface StatsCardProps {
  title: string;
  value: number;
  percentage: number;
  comparisonText: string;
  iconSrc?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  percentage,
  comparisonText,
  iconSrc,
}) => {
  return (
    <div className='border-grey-200 flex h-28 w-[326px] flex-col   justify-between gap-4 rounded-md border bg-white p-4 transition duration-300'>
      {/* Title */}
      <div className='text-sm font-semibold text-neutral-500'>{title}</div>

      {/* Value */}
      <div className='text-lg font-semibold text-neutral-600'>{value}</div>

      {/* Indicator and Comparison */}
      <div className='flex items-center'>
        {/* Indicator */}
        <div className='flex items-center rounded-lg border border-slate-100 bg-emerald-50 px-2 py-1'>
          <img
            className='h-1 w-1.5'
            src={iconSrc || 'https://via.placeholder.com/6x4'}
            alt=''
          />
          <div className='ml-2 text-xs font-semibold text-gray-500'>
            {percentage}
          </div>
        </div>

        {/* Comparison Text */}
        <div className='ml-4 text-xs font-semibold text-zinc-400'>
          {comparisonText}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
