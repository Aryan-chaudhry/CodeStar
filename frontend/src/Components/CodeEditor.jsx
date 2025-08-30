import React from 'react'

function CodeEditor({darkMode}) {
  return (
    <div className='m-10 h-[40rem] rounded-2xl'>
      <iframe
        id="onecompiler"
        frameBorder="0"
        width="100%"
        height="100%"
        theme="dark"
        src="https://onecompiler.com/embed/cpp?theme=dark&fontSize=16"
        title="DSA Contest Editor"
      ></iframe>
    </div>
  )
}

export default CodeEditor
