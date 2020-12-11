import React, { useCallback } from 'react'
import Dropzone, { useDropzone } from 'react-dropzone'

function UploadField(props){
  
  const {input, label, type, meta: {touched, error}} = props

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsBinaryString(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} {...input} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}

export default UploadField