import ResumeDetails from './details';
import { formatDate } from '../../util';

export default function ResumeExperience({ data }) {
  return (
    <div className='text-sm mb-3.5 leading-7'>
      <p className='inline-block text-lg'>{ data.role } - { data.company }</p>
      <p className='inline-block italic ml-1 text-sm text-gray-400'>
        ({ formatDate(data.start) } - { data.end ? formatDate(data.end) : 'Present' })
      </p>
      <ResumeDetails details={ data.details } />
    </div>
  );
}
