import ResumeDetails from './details';
import { formatDate } from '../../util';

export default function ResumeProject({ data }) {
  return (
    <div className='text-sm mb-3.5 leading-7'>
      <a className='inline-block text-lg' href={ data.link }>{ data.name }</a>
      <p className='inline-block italic ml-1 text-sm text-gray-400'>({ formatDate(data.date) })</p>
      <ResumeDetails details={ data.details } />
    </div>
  );
}
