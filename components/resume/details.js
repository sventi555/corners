import { markdownConverter } from '../../util';

export default function ResumeDetails({ details }) {
  return(
    <ul className='ml-8 list-disc'>
      {
        details.map((detail, index) => {
          return (
            <li
              key={ index }
              dangerouslySetInnerHTML={{ __html: markdownConverter.makeHtml(detail.text) }}>
            </li>
          );
        })
      }
    </ul>
  );
}
