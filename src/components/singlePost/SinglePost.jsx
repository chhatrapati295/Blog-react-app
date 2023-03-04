import { Delete, Edit,  } from '@mui/icons-material'
import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <img src="https://images.unsplash.com/photo-1677227812546-107690ee0ad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjg0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        <div className="post-edit">
                <Edit className='write'/>
                <Delete className='delete'/>
        </div>
            <p className="post-title">Lorem ipsum dolor</p>
        <div className="post-info">
            <span className="author">Author : <b>Jane Smith</b></span>
            <span className="data">1 day ago</span>
        </div>
        <p className="post-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus sunt qui inventore, veniam sit consequatur cumque iure sequi natus ab ut impedit velit. Iusto earum alias officiis at tempore sed impedit dolorum distinctio mollitia quam quibusdam, a nisi corporis ratione nesciunt tempora quia magnam, delectus aliquid adipisci minus exercitationem officia incidunt consectetur! Deleniti aut saepe illum! Nesciunt, deserunt ratione officiis temporibus molestiae autem vero sint aut quae eligendi vitae sequi distinctio aperiam pariatur rem tenetur veritatis rerum unde accusamus ab quo quia dignissimos fuga? Itaque, tempore rerum dolores quae voluptatum voluptates. Voluptate accusamus illo quis! Accusantium repellendus, saepe voluptatum perferendis placeat quo ducimus tempore laborum, inventore maxime magnam, quod nostrum quasi distinctio eos. Exercitationem ratione veritatis impedit blanditiis ipsum vero soluta nostrum non commodi natus autem, tenetur esse, modi odio consequuntur provident ullam eius. Doloremque illo tempora modi enim ipsam obcaecati numquam quos, quaerat deleniti, mollitia repellat neque perspiciatis, aspernatur facilis tenetur aut? Eos sequi atque debitis impedit blanditiis minus adipisci praesentium quisquam voluptatibus sapiente quas ipsum officia magni ut sit quis, possimus est beatae quasi incidunt dolores doloribus perspiciatis perferendis. Dolor, facere. Explicabo iusto sunt reprehenderit dolorem, excepturi, eum odio est nobis ducimus repudiandae nesciunt magnam illum ex quos.</p>
    </div>
  )
}
