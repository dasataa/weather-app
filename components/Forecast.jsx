import { iconUrlFromCode } from '../services/weatherService';

export const Forecast = ({ title, items }) => {
    return (
      <div>
        <div className='flex items-center justify-start mt-6'>
          <p className='text-white font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-2' />
        <div className='flex flex-row items-center justify-between text-white'>
          {items.map((item) => (
            <div className='flex flex-col items-center justify-center'>
              <p className='font-light text-sm'>{item.title}</p>
              {/* <p className='my-1 p-3 rounded-full bg-orange-500'></p> */}
              <img
                src={iconUrlFromCode(item.icon)}
                className='w-12 my-1'
                alt=''
              />
              <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };