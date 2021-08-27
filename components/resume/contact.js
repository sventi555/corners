export default function ResumeContact({ iconPath, link, text }) {
  return (
    <div className='flex flex-grow text-xs items-center'>
      <img className='icon inline-block w-5 h-5 mt-0.5 mr-3.5' src={ iconPath } />
      <a className='no-underline duration-100' href={ link }>{ text }</a>
    </div>
  );
}
