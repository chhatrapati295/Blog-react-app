import { Add } from '@mui/icons-material'
import './create.css'

export default function Create() {
  return (
    <div className='create'>
        <div className="create-content">
        <img src="assets/images/createPage.jpg" alt="" />
        <form action="" id='formCreate'>
            <label htmlFor="addFile"><Add className='addBtn'/></label>
            <input type="file" id='addFile' style={{display : 'none'}} />
            <input type="text" placeholder='Title' autoFocus={true} id='inputText' />
            <button type='submit' className="publish">Publish</button>
        </form>
        <textarea placeholder='Tell your story...'>
            
        </textarea>
        </div>
    </div>
  )
}
